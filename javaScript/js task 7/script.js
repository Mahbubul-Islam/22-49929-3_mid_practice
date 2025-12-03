const changBgColorBtn = document.getElementById("changBgColorBtn");
const incFontSizeBtn = document.getElementById("incFontSizeBtn");
const centerTextBtn = document.getElementById("centerTextBtn");
const resetBtn = document.getElementById("resetBtn");
const sampleTxt = document.getElementById("sampleTxt");

changBgColorBtn.addEventListener("click", () => {
	sampleTxt.style.backgroundColor = "red";
});

let sampleTxtFontSize = 16;
incFontSizeBtn.addEventListener("click", () => {
	sampleTxtFontSize++;
	sampleTxt.style.fontSize = sampleTxtFontSize + "px";
});

centerTextBtn.addEventListener("click", () => {
	sampleTxt.style.textAlign = "center";
});

resetBtn.addEventListener("click", () => {
	sampleTxt.style.backgroundColor = "antiquewhite";
	sampleTxtFontSize = 16;
	sampleTxt.style.fontSize = "16px";
	sampleTxt.style.textAlign = "left";
});
