let container = document.querySelector(".container");
let characters = ['crow', 'cat', 'dog', 'dragon', 'fish', 'hippo', 'frog', 'paw']

let count = 0;
let selectedElms = [];

function randomMix(characters = []) {
    let data = characters.concat(characters);
    data.sort(() => Math.random() - 0.5);

    return data;
}


function createBox(char) {
  let div = document.createElement("div");
  div.classList.add("box", "hidden");
  div.setAttribute('data-type', char)
  let i = document.createElement("i");
  i.classList.add("fas", `fa-${char}`)
  div.append(i);

  return div;
}

randomMix(characters).forEach((char) => 
container.append(createBox(char))
);


function handleClick(event) {
  let target = event.target;
  if (target.classList.contains("box") || target.classList.contains("fas")) {

    count += 1;

    if(target.classList.contains("box")) {
        target.classList.remove("hidden");
        target.classList.add("selected");
        selectedElms.push(target);

    } else {
        target.parentElement.classList.remove('hidden');
        target.parentElement.classList.add('selected');
        selectedElms.push(target.parentElement);
    }

    matchOrNot();
 }

}

function disableHidden(root) {
    root.querySelectorAll('.hidden').forEach(elm => elm.classList.add('disabled'))
}

function enableHidden(root) {
    root.querySelectorAll('.hidden').forEach(elm => elm.classList.remove('disabled'))
}

function matchSelected(elms) {
    let types = elms.map(elm => elm.dataset.type);
    if(types[0] == types[1]) {
        elms.forEach((elm) => elm.classList.add('success'));
        enableHidden(container)
    } else {
        elms.forEach((elm) => elm.classList.add('error'));
        setTimeout(() => {
            elms.forEach((elm) => elm.classList.add('hidden'));
            elms.forEach((elm) => elm.classList.remove('error', 'selected'))
        } , 1000)
    }
    enableHidden(container)
}

function matchOrNot() {
    if(count == 2) {
        disableHidden(container);
        matchSelected(selectedElms)
        count = 0;
        selectedElms = [];
    }
}

container.addEventListener("click", handleClick);