let form = document.querySelector("#MyForm");
form.addEventListener("submit", (e)=>{
	e.preventDefault();
	const name = document.querySelector("#name").value;
	const email = document.querySelector("#email").value;
	const birthdate = document.querySelector("#BirthDate").value;
	const image = document.querySelector("#image").files[0];
	console.log(name, email, birthdate, image);
	createCard(name, email, birthdate, image);
	form.reset();
});

function createCard(name, email, date, image) {
	let imageUrl = URL.createObjectURL(image);
	let html = `
      <div class="card-container">
        <div class="image">
          <img src="${imageUrl}" />
        </div>
        <div class="text">
          <h1>${name}</h1>
          <p>Email: ${email}</p>
          <p>Date of Birth: ${date}</p>
        </div>
      </div>
    `;
	let div = document.createElement("div");
	div.innerHTML = html;
	document.querySelector("#card-wrapper").appendChild(div);
}