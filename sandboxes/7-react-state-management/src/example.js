// Element
const h1 = document.querySelector('h1');

// Event

h1.addEventListener('click', changeColor())

// Execution

function changeColor() {
  document.body.style.backgroundColor = 'lightgreen'
}
