//https://javascript.info/type-conversions

// STRING CONVERSION
let value = true;
console.log(typeof value);

value = String.prototype.trim.call(value);
console.log(typeof value);


// NUMERIC CONVERSION

let str = "123";
console.log(typeof str);

str = Number(str);
console.log(typeof str);

let age = Number("an arbitrary string instead of a number");

console.log(age);

// Number conversion rules
// undefined becomes Nan
// null becomes 0
// true or false becomes 1 or 0
