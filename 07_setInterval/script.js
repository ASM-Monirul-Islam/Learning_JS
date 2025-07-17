let box = document.querySelector(".box");
function getRandomColor() {
	let val1 = Math.ceil(0+Math.random()*(255-0));
	let val2 = Math.ceil(0+Math.random()*(255-0));
	let val3 = Math.ceil(0+Math.random()*(255-0));
	return `rgb(${val1}, ${val2}, ${val3})`;
}
setInterval(()=>{
	box.style.backgroundColor = getRandomColor();
}, 2000);