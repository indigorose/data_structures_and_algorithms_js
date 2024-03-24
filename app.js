// Data Structures and Algorithms Notes

var letters = []; // Arrays or lists can be called stacks
var word = 'racecar';

var rword = '';

// In the first instance we are going to test words for palindromes

// First we put the word into a stack
for (let i = 0; i < word.length; i++) {
	letters.push(word[i]);
}

// Pop each letter in reverse order and add to the reverse word variable

for (let i = 0; i < word.length; i++) {
	rword += letters.pop();
}

// Now we check if word is equal to rword for the palindrome
if (rword == word) {
	//console.log(`${word} is a palindrome`);
} else {
	//console.log(`${word} is not a palindrome`);
}

// Next we are looking at creating stacks using OOP

let Stack = function () {
	this.count = 0;
	this.storage = {};

	// Adds a value onto the end of the stack
	this.push = function (value) {
		this.storage[this.count] = value;
		this.count++;
	};

	this.pop = function () {
		if (this.count === 0) {
			return undefined;
		}
		this.count--;
		let result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	};
	this.size = function () {
		return this.count;
	};

	// Returns the value at the end of the stack
	this.peek = function () {
		return this.storage[this.count - 1];
	};
};

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
