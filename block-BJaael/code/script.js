

let colors = [ 'aliceblue', 'antiquewhite', 'blue', 'burlywood', 'chocolate','deepskyblue', 'dimgray', 'hotpink', 'indianred', 'indigo','ivory', 'khaki', 'lavender', 'lightblue', 'lightgreen', 'navy', 'oldlace', 'orange', 'papayawhip', 'pink',
'tomato', 'turquoise', 'violet', 'yellow', 'yellowgreen'];

let boxes = document.querySelector('.boxes');

for(let i = 1; i<=500; i++){
    let box = document.createElement('div');
    box.classList.add("box");
    let randomNumber = Math.floor((Math.random() * 500) + 1); 
    box.innerText = randomNumber
    boxes.append(box);

}


function discoGrid (){
   let randomBox = document.querySelectorAll('.box');
     randomBox.forEach((element) => {
        let randomNumber = Math.floor(Math.random()*500 +1);
        let randomColor = colors[Math.floor(Math.random() * (colors.length - 1))];

        element.innerText = randomNumber;
        element.style.backgroundColor  = randomColor;
    })
}

 
 boxes.addEventListener('mousemove', discoGrid) 