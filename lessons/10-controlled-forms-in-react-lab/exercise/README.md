# ![Controlled Forms in React Lab - Exercise](./assets/hero.png)

## Introduction

In this lab, you'll explore practical applications of React's state management through controlled forms. You'll build a dynamic form that allows users to add entries to a virtual bookshelf, practicing the synchronization of UI and state in React to ensure seamless user interactions.

## What You'll Build

The local library is adding a feature to their website where users can add their favorite books to a virtual bookshelf. 

You will develop a single component named `BookShelf` that contains both the controlled form and the display of the bookshelf. Using the `useState` hook, you will manage the form inputs and list of books, enabling real-time updates to the UI based on user input.

![Solution UI](../assets/solution-ui.png)

By the end of this lab, you'll have a functional application where users can add books to a personalized bookshelf, with each new entry updating the display immediately—no page reloads required!

## Lab exercises

### 1. Create your component

Create a new component called `Bookshelf.jsx` and import `useState` at the top of the file:

```jsx
import { useState } from 'react';
```

Use the following template to set up your `BookShelf` component:

```jsx
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {/* Form will go here */}
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>
```

Export `Bookshelf` from this file and import it into `App.jsx`:

```jsx
// src/App.jsx
import './App.css';
import Bookshelf from './Bookshelf.jsx';

const App = () => {
  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </>
  );
};

export default App;
```

The remainder of the work in this lab will all take place inside of `Bookshelf.jsx`.

### 2. Define the initial state

- Initialize your state in `Bookshelf.jsx`:

  - Create a state variable `books` to store an array of book objects.
  - Define another state variable `newBook` to handle the inputs for new book additions. This will be an object with a `title` key and an `author` key, which should hold empty strings to start.

Example:

```jsx
const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);
```

### 3. Create event handlers

For this lab, you'll need two event handlers:

#### 1. `handleInputChange`

**Purpose:** This function updates the form's state as the user types into the input fields.

**Instructions:**
- Create a function named `handleInputChange` that will be triggered each time the user types in an input field.
- The function should take an event object as its argument. Use this event to access the `name` of the input field and the value the user has typed.
- Construct a new version of the `newBook` object that includes the updated fields. Make sure you maintain the values of other fields in `newBook` that aren't currently being updated. (Hint: Use the spread operator `...` to create a new copy of the `newBook` object)
- Use the  `setNewBook` setter function to update the state of `newBook` with this new object to reflect the changes in your UI.

#### 2. `handleSubmit`

**Purpose:** This function manages the submission of the form, adding a new book to the list and resetting the input fields.

**Instructions:**
- Create a function named `handleSubmit` that will execute when the form is submitted.
- The function should also take an event object as its argument. Begin the function by stopping the default form submission action using `event.preventDefault()`.
- Use the `setBooks` setter function to update the `books` array state with this new list to include the newly added book. You'll need to copy the current list of books and add the new book details from `newBook` to this list. (Hint: Use the spread operator `...`)
- Reset the `newBook` state to its initial empty values to clear the form fields, preparing them for the next entry.

### 4. Form creation

- Use JSX to create a form within your `BookShelf` component. The form should include sections for "Title" and "Author".
- Add input fields for both "Title" and "Author". These inputs will allow users to enter the details for the book they want to add to the shelf.
- Ensure each input field is connected to the corresponding property in the `newBook` state object. Use the `value` attribute for displaying the current state and the `onChange` attribute to update the state as the user types.
- Include a submit button in the form. Attach your `handleSubmit` event handler to the form's `onSubmit` attribute to handle the form submission.

### 5. Map through your books

- Within the `BookShelf` component, use the `map` function to iterate over the `books` array. This array contains the list of books added by the user.
- For each book in the array, create a "book card". Use a `<div>` to wrap the display of each book's title and author.
- Ensure each book card is distinct and clearly displays the title and author of the book.