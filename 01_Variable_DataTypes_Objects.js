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


// -----------------------------------------------