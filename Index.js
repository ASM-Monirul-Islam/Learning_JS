// // // // // // // document.title = "Sayem"
// // // // // // // // document.body.style.backgroundColor = "Green";
// // // // // // // // document.body.childNodes[1].lastElementChild.style.backgroundColor = "green";
// // // // // // // // document.body.childNodes[1].parentElement.style.backgroundColor="red";
// // // // // // // let boxes = document.getElementsByClassName("child");
// // // // // // let a = [1,2,3,4];
// // // // // // a.forEach(x=> {
// // // // // // 	// document.write(x);
// // // // // // 	console.log(x);
// // // // // // })

// // // // // document.querySelectorAll("#hello").forEach(a=> {
// // // // // 	console.log(a);
// // // // // 	a.style.backgroundColor = "red";
// // // // // })

// // // // let x = document.getElementsByTagName("div");
// // // // // x.style.backgroundColor = "red";
// // // // console.log(x);
// // // // x.style.backgroundColor = "red";

// // // document.getElementsByClassName("child1").style.backgroundColor = "red";
// // let a = document.getElementsByClassName("child");
// // a[0].style.backgroundColor="red";
// // a[1].style.backgroundColor="green";
// // a[2].style.backgroundColor="pink";
// // a[3].style.backgroundColor="yellow";
// // a[4].style.backgroundColor="blue";
// // // document.querySelectorAll(".child").forEach(a=>{
// // // 	a.style.backgroundColor = "red";
// // // })

// // let div = document.createElement("div");
// // div.innerHTML = "Hello this is created by Monirul";
// // div.setAttribute("class", "created");
// // document.querySelector(".box").append(div);
// let x = document.querySelector(".box");
// x.insertAdjacentHTML("beforebegin", "Hello this is Monirul Islam");
function getRandomColor(){
	let val1 = 233;
	let val2 = 144;
	let val3 = 45;
	return `rgb(${val1}, ${val2}, ${val3})`;
}
let x = document.getElementsByClassName("child");
console.log(x);
Array.from(x).forEach(e=>{
	// console.log(e);
	e.style.backgroundColor = getRandomColor();
	e.style.color = getRandomColor();
})