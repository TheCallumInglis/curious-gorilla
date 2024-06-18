# ![React Router - Installing React Router DOM](./assets/hero.png)

**Learning objective:** By the end of this lesson, students will be able to install React Router and add it to their React application.

## Installation

To add React Router, the first step is installing the package.

Begin by installing the [`react-router-dom`](https://www.npmjs.com/package/react-router-dom) package using npm:

```bash
npm i react-router-dom
```

### Setting up React Router

With `react-router-dom` installed, the next step is to set it up in our project. 

We'll start by importing `BrowserRouter` in our entry file, typically `src/main.jsx`. `BrowserRouter` is a component in React Router that enables navigation. It allows your app to update the URL and display different pages without reloading the whole page. 

Add the following to `src/main.jsx`:

```jsx
// src/main.jsx
import { BrowserRouter } from 'react-router-dom';
```

Next, wrap the `<App />` component with `<BrowserRouter>`:

```jsx
// src/main.jsx
// Wrap App within <BrowserRouter> to enable routing:
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

> 💡 By wrapping `BrowserRouter` around the `App` component, it ensures that routing functionality is available within the `App` component tree.

Congratulations! You've successfully integrated React Router into your React application. With this setup, you're now ready to define routes and build a dynamic, navigable single-page application.