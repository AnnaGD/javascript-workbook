// Write a JavaScript program to display the current day and time.
const currentDate = () => {
	const date = new Date();
	return date;
};

console.log(currentDate());

// Write a JavaScript program to convert a number to a string.
const numString = num1 => {
	return num1.toString();
};

// Write a JavaScript program to convert a string to the number.
const word = str1 => {
	return Number(str1);
};

console.log(word("5"));

// // Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String

const mainVariable = testThis => {
	if (testThis === null) {
		return null;
	} else if (isNaN(testThis)) {
		return NaN;
	}
	return typeof testThis;
};
console.log(mainVariable(true, true));

// Write a JavaScript program that adds 2 numbers together
const addTwoNumbers = (num1, num2) => {
	return num1 + num2;
};

addTwoNumbers(4, 5);

// Write a JavaScript program that runs only when 2 things are true.

const areTheseTrue = (x, y) => {
	if (x && y) {
		return "Both things are true.";
	}
};

areTheseTrue(true, true);

// Write a JavaScript program that runs when 1 of 2 things are true.
const isOneTrue = (x, y) => {
	if (x || y) {
		return "One of these is true.";
	}
};

isOneTrue(true, false);

// Write a JavaScript program that runs when both things are not true.
const bothNotTrue = (x, y) => {
	if (!x && !y) {
		return "Both of these are not true.";
	}
};

bothNotTrue(false, false);
