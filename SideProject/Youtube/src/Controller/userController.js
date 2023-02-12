import userModel from "../model/user";
import bcrypt from "bcrypt";

/** getJoin */
export const getJoin = async (req, res) => {
  console.log(`================= getJoin =================`);

  return res.render("join", { pageTitle: "join" });
};

/** postJoin */
export const postJoin = async (req, res) => {
  console.log(`================= postJoin =================`);

  const { name, email, username, password, location, passwordCheck } = req.body;

  // 패스워드체크
  // console.log(`password : ${password}`);
  // console.log(`passwordCheck : ${passwordCheck}`);

  // const exists = await userModel.exists({ email });

  // $or 다중조건 입력
  const exists = await userModel.exists({
    $or: [{ email: req.body.email }, { username }],
  });

  /*  
    1. email, username 중복체크(db값과 동일한 값이 있는지) 
    2. status(400) : render시 400 상태코드에 해당하면 실행.
        - 400(잘못된 요청): 서버가 요청의 구문을 인식하지 못했다
  */
  if (exists) {
    return res.status(400).render("join", {
      pageTitle: "join",
      errMsg: "email/username duplication.",
    });
  }

  // password 중복 값 체크
  if (password !== passwordCheck) {
    return res.status(400).render("join", {
      pageTitle: "join",
      errMsg: "password not Same",
    });
  }

  try {
    await userModel.create({
      name,
      email,
      username,
      password,
      passwordCheck,
      location,
    });

    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle: "join",
      errMsg: error._message,
    });
  }
};

// getLogin
export const getLogin = (req, res) => {
  console.log(`================= getLogin =================`);
  res.render("login", { pageTitle: "login" });
};

// postLogin
export const postLogin = async (req, res) => {
  console.log(`================= postLogin =================`);
  const { username, password } = req.body;
  const pageTitle = "Login";

  /**
   * 1. DB, Input값 userName 확인
   * 2. DB, Input값 password 확인
   */
  const findUserName = await userModel.findOne({ username });
  console.log(`findUserName : ${findUserName}`);
  console.log(`findUserPW : ${findUserName.password}`);

  // Input username이 해당 DB에 없는 경우 에러처리
  if (!findUserName) {
    return res.render("login", {
      pageTitle,
      errMsg: "userName duplication",
    });
  }

  /*
    bcrypt compare 기능 : 
      - input 데이터 해쉬처리 이후, 
        DB정보의 동일한 해쉬데이터와 비교 후 TRUE,FALSE 리턴
  */
  const PwCompare = await bcrypt.compare(password, findUserName.password);
  console.log(`PwCompare : ${PwCompare}`);

  // Input password  해당 DB에 없는 경우 에러처리
  if (!PwCompare) {
    return res.render("login", {
      pageTitle,
      errMsg: "password duplication",
    });
  }

  // ?
  req.session.loggedIn = true;

  // user 정보 전달
  req.session.user = findUserName;

  console.log(`================= postLogin > Home =================`);

  return res.redirect("/");
};

/** user */
// watch
export const watch = (req, res) => res.send("User watch Page");

// logout
export const logout = (req, res) => {
  console.log("testData");
  res.send("User Logout Page");
};

// edit
export const edit = (req, res) => res.send("User Edit Page!");

// remove
export const remove = (req, res) => res.send("User Remove Page!");
