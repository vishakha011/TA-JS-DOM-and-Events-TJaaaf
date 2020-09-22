let form = document.querySelector("form");
let username = document.querySelector('#username');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let password = document.querySelector('#password');
let passwordCheck = document.querySelector('#password2');

let userInfo = {};

function handleSubmit(event) {
  event.preventDefault();
 
  
  // console.log(nameValue);


  // if(!username){
  //   alert("Username can't be empty");
  // }else if(username.length < 4){
  //   alert("Username can't be less than 4 characters");
  // }
  validateForm();
  
}

form.addEventListener("submit", handleSubmit);

function validateForm() {
  // console.log(nameValue);

  // Check username
  if(username.value === ""){
    handleError(username, "Username can not be blank");
  }else if((username.value).length < 4){
    handleError(username, "Username can not be less than 4 characters");
  }else {
    handleSuccess(username);
  }

  // check name
  if(name.value === "") {
    handleError(name, "Name can not be blank");
  }else if(!isNaN(name.value)) {
    handleError(name, "Can not use numbers as name");
  }else {
    handleSuccess(name);
  }
 
  // check email
  if((email.value).length <= 6) {
    handleError(email, "Email can not be less than 6 characters");
  }else {
    handleSuccess(email);
  }

 //check phone number
 if(isNaN(phone.value)) {
  handleError(phone, "Can not use alphabets");
 }
 else if((phone.value).length < 7) {
  handleError(phone, "Phone number can not be less than 7 digits");
}else {
  handleSuccess(phone);
} 

// check password
if(password.value === ""){
  handleError(password, "Password can not be blank");
}else if((password.value).length < 8) {
  handleError(password, "Password  can not be less than 7 digits");
}else {
  handleSuccess(password);
}

// confirm password
// if(passwordCheck.value === ""){
//   handleError(password2, "Password can not be blank");
// }
// }else if(password.value !== passwordCheck.value) {
//   handleError(confirm, "Password do not match");
// }
// else {
//   handleSuccess(password2);
// }

function handleError(input, message){
  let formControl = input.parentElement;
  let small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
  
}
}


function handleSuccess(input){
  let formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// alert("User Added Successfully!");