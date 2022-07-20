// Get data
let data = document.querySelector("data");

const nameInput = document.getElementById("#name");
const email = document.getElementById("#email");
const message = document.getElementById("#message");
const success = document.getElementById("#success");
const errorNodes = document.getElementById("#.error");
// validate data
function validateForm(){

     clearmessage();
     let errorFlag = False;

    if(nameInput.Value.length < 1){
        errorNodes[0].innerHTML = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if(!emailIsValid(email.value)){
        errorNodes[0].innerHTML = "Invalid email address";
        email.classList.add("error-border");
    }
    if(message.value.length < 1){
        errorNodes[0].innerHTML = "Please enter message";
        message.classList.add("error-border");
        errorFlag = true;
    }
    if (!errorFlag){
        success.innerHTML = "Sucess!"
    }

}
// clear error/ success messages
function clearmessage(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerHTML = "";

    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");

}
// check if email is valid
function emailIsValid(email){
    let pattern = /\5+0\5*\.\5+/;
    return pattern.test(email);
}