let container = document.querySelector('.container');
let allTabs = document.querySelector('ul')
let searchBox = document.querySelector('#search');

let allPeople = got.houses.map((element) => element.people).flat();
let filteredPeople = [...allPeople];
// console.log(allPeople)


 
function createUI(dataArray){
    container.innerHTML = "";
    dataArray.forEach(e => {
        let article = document.createElement('article');
        let div = document.createElement('div');
        let img = document.createElement('img');
        let name = document.createElement('h2');
        let p = document.createElement('p');
        let button = document.createElement('a');
    
        article.classList.add('box');
        div.classList.add('flex');
        img.classList.add('img');
        p.classList.add('description');
        button.classList.add('button');
    
        img.src = e.image;
        name.innerText = e.name;
        p.innerText = e.description;
        button.innerText = "Learn More!"
    
    
        div.append(img, name);
        article.append(div, p, button);
        container.append(article);
    
     });
}

// createUI(allPeople);

function handleFliter(event) {

     filteredPeople = [];
    
    let allHouses = document.querySelectorAll(".house");
    [...allHouses].forEach(e => e.classList.remove("active"));
    event.target.classList.add('active');

    if(event.target.innerText == "All") {
        filteredPeople = allPeople
        createUI(filteredPeople);
    }else {
        got.houses.forEach(e => {
            if(e.name == `${event.target.innerText}`) {
                e.people.forEach(elm => filteredPeople.push(elm));
            };
          });

        createUI(filteredPeople)
    }

}


function handlesearch(event) {
    let search = filteredPeople.filter(e => e.name.toLowerCase().includes(event.target.value.toLowerCase()));
   createUI(search);
}

createUI(allPeople);

allTabs.addEventListener('click', handleFliter);
search.addEventListener("input", handlesearch);
