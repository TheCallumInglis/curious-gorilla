# ![React Router - Creating Links](./assets/hero.png)

**Learning objective:** By the end of this lesson, students will be able to create navigable links within their React application that update the browser's URL path.

## Understanding the `<Link>` component

React Router provides a `<Link>` component designed specifically for SPAs, that behaves much like the HTML `<a>` tag. The `<Link>` component allows users to change the path of the browser URL with a click, just like traditional web links.

Take a look at the example of a `<Link>` component below:

```jsx
<Link to='/'>Home</Link>
```

vs. 

```html
<a href="/">Home</a>
```

The `<Link>` component differs from a traditional `<a>` tag, in that it accepts a `to` prop instead of an `href`. The `to` prop is used to specify the navigation target. This prop can be a string representing the path or an object if additional information is required.

## Creating a navigation bar

Let's add some basic navigation to our application with a `nav` bar component.

Create a new component called `NavBar`:

```bash
touch src/components/NavBar.jsx
```

Add the following in `src/components/NavBar.jsx`:

```jsx
// src/components/NavBar.jsx

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Pokemon</li>
      </ul>
    </nav>
  );
};

export default NavBar;
```

In `src/App.jsx`, import the new component:

```jsx
// src/App.jsx
import NavBar from './components/NavBar';
```

Next, add the `<NavBar />` component to the return:

```jsx
// src/App.jsx
	return (
		<>
			<NavBar />
			<h1>Pokemon!</h1>
			<PokemonList pokemon={pokemon} />
		</>
	);
```

With this basic HTML structure in place, we should now be ready to integrate some navigable links.

## Implementing links

At the top of `NavBar.jsx`, we'll import `Link` from `react-router-dom`:

```jsx
// src/components/NavBar.jsx
import { Link } from 'react-router-dom';
```

Next, update the list items in the `nav` bar by wrapping their content with a `<Link>` component:

```jsx
// src/components/NavBar.jsx
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/pokemon'>Pokemon</Link>
        </li>
      </ul>
    </nav>
  );
```

This transforms the text content into clickable links, allowing our users to navigate to the URL path defined in each `<Link>`.

After adding the `<Link>` components, test out the navigation in your browser. Clicking on the links should **change the URL path in the browser**, but not the content displayed in your app yet.

Although we are able to navigate between different locations in our app, we have yet to define what should be rendered at each of these locations. For that, we'll need to make use of React Router's `<Routes>` component.