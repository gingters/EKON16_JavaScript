/*

  There are three (1-3) ways to create new objects and four (A - D) ways to invoke functions.

*/

// define a function:
var incAge = function() { this.age++; }; // 'this' seems to be the global object...

// A) function invocation
//console.log(age);   // this will fail - there is no 'age'
incAge();           // this will create 'age' on the global object
console.log(age);



// 1.) Create object with JSON (JavaScript Object Notation)
var somePerson = {
	age: 33,
	getOlder: incAge // now, what is 'this' in incAge?
}

// B) method invocation: 'this' is the object the method is called on: somePerson
somePerson.getOlder();
console.log('somePerson is ' + somePerson.age + ' years old');


// 2.) Constructor function + Prototype, create with 'new' WARNING: This is error-prone
var Person = function(initialAge) {
	this.age = initialAge; // 'this' is not the new object when not called as constructor!!
};

// add methods to all objects created with 'new Person'
Person.prototype.waitOneYear = incAge;
Person.prototype.get_age = function() { return this.age; };

// C) Constructor invocation pattern with new
var sebastian = new Person(32);
sebastian.waitOneYear();
console.log('sebastian is ' + sebastian.get_age() + ' years old');


// D) apply invocation pattern
sebastian.waitOneYear.apply(somePerson); // now 'this' in sebastian.waitOneYear is 'somePerson'
console.log('somePerson is ' + somePerson.age + ' years old');


// 3.)

/*
*/
phantom.exit();