let boxes = document.querySelectorAll('.boxes');
let allLeftBoxes = boxes[0];
let allRightboxes = boxes[1];

function withoutDelegation(e, i) {
    e.style.transform = `rotateY(360deg)`;
    e.innerText = `${i + 1}`;
    setTimeout(function(){ 
        e.style.transform = `rotateY(360deg)`;
        e.innerText = ``;
    }, 5000);
};

[...boxes[0].children].forEach((element, index) => {
    element.addEventListener('click', function() {
        withoutDelegation(element, index)
    });
});                                                 


function withDelegation(event) {
    event.target.style.transform = `rotateY(360deg)`;
    event.target.innerText = event.target.dataset.number;
    setTimeout(function(){ 
        event.target.style.transform = `rotateY(360deg)`;
        event.target.innerText = ``;
    }, 5000);
}

boxes[1].addEventListener('click', withDelegation)