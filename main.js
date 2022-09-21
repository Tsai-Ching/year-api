let enter_btn = document.querySelector(".btn");
let card = document.querySelector(".card");

enter_btn.addEventListener("click", getFact);

function getFact() {
	let input = document.querySelector(".input").value;
	let card_title = document.querySelector(".card-title");
	let card_text = document.querySelector(".card-text");

	if(input.length !== 0) {
		fetch(`http://numbersapi.com/${input}/year`)
		.then((response) => response.text())
		.then((data) => {
			card_title.innerHTML = input;
			card_text.innerHTML = data;
		});
	}

}