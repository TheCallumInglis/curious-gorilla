# ![Planning your Browser Game](./assets/planning-your-browser-game.png)


Project planning is an essential part of the development process. In this resource, you'll learn how to plan a browser game project using user stories and pseudocode.

## User Stories

A user story is a simple description of a feature told from the perspective of the person who desires the new capability; in our case, this will be a user of our game.

These are often the first things we write when planning a project. During our project, we will write user stories to include all project requirements and help us understand what features we need to build and why we are building them.

User stories are written in the format:

> As a [type of user], I want [an action] so that [a benefit/a reason].

The last part of the user story is optional. Still, it can be helpful to include why a user wants to perform a specific action. However, the reason from the user story can be omitted if the reason is apparent.

Let's look at an example of a user story for our Rock, Paper, Scissors game:

- As a user, I want to see a landing page when I arrive at the website to know I'm in the right place.
- As a user, I want to see clearly labeled buttons for "Rock", "Paper", and "Scissors", on the landing page, so I instantly know my options for gameplay.
- As a user, I want to be able to click on one of the "Rock", "Paper", or "Scissors" buttons, making it easy to select my game move.
- As a user, I want visual feedback after selecting, so I know my choice has been registered.
- As a user, I want to see the computer's choice displayed next to mine to compare the two.
- As a user, I want to be presented with a clear message indicating the winner of the game so that I can immediately understand the outcome.
- As a user, I want to play another round to try to improve my record.

### Writing User Stories

When writing user stories, it's essential to keep them simple and concise. We want to focus on the user's needs and avoid getting bogged down in the technical details of how we will implement the feature. 

It's best to think through the game as if you are the user going to play it. What do you want to see? What do you want to do? What do you want to happen? The user stories above are excellent examples of this.

## Pseudocode

Pseudocode is a way of writing out the steps of our game or program in plain English. It is a great way to plan out the logic of our game before we start writing any code.

Pseudocode is not a programming language, so we don't need to worry about syntax or getting the code to run. We just want to focus on the logic of our game. 

We can write our pseudocode in any way that makes sense to us. We can use bullet points or write it out in paragraph form. The important thing is that we can understand it.

Some valuable tips to get you started with pseudocode:

- Each line of your pseudocode should express just one action for the computer to perform. This will help us break down our game into small, manageable steps. Ex: 

```js
// computer chooses rock, paper, or scissors
```

- Capitalize keywords like `IF`, `ELSE`, `WHILE`, and `FOR` to make them stand out. Ex:

```js
// IF the user clicks on the rock button
```

- Use indentation to show the relationship between steps. Ex:

```js
// IF the user clicks on the rock button
  // THEN the computer chooses rock, paper, or scissors
```

There is no right or wrong way to write pseudocode. The goal of pseudocode is to help us plan out the logic of our game before we start writing any code. If what you are doing is helping you plan out your game, then you are doing it right!

## Browser Game Flow Pseudocode

Let's take a look at a typical flow for a browser game. Using this template as a guide, we can start to think about the steps we will need to take to build our game.

1. Define constants and variables.
2. Define the app's state variables, but don't assign values to them.
3. Select and save (cache) elements in variables that need to be accessed in the JavaScript code more than once.
4. Add event listeners - use delegated event listeners to listen to multiple elements with a single listener.
5. Invoke the init function used to initialize all state variables.
6. Invoke the primary render function that transfers all state variables to the DOM.
7. Wait for the user to click on a button.
   - Update all state variables with the correct values depending on the user's choice.
   - Invoke the primary render function.
8. Wait for the user to click the "Play Again" button.
   - Invoke the init function to reset all state variables to their initial values.

Let's apply this template to our Rock, Paper, Scissors game and complete some pseudocode for each step.

1. Define constants and variables.

```js
// Define a constant for rock, paper, and scissors
```

2. Define the app's state variables, but don't assign values to them.

```js
// Define a variable for the user's choice
// Define a variable for the computer's choice
// Define a variable for the game message
```

3. Select and save (cache) elements in variables that need to be accessed in the JavaScript code more than once.

```js
// Select the results display element
```

4. Add event listeners - use delegated event listeners to listen to multiple elements with a single listener.

```js
// Add an event listener to the rock button
// Add an event listener to the paper button
// Add an event listener to the scissors button
```

5. Invoke the init function used to initialize all state variables.

```js
// Using the event listeners set up, assign the user's choice to the variable for the user's choice
// Using a random number generator, assign the computer's choice to the variable for the computer's choice
// Invoke get player choice function from play function
// Invoke get computer choice function from play function
```

6. Invoke the primary render function that transfers all state variables to the DOM.

```js
// Render the game message to the DOM
```

7. Wait for the user to click on a button.

```js
// Compare the user's choice to the computer's choice
// IF the user's choice is the same as the computer's choice
    // THEN the game is a tie
// ELSE IF the user's choice is rock and the computer's choice is scissors
  // THEN the user wins
// ELSE IF the user's choice is paper and the computer's choice is rock
    // THEN the user wins
// ELSE IF the user's choice is scissors and the computer's choice is paper
    // THEN the user wins
// ELSE
    // THEN the computer wins

// Render the game message to the DOM
```

8. Wait for the user to click the "Play Again" button.

```js
// Select the play again button element and add an event listener. On click:
    // Reset the user's choice to nothing
    // Reset the computer's choice to nothing
    // Reset the game message to nothing
```

The above is a loose breakdown of the steps we must take to build our game. As we start to write our code, we will likely need to add more steps or change the order of the steps. That's okay! Pseudocode is meant to be flexible and help us plan out our game. It's not set in stone.