const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const toDos = [];
const TODOS_KEY = "todos"

function saveTodos() {
    /** Storage에 문자열 형식으로 값을 저장하기위해 JSON.stringify를 사용 
     *  1. : push(a), push(b), push(c)
     *  2. : '["a", "b", "c"]'
    */

    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));    
}

function deleteTodo(event) {
    /** 
     *  1. event는 target속성을 가짐
     *  2. parentElement를 통해 해당 버튼의 부모의 접근
     *  3. 해당항목 삭제 
     * */
    
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    /* html의 적용시킬 대상 생성 */
    const li = document.createElement("li");
    
    const span = document.createElement("span");
    span.innerText = newTodo;
    
    const buttonX = document.createElement("button");
    buttonX.innerText = "X";

    buttonX.addEventListener("click", deleteTodo);

    
    /** li안의 span 적용 */
    li.appendChild(span);
    li.appendChild(buttonX);    

    /** todo-list내부의 li값 적용 */
    todoList.appendChild(li);
   
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value = "";


    toDos.push(newTodo);
    paintTodo(newTodo);

    saveTodos();
} 

function sayHello(item) {
    console.log("hi", item);

}


/** JSON.stringify을 통해 담은 문자열을 실제 사용하기 위해 JSON.parse 사용
 *  1. '["a", "b", "c"]'
 *  2.  ['a','b', 'c']
*/
const saveTodo = localStorage.getItem(TODOS_KEY);




/**
 *  localStorage에 null이아닌경우 JSON.parse처리하여 toDosKey에 값 할당
 */
if(saveTodo !== null) {
    const parseTodo = JSON.parse(saveTodo);
    console.log(parseTodo);
    parseTodo.forEach(sayHello);
    // parseTodo.forEach(element => {console("hello", element)}); //간단한 foreach

    
}


/** todoForm submit 이벤트 처리*/
todoForm.addEventListener("submit", handleToDoSubmit);