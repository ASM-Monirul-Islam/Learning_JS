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








































console.log(typeof arr[4]); //string
console.log(typeof arr[0]); //number
arr = arr.toString(); 
console.log(typeof arr[0]); //string;
