let button = document.getElementById("btn");
let box = document.querySelector(".box");

let originalText = "Hello this is <b>Monirul Islam</b>";
let newText = "Hello This is <b>Sayem</b>";

let isOriginal = true;

button.addEventListener("click", ()=>{
	if(isOriginal) {
		box.innerHTML = newText;
	} else {
		box.innerHTML = originalText;
	}
	isOriginal = !isOriginal;
});

button.addEventListener("dblclick", ()=>{
	box.innerHTML = "WelCome to JavaScript!";
});

button.addEventListener("mousedown", ()=>{
	box.innerHTML = "WelCome to VS CODE";
});