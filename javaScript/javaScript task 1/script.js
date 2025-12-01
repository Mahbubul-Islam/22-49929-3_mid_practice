const usernameTF = document.getElementById("usernameTF")
const emailTF = document.getElementById("emailTF")
const passwordTF = document.getElementById("passwordTF")
const confirmPasswordTF = document.getElementById("confirmPasswordTF")
const phoneTF = document.getElementById("phoneTF")

const usernameERR = document.getElementById("usernameERR")
const emailERR = document.getElementById("emailERR")
const passwordERR = document.getElementById("passwordERR")
const confirmPasswordERR = document.getElementById("confirmPasswordERR")
const phoneERR = document.getElementById("phoneERR")
const formERR = document.getElementById("formERR")

function validateForm(){
    let isERR = false;

    if(usernameTF.value.trim()===""){
        isERR = true;
        usernameERR.innerHTML = "User name can't be empty"
    }

    if( emailTF.value.trim()==="" || !emailTF.value.trim().includes("@")){
        isERR = true;
        emailERR.innerHTML = "Email must contain @"
    }

    if(passwordTF.value.trim()===""){
        isERR = true;
        passwordERR.innerHTML = "Password can't be empty"
    }
    if(confirmPasswordTF.value.trim()==="" || !(passwordTF.value.trim() === confirmPasswordTF.value.trim())){
        isERR = true;
        confirmPasswordERR.innerHTML = "Password and confirm password must be same"
    }
    if(phoneTF.value.trim()==="" || isNaN(phoneTF.value.trim()) || phoneTF.value.trim() < 0 ){
        isERR = true;
        phoneERR.innerHTML = "Phone number must be a valid number"
    }

    if(isERR){
        return false
    }
    else{

        // usernameERR.innerHTML = ""
        // emailERR.innerHTML = ""
        // passwordERR.innerHTML = ""
        // confirmPasswordERR.innerHTML = ""
        // phoneERR.innerHTML = ""
        formERR.innerHTML = "Form submitted successfully"

        return true;
    }


}