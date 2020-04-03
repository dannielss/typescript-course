"use strict";
var myName = 'John';
console.log(myName);
var age = 27;
console.log(age);
var myAge;
myAge = 27;
console.log(typeof myAge);
myAge = 'idade é 27';
console.log(typeof myAge);
// arrays
var arrayNames = ['John', 'Daniel', 'Lori'];
console.table(arrayNames);
// tuplas
var address = ['Av principal', 99, 'Guarulhos'];
console.table(address);
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = 'BMW';
console.log(car);
car = { name: 'BMW', year: '2019' };
console.log(car);
