const textTF = document.getElementById("textTF");
const analyzeBtn = document.getElementById("analyzeBtn");
const analyzeMsg = document.getElementById("analyzeMsg");
const textERR = document.getElementById("textERR");
// const resBox = document.getElementById("res")

analyzeBtn.addEventListener("click", handleAnalyze);

function handleAnalyze() {
	const textValue = textTF.value.trim();

	if (textValue === "") {
		textERR.innerHTML = "Textbox can't remain empty";
		analyzeMsg.innerHTML = "";
	} 
    else {


        const resBox = document.createElement("div")
        const msgBox = document.createElement("p")

		textERR.innerHTML = "";
		const totalChar = textValue.length;
		const WordArr = textValue.split(" ");

		msgBox.innerHTML = `Total numbers of character: ${totalChar}<br>`;
		msgBox.innerHTML += `Total numbers of word: ${WordArr.length}<br>`;
		msgBox.innerHTML += `Reverse text: ${WordArr.reverse().join(" ")}`;

        msgBox.style.color = "white"


        resBox.style.borderRadius = "5px"
        resBox.style.backgroundColor = "coral"
        resBox.style.border = "2px solid black"
        resBox.style.width = "50%"
        resBox.style.textAlign = "center"
        resBox.style.margin = "0 auto"
        resBox.style.padding = "10px"

        document.body.appendChild(resBox)
        resBox.appendChild(msgBox)
        textTF.value = ""

	}
}
