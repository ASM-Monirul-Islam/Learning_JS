let login = document.querySelector("#login");
let close = document.querySelector("#close-btn");
let popup = document.querySelector(".popup");

login.addEventListener("click", ()=>{
	popup.classList.remove("hidden");
})

close.addEventListener("click", ()=>{
	popup.classList.add("hidden");
})