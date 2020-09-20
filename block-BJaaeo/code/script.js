let inputBox  = document.querySelector('.input-box');
let outputBox  = document.querySelector('.output-box');
let buttons  = document.querySelector('.buttons');
let allButtons = document.querySelectorAll('.button');
let backspace = document.getElementById('backspace');
let screenValue = '';


function handleClick(event){
    let buttonText = event.target.innerText;
    // console.log(buttonText)
    if(buttonText == 'x'){
        buttonText = '*';
        screenValue += buttonText;
        outputBox.innerText = screenValue;
    }
    else if (buttonText == "&#247;"){
        buttonText = '/';
        screenValue += buttonText;
        outputBox.innerText = screenValue;
    }
    else if(buttonText == 'C'){
        screenValue = "";
        inputBox.innerText = screenValue;
        outputBox.innerText = screenValue
    }
    else if (buttonText == '='){
        result = eval(screenValue)
        outputBox.innerText = result;
    }
    else if (buttonText == 'CE'){
        if(screenValue){
            screenValue = screenValue.substr(0, screenValue.length - 1);
            inputBox.innerText = screenValue;
            outputBox.innerText = screenValue;
        }
    }
    else {
        screenValue += buttonText;
        inputBox.innerText = screenValue;
    }
}

for(item of allButtons){
    buttons.addEventListener('click', handleClick);
}
