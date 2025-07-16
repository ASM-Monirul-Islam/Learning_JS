let age = 23;
if(age<18 && age>6) {
	console.log("You can not vote");
} else if(age==18) {
	console.log("Congrats you are now eligible for voting");
} else if(age>18 && age<100) {
	console.log("You can vote")
} else {
	console.log("Invalid age")
}


// Ternary Operator
let a = 10, b=20;
let c = a>b? (a-b):(b-a); //Ternary operator - Shortcut of if-else statement
console.log(c)