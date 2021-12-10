# Deployment process

This is kind of a cheat sheet that explains how I deployed this stack (and all the documentations/sources I used)

#

## VPS Configuration

I used a `DEV` instance on Scaleway that runs on Ubuntu Xenial (16.04) and followed this [Digital Ocean tutorial](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04).

Create a user to prevent using `root` (which can make very destructive changes because of its very broad privileges), later on it will allow use to connect through `ssh vltclz@<server ip>` :

```
$ adduser vltclz
```

Make this user an admin that can use `sudo` commands :

```
$ usermod -aG sudo vltclz
```

Set up public key authentication for the new user (First we need to generate an SSH key on our local machine and copy it)

```
$ su - vltclz
$ mkdir ~/.ssh
$ chmod 700 ~/.ssh
$ nano ~/.ssh/authorized_keys
```

After **pasting the copied SSH key** in this file, we need to restrict it again and exit `sudo` mode :

```
$ chmod 600 ~/.ssh/authorized_keys
$ exit
```

Disable password authentication to make the login to the server even more secure

```
$ sudo nano /etc/ssh/sshd_config
> PasswordAuthentication no
$ sudo systemctl reload sshd
```

Set up a basic firewall that allows only the connection needed which is SSH for now :

```
$ sudo ufw allow OpenSSH
$ sudo ufw enable
```

#

## Strapi

I followed this [Strapi tutorial](https://strapi.io/blog/how-to-deploy-a-strapi-application)

Install Node.js (version 14) :

```
$ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ node -v
```

Install MongoDB :

```
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
$ echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
$ sudo service mongod start
```

After cloning and `cd` into the Strapi project, we install Strapi :

```
$ npm install --production
```

Install PM2 in order to have the API always available

```
$ sudo npm install pm2 -g
```

The we need to create a `server.js` file that will allow PM2 to start Strapi :

```
#!/usr/bin/env node
'use strict';

// Start Strapi
const strapi = require('strapi');
strapi().start();
```

Start the Strapi process with PM2

```
$ NODE_ENV=production pm2 start server.js --name my-strapi
```

#

## Next JS

After you `cd` into your Next JS root folder, all you need to do is :

```
$ npm install
$ npm run build
$ pm2 start --name=my-nextjs npm -- start
```

Additionally, to have PM2 strating at startup you need to do :

```
$ pm2 startup systemd
```

and run the prompted command that is displayed.

#

## Nginx

In order to serve our Next JS Front-End, we create a Nginx configuration file specifically for our `example.com` domain name

```
$ cd /etc/nginx/sites-available
$ sudo nano example.com
```

Write the file with the correct domain/subdomain and the correct localhost port :

```
server {
        listen 80;
        listen [::]:80;

        root /var/www/html;
        index index.html index.htm index.nginx-debian.html;

        server_name example.com www.example.com;

        location / {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }
}
```

Next we need to enable this config file :

```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```

In order to avoid a hash bucket problem, we change the original config of Nginx by uncommenting this line :

```
$ sudo nano /etc/nginx/nginx.conf
> server_names_hash_bucket_size 64;
```

We can do the same thing with the Strapi port and a subdomain (`strapi.example.com` for example) in order to serve Strapi Front-End as well.  
After that, we can check our edits didn't break Nginx, and we restart to validate our changes :

```
$ nginx -t
$ sudo systemctl restart nginx
```

#

## DNS Configuration

In OVH/Google Domain/others, link your domain to your server, by adding new DNS entries.
You must add an entry for `example.com`, `www.example.com` and `strapi.example.com`. Set the Type to `A` and the Target to the server's IP address for all of them.

#

## HTTPS/SSL Encryption

Install Certbot :

```
$ sudo add-apt-repository ppa:certbot/certbot
$ sudo apt-get update
$ sudo apt install python-certbot-nginx
```

Update firewall to allow HTTPS :

```
$ sudo ufw allow 'Nginx Full'
```

Obtain certificates for given domains/subdomains :

```
$ sudo certbot --nginx -d example.com -d www.example.com
```

(Option 2 is the default choice and what is recommended)  
Next, just set up an automatic certificate renewal :

```
$ sudo certbot renew --dry-run
```

#

## Webhook to automatically redeploy from Strapi

Based on some parts of this [DigitalOcean tutorial](https://www.digitalocean.com/community/tutorials/deploying-react-applications-with-webhooks-and-slack-on-ubuntu-16-04) and this [blog post](https://willbrowning.me/setting-up-automatic-deployment-and-builds-using-webhooks/)

Install `webhook` (This is an example using version 2.6.6)

```
$ cd ~
$ wget https://github.com/adnanh/webhook/releases/download/2.6.6/webhook-linux-amd64.tar.gz
$ tar -xvf webhook-linux-amd64.tar.gz
$ sudo mv webhook-linux-amd64/webhook /usr/local/bin
$ rm -rf webhook-linux-amd64*
```

Configuring webhook

```
$ mkdir ~/hooks
$ mkdir ~/hooks/my-website
$ nano ~/hooks/hooks.json
```

Then write the configuration of this webhook

- `id` : Name of the endpoint the webhook server
- `execute-command` : Path to the script that will be executed when the hook is triggered
- `command-working-directory` : Working directory that will be used when executing the command

```
[
        {
                "id": "redeploy-nextjs",
                "execute-command": "/home/username/hooks/my-website/redeploy.sh",
                "command-working-directory": "/home/username/hooks/my-website"
        }
]
```

Create the output file where the last logs of the executed script will be saved

```
$ cd ~/hooks/my-website
$ touch output.log
```

Create and make the script file executable

```
$ touch redeploy.sh
$ chmod +x redeploy.sh
```

The first line is useful to log everything the script is outputting in the `output.log` file

```
#!/bin/bash -e

exec > /home/username/hooks/my-website/output.log 2>&1

cd ~/my-website/nextjs
npm run build
pm2 restart my-nextjs
```

In order to keep our webhook running in the background, we can use Supervisor

```
$ sudo apt install supervisor
$ cd /etc/supervisor/conf.d
$ sudo nano webhooks.conf
```

```
[program:webhooks]
command=bash -c "webhook -hooks /home/username/hooks/hooks.json -verbose"
redirect_stderr=true
autostart=true
autorestart=true
user=username
numprocs=1
process_name=%(program_name)s_%(process_num)s
stdout_logfile=/home/username/hooks/supervisor.log
environment=HOME="/home/username",USER="username"
```

Then we just need to start the webhook with Supervisor (+ create a file that will save the webhook logs)

```
touch ~/hooks/supervisor.log
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start webhooks:*
```

#

## Troubleshooting
