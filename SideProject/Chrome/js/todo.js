const todoFrom = document.getElementById("todo-form");
const todoInput = todoFrom.querySelector("input");
const todoList = document.getElementById("todo-list");

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    /** li안의 span 적용 */
    li.appendChild(span);

    /** span값은 함수로 가져온 inputValue */
    span.innerText = newTodo;

    /** todo-list내부의 li값 적용 */
    todoList.appendChild(li);
    

    
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value = "";

    paintTodo(newTodo);

} 

todoFrom.addEventListener("submit", handleToDoSubmit);