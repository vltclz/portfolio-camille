# New release process

Little how-to when a redeployment is needed after pulling changes on the remote repo

## PM2 for Strapi & NextJS

First of all make sure the `.env.local` on the server is correctly updated.
If a new Content type was created on Strapi, we must edit the Strapi prod to allow permissions before starting the build of NextJS otherwise it won't work.

If `pm2 list` doesn't show anything, here's a little work around (but this is advised anyway, at least we start clean)

```bash
$ sudo pkill -f PM2
# Go to /strapi
$ git pull
$ npm install --production
$ NODE_ENV=production pm2 start server.js --name strapi-camille
# Go to /nextjs
$ pm2 start --name=nextjs-camille npm -- start
$ sudo pm2 startup
$ sudo pm2 save
$ sudo service nginx start
```

## Issue with the hook permission

For some reason the hook can not have the permissions anymore, with the `output.log` showing a "error - ESLint: EACCES: permission denied".
You can try to find the user/group that is actually executing the script by adding that to `redeploy.sh` :

```bash
# To put after the `exec >` so that it outputs in the `output.log`
echo "User: $(whoami)"
echo "Groups: $(groups)"
```

And then "force" the execution of the necessary command lines in the sudoers file by running `sudo visudo` and adding that kind of lines :

```
<user> ALL=(ALL) NOPASSWD: /usr/bin/pkill -f PM2
<user> ALL=(ALL) NOPASSWD: /usr/bin/pm2 startup
<user> ALL=(ALL) NOPASSWD: /usr/bin/pm2 save
<user> ALL=(ALL) NOPASSWD: /usr/sbin/service nginx start
```

(If needed, do `which pm2` or `which service` to know where are located the actual command's full path)
