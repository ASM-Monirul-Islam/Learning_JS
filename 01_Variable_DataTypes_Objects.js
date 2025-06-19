//Data Types :
// 		1. Primitive
			// i. Null
			// ii. Number
			// iii. String
			// iv. Symbol
			// v. undefined
			// vi. Boolean
			// vii. Big int
// 		2. Non-Primitive
			// i. Object

let a = 5;
let b = 6;
let c = "Sayem"
console.log(a+b); //11

console.log(typeof a, typeof b, typeof c) //number number string

//------------------------------------------------
const a1 = 10; //The value is Constant
// a1 = a1+1; //Not Allowed
//------------------------------------------------

// -----------------------------------------------
// var is global scoped
// while the let is blocked scoped
var x = 5;
{
	var x = 15; //It changes the value of x to 15
	console.log(x) //15
}
console.log(x) //15
// -----------------------------------------------
let x1 = "sayem";
let x2 = 22;
let x3 = null;
let x4 = undefined;
let x5 = true;
let x6 = 3.1416;

console.log(x1, x2, x3, x4, x5, x6) //sayem 22 null undefined true 3.1416
console.log(typeof x1, typeof x2, typeof x3, typeof x4, typeof x5, typeof x6) //string number object undefined boolean number
// -----------------------------------------------

// ----------------------------------------------
// Object
let obj = {
	name: "Sayem",
	roll: 3982
}
console.log(typeof obj); //Object
console.log(obj); //{ name: 'Sayem', roll: 3982 }
console.log(obj.name, obj.roll); //Sayem 3982
obj.roll = 1046;
console.log(obj.roll); //1046