

// Comparsion operator == vs. ===

console.log(    '' == '0'           );           // false
console.log(    0  == ''            );           // true (empty string converted to int: 0)
console.log(    0  == '0'           );           // true (string containing zero converted to int)
console.log(    0  == ' '           );           // true (whitespace converted to int: 0)
console.log(    '' == ' '           );           // false
console.log('');
console.log(    false == 'false'    );           // false
console.log(    false == '0'        );           // true
console.log(    false == 0          );           // true
console.log(    false == 7          );           // false
console.log(    true  == 7          );           // false
console.log(    true  == 1          );           // true
console.log('');
console.log('');
console.log(    false == undefined  );           // false
console.log(    false == null       );           // false
console.log(    null  == undefined  );           // true
console.log('');
console.log(    ' \t\r\n ' == 0     );           // true
console.log('');

phantom.exit();


// Additional info: http://stackoverflow.com/questions/359494