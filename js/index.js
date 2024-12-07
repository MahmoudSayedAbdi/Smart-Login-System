// input Login
var loginEmail = document.querySelector("#loginEmail")
var loginPass = document.querySelector("#loginPass")
var loginBtn = document.querySelector("#Login")
var welcomName = document.querySelector("#welcomName")
var loginSuccess = document.querySelector("#loginSuccess")
var loginList ;
if(localStorage.getItem("signUp")!= null){
    loginList = JSON.parse(localStorage.getItem("signUp"))
}else
{
    loginList =[];
}

loginBtn.addEventListener("click", login )
function login(){

    for(var i=0 ; i < loginList.length ; i++){
        if(loginList[i].signEmail == loginEmail.value && loginList[i].signPass == loginPass.value){
            localStorage.setItem("username", loginList[i].signName)
            loginSuccess.classList.remove("d-none")
            setTimeout(() => {
                window.location.href = "home.html"; // login.html اذهب ل صفحة تسجيل الدخول بعد 2 ثواني
                loginSuccess.classList.add("d-none")
            }, 2000);
        }
    }
}


