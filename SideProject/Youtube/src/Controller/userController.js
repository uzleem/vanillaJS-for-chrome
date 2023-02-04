import userModel from "../model/user";

/** getJoin */
export const getJoin = async (req, res) => {
  console.log(`================= getJoin =================`);

  const test = await userModel.find({});
  console.log(`userModelTest : ${test}`);

  return res.render("join", { pageTitle: "join", test });
};

/** postJoin */
export const postJoin = async (req, res) => {
  console.log(`================= postJoin =================`);

  return res.redirect("/");
};

// login
export const login = (req, res) => res.send("User Login Page!");

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
