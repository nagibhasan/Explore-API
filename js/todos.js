function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => console.log(data))
}

function displayTodos(todos){
    //get the container
    const todocontainer = document.getElementById('todo-container');
    for(const todo of todos){
        // create the child element
        const todoDiv = document.createElement('Div');
        // set innerText or innerHTML
        todoDiv.innerHTML = `
            <h3>title: ${todo.title}</h3>
            <p>User: ${todo.userId}</p>
        `;
        // appendChild
        todocontainer.appendChild(todoDiv);

    }
}
loadTodos();

