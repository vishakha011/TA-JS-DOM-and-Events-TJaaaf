function main() {
    let inputText = document.querySelector(".todos");
    let root = document.querySelector("ul");
    let footer = document.querySelector('footer')
    
    
    let allTodos = JSON.parse(localStorage.getItem('todos')) || [];
    
    //get the data 
    function handleKey(event){
        let value = event.target.value;
        if(event.keyCode === 13 && value !== "") {
            let todo = {
                name: value,
                isDone: false,
            };
            allTodos.push(todo);
            event.target.value = "";
        }
    
        localStorage.setItem('todos', JSON.stringify(allTodos));
        createUI(allTodos);
    }
    
    // handle delete button
    function handleDelete(event) {
        let id = event.target.dataset.id;
        allTodos.splice(id, 1);
        localStorage.setItem('todos', JSON.stringify(allTodos));
        createUI(allTodos);
    }
    
    // handle toggle button
    function handleToggle(event){
        let id = event.target.dataset.id;
        allTodos[id].isDone = !allTodos[id].isDone;
        localStorage.setItem('todos', JSON.stringify(allTodos));
        createUI(allTodos);
    
    }
    
    // filter data
    function handleFilter(event){
        if(event.target.innerText == "All") {
            createUI(allTodos)
        } else if(event.target.innerText == "Active") {
            let filterActive = allTodos.filter((element) => element.isDone == false);
            createUI(filterActive);
        }else if(event.target.innerText = "Completed")  {
            let filterActive = allTodos.filter(e => e.isDone == true);
            createUI(filterActive);
        }else if(event.target.innerText == "Clear Completed") {
            allCleared = allTodos.filter((element) => element.isDone == false);
            createUI(allCleared);
              
        }
        localStorage.setItem('todos', JSON.stringify(allTodos));
    }
    
    
    // create todo list
    function createUI(data) {
        root.innerText = "";
        data.forEach((todo, index) => {
            let li = document.createElement("li");
            li.classList.add("task", "flex-between");
    
            let subDiv = document.createElement('div');
            subDiv.classList.add('sub-div');
            let checkBox = document.createElement('input');
            checkBox.type = "checkbox";
            checkBox.classList.add("checkbox");
            checkBox.setAttribute('data-id', index);
            checkBox.checked = todo.isDone;
    
            let p = document.createElement('p');
            p.innerText = todo.name.charAt(0).toUpperCase() + todo.name.slice(1)
    
            let deleteTodo = document.createElement('i');
            deleteTodo.classList.add('fas', "fa-times")
            deleteTodo.setAttribute('data-id', index);
    
            subDiv.append(checkBox, p)
            li.append(subDiv, deleteTodo);
            root.append(li);
    
            deleteTodo.addEventListener('click', handleDelete)
            checkBox.addEventListener('input', handleToggle)
       
        });
    
        if (document.querySelector(".all-buttons")) {
            document.querySelector(".all-buttons").remove();
        } 
        createButtons();
    }
    
    function createButtons() {
        if(allTodos.length > 0) {
            let allButtons = document.createElement('div');
            allButtons.classList.add(".all-buttons", "flex-between")
            let buttonDiv = document.createElement('div');
            buttonDiv.classList.add('.filters');
    
            let active = document.createElement("button");
            active.innerText = "Active";
            let completed = document.createElement("button");
            completed.innerText = "Completed";
            let all = document.createElement("button");
            all.innerText = "All";
            let clearCompleted = document.createElement("button");
            clearCompleted.innerText = "Clear Completed";
    
            buttonDiv.append(active, completed, all);
            allButtons.append(buttonDiv, clearCompleted);
            footer.append(allButtons)
    
            allButtons.addEventListener('click', handleFilter);
        }
        
    }
    
    
    createUI(allTodos);
    
    localStorage.setItem('todos', JSON.stringify(allTodos));
    inputText.addEventListener('keyup', handleKey);
    
    }
    
    main();