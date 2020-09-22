let form = document.querySelector("form");

let userInfo = {};

function handleSubmit(event) {
  event.preventDefault();
  let username = form.elements.username.value;
  let name = form.elements.name.value;
  let email = form.elements.email.value;
  let phone = form.elements.phone.value
  let password = form.elements.password.value;
  let passwordCheck = form.elements['password-check'].value;
  
  // console.log(userInfo);


  // if(!username){
  //   alert("Username can't be empty");
  // }else if(username.length < 4){
  //   alert("Username can't be less than 4 characters");
  // }
  validateForm();

  
}

form.addEventListener("submit", handleSubmit);

function validateForm() {

  if(username === ""){
    handleError(username, "Username can't be blank");
  }else if(username.length < 4){
    handleError(username, "Username can't be less than 4 characters");
  }else {
    handleSuccess(username);
  }

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

