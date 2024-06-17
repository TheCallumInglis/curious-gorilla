document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");

	const button = document.createElement("button");

	button.textContent = "Click me";

	root.appendChild(button);

	button.addEventListener("click", () => {
		root.textContent = "Hola 👋";
	});
});
// EEE

// Elements
// Events
// Execution
