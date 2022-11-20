const clock = document.getElementById('clock');

/**
 * @abstract : 시,분,초 시계 함수
 *      
 */
function getClock() {
    let date = new Date();
    
    /**
     * padStart() 
     *  - "1".padStart("2", 0) : 변수가 1자리인 경우 2자리까지 0으로 채워 넣는다.
     *  - padStart는 String타입으로 date타입을 변환후 적용
    */
    const hours = String(date.getHours()).padStart("2", 0);
    const minutes = String(date.getMinutes()).padStart("2", 0);
    const seconds = String(date.getSeconds()).padStart("2", 0);
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

/** 새로고침 이후에도 바로 실행되도록 함수선언 */
getClock();

/** 1초마다 함수 적용 */
setInterval(getClock, 1000);
