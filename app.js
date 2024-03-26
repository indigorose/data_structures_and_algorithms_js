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

var Stack = function () {
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

// Sets

function mySet() {
	// the var collection will hold the set
	var collection = [];
	// this method will check for the presence of an element and return true or false
	this.has = function (element) {
		return collection.indexOf(element) !== -1;
	};
	// this method will return all the values in the set
	this.values = function () {
		return collection;
	};
	// this method will add an element to the set
	this.add = function (element) {
		if (!this.has(element)) {
			collection.push(element);
			return true;
		}
		return false;
	};
	this.remove = function (element) {
		if (this.has(element)) {
			index = collection.indexOf(element);
			collection.splice(index, 1);
			return true;
		}
		return false;
	};
	// this method will return the size of the collection
	this.size = function () {
		return collection.length;
	};
	// this method will return the union of the two sets
	this.union = function (otherSet) {
		let uni;
	};
}
