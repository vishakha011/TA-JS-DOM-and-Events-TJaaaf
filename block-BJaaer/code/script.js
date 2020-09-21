let form = document.querySelector("form");
let formContainer = document.querySelector('.container');
let userInfoContainer = document.querySelector('.user-info-container');
let h1 = document.createElement('h1');
let email = document.createElement('p');
let interest = document.createElement('p');
let color = document.createElement('p');
let rating = document.createElement('p');
let book = document.createElement('p');
let agree = document.createElement('p');
agree.classList.add('agree');
let close = document.querySelector('.close');

let userInfo = {};


function getdata(event){
    event.preventDefault();

    // get the data
    h1.innerText = `Hello ${form.elements.name.value}`;
    email.innerText = `Email: ${form.elements.email.value}`;
    interest.innerText = `You Love: ${form.elements.interest.value}`;
    color.innerText = `Color: ${form.elements.color.value}`;
    rating.innerText = `Rating: ${form.elements.range.value}`;
    book.innerText = `Book Genre: ${form.elements.drone.value}`;
    let getTerms = form.elements.terms.checked;
    getTerms === true ? agree.innerText = `👍You agree to terms and conditions` : agree.innerText = `😟You don't agree to terms and conditions`;
   

    userInfoContainer.append(h1, email, interest, color, rating, book, agree);
   
    displaydata();

}

form.addEventListener('submit', getdata);

function displaydata() {
    form.style.display = 'none';
    userInfoContainer.style.display = 'block';
    close.addEventListener('click', function() {
        userInfoContainer.style.display = 'none';
    });
}

