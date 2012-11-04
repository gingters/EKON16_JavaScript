
console.log('Executing');

var say = function(arg) {
	document.write("<h2>" + arg + "</h2>");
	console.log(arg);
	alert(arg);
};

say('Hello world.');

/*



Function.prototype.method = function(name, func) {
	if (!this.prototype[name])
		this.prototype[name] = func;
	return this;
};


console.log('Executed');
document.write('1_Functions.js loaded.<br />');

console.log('written');

if (NaN != NaN)
  console.log('NaN is not NaN');

if (isNaN(NaN))
  console.log('NaN isNaN');

*/
