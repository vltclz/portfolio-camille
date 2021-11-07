# Next.js

This project is my first experience building a website with Next.js so for further documentation I wanted to have a kind of basic cheat sheet to explain what I understood from this framework.

#

## Benefits

Unlike a traditional React app where the entire application is loaded and rendered on the client, Next.js allows the first page load to be rendered by the server, which is great for SEO and performance.  
There is a built-in page routing that handles pretty much everything out of the box.  
Typescript & Sass are also included directly in a Next.js project.

#

## Styling

Under the `styles` folder you should have a `globals.css` file that is global CSS that will be injected in the app if it's imported in the `_app.jsx` file.  
You can add more styles by creating files named `xxx.module.css` and import them like this in any component or page :

```js
import styles from '../styles/xxx.module.css';
// ...
<div className={styles.container}>Some content</div>;
<div className={[styles.container, condition && styles.conditional].join(' ')}>Some content</div>
```
