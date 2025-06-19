// for loop
for(let i=0; i<5; i++) {
	console.log(i,"x",5,"=",i*5);
}
/* Output:
0 x 5 = 0
1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20  */

// for in loop
let obj = {
	name: "Sayem",
	roll: 3982,
	batch: "65D"
}

for(const key in obj) {
	const elm = obj[key];
	console.log(elm);
}
/* Output:
Sayem
3982
65D  */

// for of loop
for (const ch of "Sayem") {
	console.log(ch);
}
/* Output:
S
a
y
e
m  */



// while loop
let i =0;
while(i<5){
	console.log("Iteration", i+1);
	i++;
}
/* Output:
Iteration 1
Iteration 2
Iteration 3
Iteration 4
Iteration 5  */



// do-while loop
let j=0;
do{
	console.log("Iteration", j+1);
	j++;
} while(j<5);
/*  Output:
Iteration 1
Iteration 2
Iteration 3
Iteration 4
Iteration 5  */