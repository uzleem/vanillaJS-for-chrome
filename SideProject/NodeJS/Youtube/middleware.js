/**
 *  server.js > app.use.session 이후 middleWare를 연결하여 정상작동.
 */
export const middleWare = (req, res, next) => {
  console.log(`================= middleWare =================`);

  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Youtube";
  console.log(res.locals);

  console.log(`================= session =================`);

  // session을 통한 유저정보 받아오기
  res.locals.user = req.session.user;
  console.log(req.session.user);
  //   console.log(req.session.user);

  next();
};
