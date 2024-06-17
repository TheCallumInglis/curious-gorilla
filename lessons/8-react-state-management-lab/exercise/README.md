# ![React State Management - Exercise](./assets/hero.png)

Welcome to the React State Management Lab! In this lab, we'll be interacting with state to get a better understanding of how to manage it in a React application. Your task is to assemble a team of characters to survive a zombie apocalypse. You will:

- Add characters to your team from a given list.
- Remove characters from your team.
- Display the team's total cost, strength, and agility.

Let’s dive in!

## Exercise

Follow these steps to complete the exercise. Initially, keep all code in a single file. Later, you can refactor it into separate components.

1. Create a new state variable named `team` and set the initial state to an empty array `[]`.
2. Create a new state variable named `money` and set the initial state to `100`.
3. Create a new state variable named `zombieFighters` and set the initial state to the following array of objects:

```js
[
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
];
```

1. Display the list of `zombieFighters` by mapping the array into the UI of `App.jsx`. _(We've provided some helpful CSS assuming you use a `ul` and `li`s)_

   - Each character should have an `image`, `name`, `price`, `strength`, and `agility`.
   - Each character's UI should also have an `Add` button to add them to your team.

2. Display the current value of `money` in the UI.

3. Create a function named `handleAddFighter`. This function will be triggered when you click the `Add` button for any character in the `zombieFighters` list.

   - When you click `Add` on a character, this function should add the selected character's object to the team state array. This is how you build your team.
   - Each character comes with a `price`. Upon adding a character to your team, subtract the character's `price` from your current money value. Think of it as spending money to recruit a team member.
   - Before adding a character to the team, check if you have enough money to afford them. If your money is less than the character's price, you shouldn't be able to add them. In such cases, log a message to the console such as `"Not enough money"`.

4. Now that you can add characters to your team, let's focus on displaying and managing them within your application's interface.

   - First, verify if your team array has any characters in it. If the `team` array length is 0, display `Pick some team members!` in the UI.
   - If there are characters in your team, display each one in the UI. For each character in the team array, show their: `name`, `image`, `price`, `strength`, and `agility`. Follow the same pattern you used to display the array of all characters.

5. Display Total Team `Strength`: In this step, you'll create a state to keep track of the total strength of your team and display it in the UI.

   - Initialize a new state variable named `totalStrength`. Set its initial value to `0`.
   - Whenever a character is `added` or `removed` from the team, recalculate the total strength. This calculation should sum up the strength values of all characters currently in the team. (A great case for a helper function!)
   - Show the value of `totalStrength` in the UI. If the team array is empty, `totalStrength` should be `0`.

6. Display Total Team `Agility`: Similarly, create a state for the total agility of your team and display this value in the UI.

   - Start by defining a state variable named `totalAgility`, initializing it at `0`.
   - Just like with strength, recalculate total agility whenever there's a change in the team. This should be the sum of the agility values of all the team members.
   - The value of `totalAgility` should be displayed in the UI. As with strength, if your team is empty, `totalAgility` will be `0`.

7. Add a `Remove` button to each of the characters on your team. This button, when clicked, should call a handler function to remove the character from your team.

8. Create a function named `handleRemoveFighter`. This handler function is key to managing your team. This function enables you to remove characters, adjusting the total `strength`, `agility`, and `budget` of your team accordingly.

   - This function will be executed when you click the `Remove` button for a character in your team.
   - This function should determine which character needs to be removed based on user interaction (usually, this is passed via an identifier like an ID or an index in the array).
   - Once the character to be removed is identified, the team state should be updated to exclude this character. This can be achieved by creating a new array that filters out the selected character.
   - Increase the money state by the price of the removed character, effectively refunding the cost to your budget.
   - Ensure that the UI reflects the removal of the character from your team. This includes updates to the total strength and agility displays, and the available budget.

## Hints

- You should never change state directly. If you need to make a copy of an array you can use the syntax `const copyArray = [...sourceArray]`.
- You can use the `reduce` method to get the total strength and agility of the team.
- You can use `https://jsonplaceholder.typicode.com/photos` to get images for the characters. These are just random photos and don't have anything to do with the characters.
