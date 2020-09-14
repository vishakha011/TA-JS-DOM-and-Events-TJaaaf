let boxes = document.querySelector('.boxes');
// let button2 = document.querySelector('.second');

var colors = [ 'aliceblue', 'antiquewhite', 'blue', 'burlywood', 'chocolate','deepskyblue', 'dimgray', 'hotpink', 'indianred', 'indigo','ivory', 'khaki', 'lavender', 'lightblue', 'lightgreen', 'navy', 'oldlace', 'orange', 'papayawhip', 'pink',
'tomato', 'turquoise', 'violet', 'yellow', 'yellowgreen'];

for(i=0;i<500;i++){ 
    let randomBox = document.createElement("div");
    randomBox.classList.add('box')
    let randomNumber = Math.floor((Math.random() * 100) + 1);     
    randomBox.append(randomNumber); 
    boxes.append(randomBox);  
    } 

boxes.addEventListener('mousemove', function(){
    let randomColor = document.querySelector('.box');
    randomColor.style.backgroundColor = colors[Math.floor(Math.random() * (colors.length - 1))];
    });

boxes.addEventListener('mousemove', function(){
    let randomNumbers = document.querySelector('.box');
    randomNumbers.innerText =  Math.floor((Math.random() * 100) + 1);
    });