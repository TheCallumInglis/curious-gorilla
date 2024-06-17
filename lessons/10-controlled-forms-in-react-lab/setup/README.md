# ![Controlled Forms in React Lab - Setup](./assets/hero.png)

## Setup

Open your Terminal application and navigate to your `~/code/ga/labs` directory:

```bash
cd ~/code/ga/labs
```

Create a new Vite project for your React app:

```bash
npm create vite@latest
```

You'll be prompted to choose a project name. Let's name it `controlled-forms-in-react-lab`.

- Select a framework. Use the arrow keys to choose the `React` option and hit `Enter`.

- Select a variant. Again, use the arrow keys to choose `JavaScript` and hit `Enter`.

Navigate to your new project directory and install the necessary dependencies:

```bash
cd controlled-forms-in-react-lab
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

## Starter CSS

Before getting started, add the following style rules to `index.css`:

First, change the existing style rules for `body` to this:

```css
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
}
```

Then, add these rules **above** the `@media` rule:

```css
form {
  display: flex;
  flex-direction: column;
  width: 90%;
}

input {
  padding: 5px;
}

.bookshelfDiv {
  padding: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.formDiv {
  width: 60%;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.bookCardsDiv {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 90%;
  margin-top: 20px;
}

.bookCard {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid white;
  padding: 5px;
  width: 40%;
  margin: 15px 10px;
  background-color: rgb(155, 155, 155);
  color: black;
}
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
