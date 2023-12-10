let text = document.querySelector("p");
let btn = document.querySelector("button");

let URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single";


btn.addEventListener("click", function () {
	fetch(URL).then(response => response.json()).then(data => {
		text.textContent = data.joke;
	});
});