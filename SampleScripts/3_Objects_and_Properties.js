/*

Objects are:
  - key-value-collections
  - have reflection: Enumerate through properties, hasOwnProperty() (inherited?), typeof

 */

var testObject = {};

var t = function() {
	if (testObject['property1'] === undefined) {
		console.log('No property there.');
	} else {
		console.log('Property is of type "' + typeof testObject.property1 + '".');

	if (typeof testObject.property1 === 'function')
		testObject.property1();
	}
};

t();


testObject.property1 = 'Hello';
t();

delete testObject.property1;
t();

testObject['property1'] = 5;
t();

testObject.property1 = function() { console.log('Invoked'); };
t();


// create new object from another one (clone structure)
if (typeof Object.create === 'undefined') {
	Object.create = function(source) {
		var Constructor = function() {};
		Constructor.prototype = source;
		return new Constructor();
	};
}

var anotherTestObject = Object.create(testObject);
/*
anotherTestObject.property2 = 'Test';
anotherTestObject.property3 = 1;
testObject.property4 = true;

(function() {
	console.log('\nListing all properties:');
	var property;
	for (property in anotherTestObject) {
		console.log('Property "' + property + '" is of type "' + typeof anotherTestObject[property] + '".');
		if (typeof anotherTestObject[property] === 'function')
			anotherTestObject[property]();
	}
}());

(function() {
	console.log('\nListing own properties only:');
	var property;
	for (property in anotherTestObject) {
		if (anotherTestObject.hasOwnProperty(property)) {
			console.log('Property "' + property + '" is of type "' + typeof anotherTestObject[property] + '".');
			if (typeof anotherTestObject[property] === 'function')
				anotherTestObject[property]();
		};
	}
}());

*/

phantom.exit();