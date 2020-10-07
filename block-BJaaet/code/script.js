let inputText = document.querySelector('.movie-names');
let movieNamesContainer = document.querySelector('.movie-container');

let allMovies = [];

function handleKey(event){
    if(event.keyCode === 13 &&  event.target.value!== ""){
        console.log(event.target.value)
         allMovies.push(inputText.value);
        inputText.value = ""
    }
    displayMovie()
}

function handleDelete(event){
    let deleteMovieIndex = event.target.dataset.index
    allMovies.splice(deleteMovieIndex, 1)
    displayMovie()
}

function displayMovie(){
    movieNamesContainer.innerText = "";
    allMovies.forEach((element, i) => {
        
        let mainDiv = document.createElement('div');
        mainDiv.classList.add("movie-list", "flex-between")
        let subDiv = document.createElement('div');
        subDiv.classList.add("sub-div")

        let icon = document.createElement('i');
        icon.classList.add("fas", "fa-video");

        let p = document.createElement('p');
        p.innerText = element.charAt(0).toUpperCase() + element.slice(1)

        let deleteMovie = document.createElement('i');
        deleteMovie.classList.add("fas", "fa-times");
        deleteMovie.setAttribute('data-index', i)

        subDiv.append(icon, p)
        mainDiv.append(subDiv, deleteMovie)
        movieNamesContainer.append(mainDiv);

        deleteMovie.addEventListener('click', handleDelete)
    })
}

inputText.addEventListener('keyup', handleKey);

