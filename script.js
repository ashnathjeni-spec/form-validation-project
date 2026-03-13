// Name validation
function checkName(){

let name = document.getElementById("name").value;

if(name.length < 5){
document.getElementById("nameError").innerText = "Name must be at least 5 characters";
return false;
}else{
document.getElementById("nameError").innerText = "";
return true;
}

}

// Email validation
function checkEmail(){

let email = document.getElementById("email").value;

if(!email.includes("@")){
document.getElementById("emailError").innerText = "Enter correct email";
return false;
}else{
document.getElementById("emailError").innerText = "";
return true;
}

}

// Phone validation
function checkPhone(){

let phone = document.getElementById("phone").value;

if(phone.length != 10 || phone == "1234567890"){
document.getElementById("phoneError").innerText = "Enter valid phone number";
return false;
}else{
document.getElementById("phoneError").innerText = "";
return true;
}

}

// Password validation
function checkPassword(){

let password = document.getElementById("password").value;
let name = document.getElementById("name").value;

if(password.length < 8 || password == "password" || password == name){
document.getElementById("passwordError").innerText = "Password is not strong";
return false;
}else{
document.getElementById("passwordError").innerText = "";
return true;
}

}

// Confirm password
function checkConfirmPassword(){

let password = document.getElementById("password").value;
let confirm = document.getElementById("confirmPassword").value;

if(password !== confirm){
document.getElementById("confirmError").innerText = "Passwords do not match";
return false;
}else{
document.getElementById("confirmError").innerText = "";
return true;
}

}

// Form submit
function validateForm(){

if(
checkName() &&
checkEmail() &&
checkPhone() &&
checkPassword() &&
checkConfirmPassword()
){
alert("Form Submitted Successfully!");
return true;
}else{
alert("Please fix errors before submitting");
return false;
}

}