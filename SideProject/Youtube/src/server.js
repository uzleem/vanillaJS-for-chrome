/**
 * 1. npm과 NodeJS가 패키지에서 express가 나올때까지 찾아보고 나오면
 * 2. express > index.js 수행
 * 3. express/lib/express 수행
 */
import express, { response } from "express";

const PORT = 4000

/**
 * express를 활용한 서버 생성
 * 1. express() 함수 사용
 * 2. listen() 함수 사용 : port번호, callback 
 */

/**
 * express 선언
 */
const app = express();


/**
 * 
 * express의 기능인 get을 통해 request, response 객체를 활용 가능함.
 */
const reqRes = (req, res) => {
    
    // request 강제종료 
    // return res.end(); 

    return res.send("i'm send");
}

const loginHere = (req, res) => {
    return res.send("login Here!");
}

app.get("/", reqRes);
app.get("/login", loginHere)


/**
 * 
 * @returns app.listen 이후 callback
 */
const handleListening = () => console.log(`Server => https://localhost:${PORT}😎`);


/**
 * express 활용 서버 생성
 */
app.listen(PORT, handleListening);


