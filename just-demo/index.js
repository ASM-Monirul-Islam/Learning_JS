alert("Welcome to the calculator");

let n1 = prompt("Enter your first number: ");
let op = prompt("Enter the operator: ");
let n2 = prompt("Enter your second number: ");

alert(`${n1} ${op} ${n2} = ${eval(`${n1} ${op} ${n2}`)}`);