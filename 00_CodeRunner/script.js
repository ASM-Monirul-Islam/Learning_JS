let btn = document.getElementById("btn");
let popup = document.getElementById("login-popup");
let closeBtn = document.getElementById("close-popup");

btn.addEventListener("click", () => {
	popup.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
	popup.classList.add("hidden");
});
