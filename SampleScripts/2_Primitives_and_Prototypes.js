/*
Everything in JavaScript is an object - EXCEPT FOR primitives!

Primitives are:
  - number
  - string
  - boolean
  - undefined
  - null

Let's see how we can extend primitives on their proptotypes:

*/

// prepare
var string1 = 'Hallo';
console.log('Value: ' + string1);
console.log('Type: ' + typeof string1);

var callReverse = function(value) {
	console.log('\nTrying to call "reverse" on ' + value);
	try {
	  console.log('Reverse: ' + value.reverse());
	}
	catch (ex)
	{
		console.log('Error: ' + ex);
	}
};

// This does not work:
callReverse(string1);


// There are no classes in JavaScript - only prototypes
// modify the prototype of String:
String.prototype.reverse = function() {
	var i;
	var result = '';
	for (i = this.length - 1; i >= 0; i--)
	  result = result + this[i];

	return result;
};

callReverse(string1);




Function.prototype.method = function(name, func) {
	if (!this.prototype[name])
		this.prototype[name] = func;
	return this;
};



phantom.exit();