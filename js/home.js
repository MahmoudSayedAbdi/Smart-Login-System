var welcomName = document.querySelector("#welcomName")


window.addEventListener("DOMContentLoaded",function(){
    welcomName.innerHTML = localStorage.getItem("username")
})