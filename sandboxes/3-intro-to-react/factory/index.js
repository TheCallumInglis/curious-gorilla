const instructorOne = {
	name: "Raahima",
	countryOfResidence: "us",
	greet() {
		return `Hi my name is ${this.name} and I live in ${this.countryOfResidence}`;
	},
};

const instructorTwo = {
	name: "James",
	countryOfResidence: "uk",
};

const instructorThree = {
	name: "Pedro",
	countryOfResidence: "uk",
};

// Object creation using classes

class Instructor {
	constructor({ name, countryOfResidence }) {
		this.name = name;
		this.countryOfResidence = countryOfResidence;
	}

	greet() {
		return `Hi my name is ${this.name} and I live in ${this.countryOfResidence}`;
	}
}

console.log(instructorOne.greet());

const raahima = new Instructor({
	name: "Raahima",
	countryOfResidence: "🇺🇸",
});

console.log(raahima.greet());

// Object creation using function

const insructorFactory = ({ name, countryOfResidence }) => ({
	name,
	countryOfResidence,
	greet() {
		return `Hi my name is ${this.name} and I live in ${this.countryOfResidence}`;
	},
});

// const insructorFactory = ({ name, countryOfResidence }) => {
// 	return {
// 		name,
// 		countryOfResidence,
// 		greet() {
// 			return `Hi my name is ${this.name} and I live in ${this.countryOfResidence}`;
// 		},
// 	};
// };

const james = insructorFactory({ name: "James", countryOfResidence: "🇬🇧" });

console.log(james.greet());
