// input sign Up
var signUpName = document.querySelector("#signName")
var signUpEmail = document.querySelector("#signEmail")
var signUpPass = document.querySelector("#signPass")
var signUpBtn = document.querySelector("#signUpBtn")
var signIn = document.querySelector("#signIn")

// alert
var signUpAlertName = document.querySelector("#signUpAlertName")
var signUpAlertEmail = document.querySelector("#signUpAlertEmail")
var signUpAlertEmail2 = document.querySelector("#signUpAlertEmail2")
var signUpAlertPass = document.querySelector("#signUpAlertPass")
var signUpSuccess = document.querySelector("#signSuccess")
// global var
var singUpList = [];
if(localStorage.getItem("signUp")){
    singUpList = JSON.parse(localStorage.getItem("signUp"))
}
else {
    singUpList = [];
}


// signUp
signUpBtn.addEventListener("click",signUp)
signUpBtn.addEventListener("click",regEX_name)
signUpBtn.addEventListener("click",regEX_email)
signUpBtn.addEventListener("click",regEX_pass)
function signUp(){
if(regEX_name() && regEX_email() && regEX_pass()  && isNewEmail()){
        var list = {
            signName : signUpName.value ,
            signEmail : signUpEmail.value ,
            signPass : signUpPass.value
        }
        singUpList.push(list)
        localStorage.setItem("signUp" , JSON.stringify(singUpList))
        signUpSuccess.classList.remove("d-none")
        setTimeout(() => {
            window.location.href = "index.html"; // login.html اذهب ل صفحة تسجيل الدخول بعد 2 ثواني
            signUpSuccess.classList.add("d-none")
        }, 2000);

    }
}


// RegEx Name & Email & Password
signUpName.addEventListener("change",regEX_name)
function regEX_name(){
    var regEx_name =/^[a-zA-Z0-9]{3,20}$/

    if(regEx_name.test(signUpName.value) )
    {
        signUpAlertName.classList.add("d-none")
        signUpName.classList.add("is-valid")
        signUpName.classList.remove("is-invalid")
        return true;
    }else
    {
        signUpAlertName.classList.remove("d-none")
        signUpName.classList.add("is-invalid")
        signUpName.classList.remove("is-valid")
        return false;

    }
}

signUpEmail.addEventListener("change",regEX_email)
function regEX_email(){
    var regEx_email =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(regEx_email.test(signUpEmail.value) )
    {
        signUpAlertEmail.classList.add("d-none")
        signUpEmail.classList.add("is-valid")
        signUpEmail.classList.remove("is-invalid")
        return true;

    }else
    {
        signUpAlertEmail.classList.remove("d-none")
        signUpEmail.classList.add("is-invalid")
        signUpEmail.classList.remove("is-valid")
        return false;

    }
}

signUpPass.addEventListener("change",regEX_pass)
function regEX_pass(){
    // this is not ragex currect but code to easy
    var regEx_password =/[a-zA-Z0-9]{4,20}$/

    if( regEx_password.test(signUpPass.value))
    {
        signUpAlertPass.classList.add("d-none")
        signUpPass.classList.add("is-valid")
        signUpPass.classList.remove("is-invalid")
        return true;

    }else
    {
        signUpAlertPass.classList.remove("d-none")
        signUpPass.classList.add("is-invalid")
        signUpPass.classList.remove("is-valid")
        return false;

    }
}

// Exists or not Exists
signUpEmail.addEventListener("change",isNewEmail)
function isNewEmail() {
    for (let i = 0; i < singUpList.length; i++) {
        if (singUpList[i].signEmail === signUpEmail.value) {
            signUpAlertEmail2.classList.remove("d-none")
            signUpEmail.classList.remove("is-valid")
            signUpEmail.classList.add("is-invalid")
            return false;
        }else
        {
            signUpAlertEmail2.classList.add("d-none")
            signUpEmail.classList.remove("is-invalid")
            signUpEmail.classList.add("is-valid") 
        }
    }
        return true;
}
