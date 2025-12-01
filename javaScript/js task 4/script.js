const studentNameTF = document.getElementById("studentNameTF");
const studentRollTF = document.getElementById("studentRollTF");
const studentDepartmentTF = document.getElementById("studentDepartmentTF");
const addStudentBtn = document.getElementById("addStudentBtn");
const studentFrom = document.getElementById("studentFrom");
const tab = document.getElementById("tab");

function showValue(event) {
	event.preventDefault(); 

	const studentName = studentNameTF.value.trim();
	const studentRoll = studentRollTF.value.trim();
	const studentDepartment = studentDepartmentTF.value.trim();

	
	if (studentName === "" || studentRoll === "" || studentDepartment === "") {
		alert("Please fill in all fields");
		return;
	}

	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Delete";
	

	const row = document.createElement("tr");
	const nameCell = document.createElement("td");
	const rollCell = document.createElement("td");
	const deptCell = document.createElement("td");
	const actionCell = document.createElement("td");

    deleteBtn.addEventListener("click", rem)
    function rem() {
        row.remove()
    }

	nameCell.textContent = studentName;
	rollCell.textContent = studentRoll;
	deptCell.textContent = studentDepartment;
	actionCell.appendChild(deleteBtn);

	row.appendChild(nameCell);
	row.appendChild(rollCell);
	row.appendChild(deptCell);
	row.appendChild(actionCell);

	tab.appendChild(row);

	
	studentNameTF.value = "";
	studentRollTF.value = "";
	studentDepartmentTF.value = "";
}

addStudentBtn.addEventListener("click", showValue);
