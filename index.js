let user = document.getElementById("user");
let logBtn = document.getElementById("logBtn");
let place = document.getElementById("place");
let member = document.getElementById("member");
let submit = document.getElementById("submit");
let bestPlaces = document.querySelectorAll(".places");

bestPlaces.forEach(function(curPlace){
    curPlace.addEventListener("click", function(){
        window.open("", "_blank")
    })
})



user.addEventListener("click", function(){
    document.querySelector(".loginPage").classList.toggle("active1");
})

logBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("Enter Details");
    }else{
        alert("Thanks : You Logged IN");
        document.querySelector(".loginPage").style.display="none";
    }

})

