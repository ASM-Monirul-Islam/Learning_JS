function getRandomColor() {
	let val1 = Math.ceil(0+Math.random()*(255-0));
	let val2 = Math.ceil(0+Math.random()*(255-0));
	let val3 = Math.ceil(0+Math.random()*(255-0));
	return `rgb(${val1}, ${val2}, ${val3})`;
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(e=>{
	e.style.backgroundColor = getRandomColor();
	e.style.color = getRandomColor();
})