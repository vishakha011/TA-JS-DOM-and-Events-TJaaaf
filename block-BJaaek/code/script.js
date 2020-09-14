let button1 = document.querySelector('.first');
let button2 = document.querySelector('.second');

var colors = [ 'aliceblue', 'antiquewhite', 'blue', 'burlywood', 'chocolate','deepskyblue', 'dimgray', 'hotpink', 'indianred', 'indigo','ivory', 'khaki', 'lavender', 'lightblue', 'lightgreen', 'navy', 'oldlace', 'orange', 'papayawhip', 'pink',
'tomato', 'turquoise', 'violet', 'yellow', 'yellowgreen'];
    
 button1.addEventListener('click', function(){
    let randomColor = document.querySelector('.first');
    randomColor.style.backgroundColor = colors[Math.floor(Math.random() * (colors.length - 1))];
 });

 button2.addEventListener('mousemove', function(){
    let randomColor = document.querySelector('.second');
    randomColor.style.backgroundColor = colors[Math.floor(Math.random() * (colors.length - 1))];
 });