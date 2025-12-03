const roleSel = document.getElementById("roleSel");
const rollTF = document.getElementById("rollTF");
const departmentTF = document.getElementById("departmentTF");
const rollLabel = document.getElementById("rollLabel");
const departmentLabel = document.getElementById("departmentLabel")

roleSel.addEventListener("change", () => {
	if (roleSel.value === "student") {
		rollTF.style.display = "block";
        rollLabel.style.display = "block";
        departmentLabel.style.display = "none";
		departmentTF.style.display = "none";
	} 
    else if (roleSel.value === "teacher") {
		rollTF.style.display = "none";
        rollLabel.style.display = "none";
		departmentTF.style.display = "block";
        departmentLabel.style.display = "block";

	} 
    else {
		rollTF.style.display = "block";
		departmentTF.style.display = "block";
        rollLabel = "block";
        departmentLabel = "block";
	}
});
