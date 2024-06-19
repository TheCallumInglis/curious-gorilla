# ![React Router - Programmatic Navigation](./assets/hero.png)

**Learning objective:** By the end of this lesson, students will be able to implement the `useNavigate()` to redirect users after an action has been taken.

## Understanding programmatic navigation

In web applications, users are often redirected to a different page after completing certain actions, like a form submission. React Router provides this functionality through the `useNavigate()` hook. With `useNavigate()`, we can navigate users programmatically, without traditional links.

The `useNavigate()` hook returns a function that can be used for programmatic navigation:

```jsx
const navigate = useNavigate();
```

The `navigate` function is called upon with a string representing the path to direct the user towards:

```jsx
navigate('/some-path');
```

In our application, we'll demonstrate this by creating a form for adding new Pokémon. After submitting the form, users will be redirected to the `/pokemon` route, where they can view the list of Pokémon, including the newly added one.

## Adding the form component

First let's create the form.

Create a new component called `PokemonForm`:

```bash
touch src/components/PokemonForm.jsx
```

Add the following to `PokemonForm.jsx`:

```jsx
// src/components/PokemonForm.jsx

import { useState } from 'react';

const initialState = {
  name: '',
  weight: 0,
  height: 0,
};

const PokemonForm = (props) => {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO : complete submit logic
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default PokemonForm;
```

Note that we'll finish the `handleSubmit` function shortly. With our form in place, we should be ready to build some navigation for it.

## Adding navigation

Let's start by updating our `nav` bar with a link to the new component.

Add the following link to `src/components/NavBar.jsx`:

```jsx
// src/components/NavBar.jsx
//...
<li>
  <Link to="/pokemon/new">New Pokemon</Link>
</li>
```

Next, we'll define a new `<Route />` that matches the path as defined in our `<Link />`.

Add the following import to `src/App.jsx`:

```jsx
// src/App.jsx
import PokemonForm from './components/PokemonForm';
```

And add the following `<Route />` to `src/App.jsx`:

```jsx
// src/App.jsx
<Route path="/pokemon/new" element={<PokemonForm />} />
```

You should now be able to navigate to the new pokemon page and enter information in the form.

## Completing the form functionality

Now we can make our form component fully-functional. To do so, we'll need a new function in `src/App.jsx` that adds new pokemon data to `pokemon` array state.

Add the following function to `src/App.jsx`:

```jsx
// src/App.jsx
const addPokemon = (newPokemonData) => {
  newPokemonData._id = pokemon.length + 1;
  setPokemon([...pokemon, newPokemonData]);
};
```

Notice the `_id` property being added to `newPokemonData` before it is included in `pokemon` state. Here we are giving the new pokemon object a unique identifier based on the current length of `pokemon` state. This is practical because we aren't using a database at the moment, and we wouldn't expect our users to enter a unique id value when filling out the form.

Next, we'll need to pass the function down to our form component.

Update the `<Route />` with the following prop:

```jsx
// src/App.jsx
<Route path="/pokemon/new" element={<PokemonForm addPokemon={addPokemon} />} />
```

And finally, complete the `handleSubmit` function by adding our new function.

Update `PokemonForm.jsx` with the following:

```jsx
// src/components/PokemonForm.jsx

const handleSubmit = (e) => {
  e.preventDefault();
  props.addPokemon(formData);
  setFormData(initialState);
};
```

> 🏆 Notice how we are resetting form state after submission using `initialState`.

## Programmatic redirects

Time to handle the programmatic redirect. Remember, when a user submits a form, they should be redirected to pokemon list page (`'/pokemon'`). We'll be working within `PokemonForm.jsx` for this step, although this could also be accomplished within `App.jsx`.

Inside `PokemonForm.jsx`, import `useNavigate` from `react-router-dom`:

```jsx
// src/components/PokemonForm.jsx

import { useNavigate } from 'react-router-dom';
```

Next, create a new instance of `useNavigate` inside the component:

```jsx
// src/components/PokemonForm.jsx

const PokemonForm = (props) => {
  const navigate = useNavigate();
```

And finally, call the `navigate()` function within `handleSubmit` to redirect the user after state is updated:

```jsx
// src/components/PokemonForm.jsx
const handleSubmit = (e) => {
  e.preventDefault();
  props.addPokemon(formData);
  setFormData(initialState);
  navigate('/pokemon');
};
```

> 🚨 Be sure to pass in the path you wish to direct a user to.

Try it out in your browser.

You should now be directed to the pokemon list page after you submit the form. Our application is complete, great job!
