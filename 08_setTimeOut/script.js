//It Changes time only one time after the given time

let box = document.querySelector(".box");
function getRandomColor() {
	let val1 = Math.ceil(0+Math.random()*(255-0));
	let val2 = Math.ceil(0+Math.random()*(255-0));
	let val3 = Math.ceil(0+Math.random()*(255-0));
	return `rgb(${val1}, ${val2}, ${val3})`;
}
box.style.backgroundColor = getRandomColor();
setTimeout(()=>{
	box.style.backgroundColor = getRandomColor();
}, 3000);