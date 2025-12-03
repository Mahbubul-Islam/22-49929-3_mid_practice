const greetingMsg = document.getElementById("greetingMsg");
const toggleTheme = document.getElementById("toggleTheme");

const secAbout = document.getElementById("about");
const secProjects = document.getElementById("projects");
const secContact = document.getElementById("contact");

const nameTF = document.getElementById("nameTF");
const emailTF = document.getElementById("emailTF");
const messageTF = document.getElementById("messageTF");
const sendMsgBtn = document.getElementById("sendMsgBtn");

const nameERR = document.getElementById("nameERR");
const emailERR = document.getElementById("emailERR");
const messageERR = document.getElementById("messageERR");

const aboutLink = document.getElementById("aboutLink");
const projectsLink = document.getElementById("projectsLink");
const contactLink = document.getElementById("contactLink");

const projectDesing = document.querySelectorAll(".projectDesing");

let hrs = new Date().getHours();

if (hrs >= 0 && hrs < 12) {
	greetingMsg.innerHTML = "Good Morning";
} else if (hrs >= 12 && hrs < 18) {
	greetingMsg.innerHTML = "Good Afternoon";
} else {
	greetingMsg.innerHTML = "Good Evening";
}

aboutLink.addEventListener("click", () => {
	secAbout.style.display = "block";
	secProjects.style.display = "none";
	secContact.style.display = "none";
});
projectsLink.addEventListener("click", () => {
	secAbout.style.display = "none";
	secProjects.style.display = "flex";
	secContact.style.display = "none";
});
contactLink.addEventListener("click", () => {
	secAbout.style.display = "none";
	secProjects.style.display = "none";
	secContact.style.display = "flex";
});

let isDark = false;
document.body.style.backgroundColor = "white";
document.body.style.color = "black";
toggleTheme.innerHTML = "Dark Mode";
projectDesing.forEach((project) => {
	project.style.border = "2px solid black";
});
greetingMsg.style.color = "black";
greetingMsg.style.border = "2px solid black";
greetingMsg.style.backgroundColor = "white";

function toggleMode() {
	if (isDark == true) {
		isDark = false;
		document.body.style.backgroundColor = "white";
		document.body.style.color = "black";
		toggleTheme.innerHTML = "Dark Mode";
		projectDesing.forEach((project) => {
			project.style.border = "2px solid black";
		});
		greetingMsg.style.color = "black";
		greetingMsg.style.border = "2px solid black";
		greetingMsg.style.backgroundColor = "white";
	} else {
		isDark = true;
		document.body.style.backgroundColor = "black";
		document.body.style.color = "white";
		toggleTheme.innerHTML = "Light Mode";
		projectDesing.forEach((project) => {
			project.style.border = "2px solid white";
		});
		greetingMsg.style.color = "white";
		greetingMsg.style.border = "2px solid white";
		greetingMsg.style.backgroundColor = "black";
	}
}

toggleTheme.addEventListener("click", toggleMode);
sendMsgBtn.addEventListener("click", () => {
	// Clear previous error messages
	nameERR.innerHTML = "";
	emailERR.innerHTML = "";
	messageERR.innerHTML = "";

	let isERR = false;
	if (nameTF.value.trim() === "") {
		isERR = true;
		nameERR.innerHTML = "Name field can't be empty";
	}
	if (!emailTF.value.trim().includes("@") || emailTF.value.trim() === "") {
		isERR = true;
		emailERR.innerHTML = "Enter a valid email";
	}
	if (messageTF.value.trim().length < 10 || messageTF.value.trim() === "") {
		isERR = true;
		messageERR.innerHTML = "Message must be 10 characters";
	}
	if (!isERR) {
		nameTF.value = "";
		emailTF.value = "";
		messageTF.value = "";
		alert("Message sent successfully!");
	}
});
