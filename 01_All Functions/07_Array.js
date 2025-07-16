let arr = [1,2,3,4,5];
console.log(arr); //[ 1, 2, 3, 4, 5 ]
console.log(arr.length); //5
console.log(arr[0]); //1
for(let i of arr) {
	console.log(i); 
}
/* Output:
1
2
3
4
5   */

// Array is mutable
arr[2]=9;
console.log(arr); //[ 1, 2, 9, 4, 5 ]
console.log(arr.toString()); //1,2,9,4,5
console.log(arr.join(" and ")); //1 and 2 and 9 and 4 and 5
console.log(arr.pop()); //5 (popped the last value)
console.log(arr); //[ 1, 2, 9, 4 ]
console.log(arr.shift()); //1 (popped the first value)
arr.push(5);
console.log(arr); //[ 2, 9, 4, 5 ]
arr.push("Hello"); //pushes at the end
console.log(arr); //[ 2, 9, 4, 5, 'Hello' ]
arr.unshift(1); //pushes at the start
console.log(arr); //[ 1, 2, 9, 4, 5, 'Hello' ]
console.log(arr.length); //6
delete arr[4]; 
console.log(arr); //[ 1, 2, 9, 4, <1 empty item>, 'Hello' ]
console.log(arr.length); //6

// Concatinating arrays
let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];
let a = a1.concat(a2,a3);
console.log(a)  

/*
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/

let b = Array.from("Hello");
console.log(b); //[ 'H', 'e', 'l', 'l', 'o' ]

let c = Array.of(1,2,3);
console.log(c); //[ 1, 2, 3 ]

console.log(c.indexOf(3)); //2

console.log(b.lastIndexOf('l')); //3

arr.forEach(x=> console.log(x)); //1 2 9 4 Hello

console.log(arr.sort()); //[ 1, 2, 4, 9, 'Hello', <1 empty item> ]

console.log(arr.reverse()); //[ <1 empty item>, 'Hello', 9, 4, 2, 1 ]

// splice function
// arr.splice(starting_index, number-of-ElementInternals, add-1, add-2, add-3, ......)

let num = [1,2,3,4,5,6,7];
num.splice(1, 2, 50, 50);
console.log(num); //[ 1, 50, 50, 4, 5, 6, 7]

console.log(num.slice(1, 3)); //[ 50, 50 ]

let x = [1, 99, 2, 9, 32, 3];
x.forEach((value,  index, x)=> {
	console.log(value, index, x);
})

/*
1 0 [ 1, 99, 2, 9, 32, 3 ]
99 1 [ 1, 99, 2, 9, 32, 3 ]
2 2 [ 1, 99, 2, 9, 32, 3 ]
9 3 [ 1, 99, 2, 9, 32, 3 ]
32 4 [ 1, 99, 2, 9, 32, 3 ]
3 5 [ 1, 99, 2, 9, 32, 3 ]
*/

for(const value of x){
	console.log(value);
}
/*
1
99
2
9
32
3
*/


let newArr = [];
for(let i=0; i<x.length; i++) {
	const element = x[i];
	newArr.push(element**2);
}
console.log(newArr); //[ 1, 9801, 4, 81, 1024, 9 ]







































console.log(typeof arr[4]); //string
console.log(typeof arr[0]); //number
arr = arr.toString(); 
console.log(typeof arr[0]); //string;
