const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveToDos()
{
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteToDo(event)
{
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((item) => item.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(todo)
{
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.style = "background-color: rgba(255, 255, 255, 0.0); border: rgba(255, 255, 255, 0.0)";
    button.addEventListener("click", deleteToDo);

    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) 
{
    event.preventDefault(); 
    const newTodo = {id: Date.now(), text: toDoInput.value}; 
    toDoInput.value = "";

    todos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveTodos = localStorage.getItem(TODOS_KEY);

if (saveTodos !== null)
{  
    const parsedTodos = JSON.parse(saveTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}

if (localStorage.getItem(USERNAME_KEY) !== null)
{
    toDoForm.classList.remove("hidden");
}