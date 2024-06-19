# ![React Router DOM Lab - Setup](./assets/hero.png)

## Setup

Open your Terminal application and navigate to your `~/code/ga/labs` directory:

```bash
cd ~/code/ga/labs
```

Create a new Vite project for your React app:

```bash
npm create vite@latest
```

You'll be prompted to choose a project name. Let's name it `react-router-dom-lab`.

- Select a framework. Use the arrow keys to choose the `React` option and hit `Enter`.

- Select a variant. Again, use the arrow keys to choose `JavaScript` and hit `Enter`.

Navigate to your new project directory and install the necessary dependencies:

```bash
cd react-router-dom-lab
npm i
```

Open the project's folder in your code editor:

```bash
code .
```

### Configuring ESLint

Before we begin, we need to adjust the ESLint configuration. Add the following rules to the `.eslintrc.cjs` file:

```js
rules: {
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
  'react/prop-types': 'off', // add this line
  'react/no-unescaped-entities': 'off' // add this line
},
```

The first addition prevents warnings if you're not declaring types for your props (which we're not), and the second prevents warnings if you're using contractions within JSX.

### Clear `App.jsx`

Open the `App.jsx` file in the `src` directory and replace the contents of it with the following:

```jsx
// src/App.jsx

const App = () => {
  return <h1>Hello world!</h1>;
};

export default App;
```

### Running the development server

To start the development server and view our app in the browser, we'll use the following command: 

```bash
npm run dev
```

You should see that `Vite` is available on port number 5173: 

```plaintext
localhost:5173
```

### GitHub setup

To add this project to GitHub, initialize a Git repository:

```bash
git init
git add .
git commit -m "init commit"
```

Make a new repository on [GitHub](https://github.com/) named react-router-dom-lab. 

Link your local project to your remote GitHub repo:

```bash
git remote add origin https://github.com/<github-username>/react-router-dom-lab.git
git push origin main
```

> 🚨 Do not copy the above command. It will not work. Your GitHub username will replace `<github-username>` (including the `<` and `>`) in the URL above.

## Adding CSS starter code

Styling is not a requirement for this lab, but feel free to develop the final look of this application as you see fit. Below, you will find some basic CSS to get you started.

Add the following to the bottom of `src/index.css`:

```css
/* src/index.css */

body {
  padding: 16px;
  display: flex;
  flex-direction: column;
}

#root {
  width: 100%;
  height: 100%;
}

ul {
  padding: 0;
  display: flex;
  list-style: none;
}

li {
  margin-right: 16px;
}

.mail-box {
  border: 2px solid white;
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label,
button {
  margin: 16px 0px;
  font-weight: bold;
}

input,
select,
textarea {
  padding: 8px;
}

button {
  background-color: #535bf2;
}
```
