const pic = document.getElementById("pic");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

const images = [
	"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
	"https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
	"https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg",
];

let currIndex = 1;

function updateImage() {
	pic.src = images[currIndex];
}

function handlePreviousBtn() {
	currIndex--;
	if (currIndex < 0) {
		currIndex = images.length - 1;
	}
	updateImage();
}

function handleNextBtn() {
	currIndex++;
	if (currIndex >= images.length) {
		currIndex = 0;
	}
	updateImage();
}

setInterval(() => {
	handleNextBtn();
}, 3000);

previousBtn.addEventListener("click", handlePreviousBtn);
nextBtn.addEventListener("click", handleNextBtn);
