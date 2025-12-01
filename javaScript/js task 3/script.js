const toggleModeBtn = document.getElementById("toggleModeBtn");

let isDark = false;

function toggleMode() {
	if (isDark == true) {
		isDark = false;
		document.body.style.backgroundColor = "white";
		document.body.style.color = "black";
		toggleModeBtn.innerHTML = "Dark Mode";
	} 
    else {
		isDark = true;
		document.body.style.backgroundColor = "black";
		document.body.style.color = "white";
		toggleModeBtn.innerHTML = "Light Mode";
	}
}

toggleModeBtn.addEventListener("click", toggleMode);
