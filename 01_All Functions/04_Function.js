function greet(name){
	console.log("Hey "+name+" Nice to meet you!");
	console.log("Hey "+name+" Let's do something good!");
}

greet("Sayem");
/* Output:
Hey Sayem Nice to meet you!
Hey Sayem Let's do something good! */

function sum(a,b){
	return a+b;
}

console.log(sum(3,5)); //Output: 8


// Arrow function
const func1 = (x)=> {
	console.log("My age is", x, "years old");
}
func1(23); //Output: My age is 23 years old