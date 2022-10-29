const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();

    // js로 class설정
    loginForm.classList.add(HIDDEN_CLASSNAME);
 
    const userName = loginInput.value;
 
    // 벡틱(`) 방식으로 사용 시 + 없이 구문 추가
    // greeting.innerHTML = "Hello " + userName;
    greeting.innerHTML = `Hello! ${userName}`;

    greeting.classList.remove(HIDDEN_CLASSNAME);

}

loginForm.addEventListener("submit", onLoginSubmit);
