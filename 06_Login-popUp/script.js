// let login = document.querySelector("#login");
// let close = document.querySelector("#close-btn");
// let popup = document.querySelector(".popup");

// login.addEventListener("click", ()=>{
// 	popup.classList.remove("hidden");
// })

// close.addEventListener("click", ()=>{
// 	popup.classList.add("hidden");
// })

// let menu = document.querySelector("#menu");
// let menuSec = document.querySelector("#menu-section"); 
// let isMenu = false;
// menu.addEventListener("click", ()=>{
// 	if(isMenu) {
// 		menuSec.classList.add("hidden2");
// 	} else {
// 		menuSec.classList.remove("hidden2")
// 	}
// 	isMenu = !isMenu;
// })

// let login2 = document.querySelector("#login2");
// login2.addEventListener("click", ()=>{
// 	popup.classList.remove("hidden");
// })

async function getJoke() {
  const res = await fetch('https://official-joke-api.appspot.com/random_joke');
  const joke = await res.json();
  console.log(`${joke.setup} 😂 ${joke.punchline}`);
}

getJoke();
