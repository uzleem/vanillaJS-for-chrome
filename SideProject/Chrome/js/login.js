const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greting = document.querySelector("#greting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName"





/**
 * @abstract : submit 이후 처리 로직 
 * @commet : 
 *      1. submit시 새로고침 방지
 *      2. 유저 input값 저장
 *      3. 로그인 스토리지값 저장
 * @param : event 
 */
function onLoginSubmit(event) {
    event.preventDefault(); // submit default값으로 새로고침이 되는것을 방지
    const userName = loginInput.value; // 유저 입력 정보
    localStorage.setItem(USERNAME_KEY, userName); // 로그인 스토리지 저장

    loginForm.classList.add(HIDDEN_CLASSNAME); // js로 class설정 : 정상 로그인 시 form hidden처리
    loginAfter(userName);   
}





/**
 * @abstract : 정상 로그인 시 보여줄 내용에 대한 함수
 * @commet : 1. greting hidden 제거 
 *           2. greting 내용 출력
 * @param : userName 
 */
function loginAfter(userName) {
    greting.classList.remove(HIDDEN_CLASSNAME);
    greting.innerHTML = `Hello! ${userName}.`;  // 벡틱(`) 방식으로 사용 시 + 없이 구문 추가
}





/**
 * @abstract : 로그인 처리 로직 
 * @commet : 
        1. 세션스토리지의 로그인 정보를 활용
        2. 로그인 정보가 null인 경우, 로그인정보를 입력할수 있도록 hidden제거 
        3. 로그인 정보가 notNull인 경우, 로그인정보 hidden처리
 */
const loginInfo = localStorage.getItem(USERNAME_KEY); // 로그인 스토리지 정보

if(loginInfo === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);    
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    loginAfter(loginInfo);
};
