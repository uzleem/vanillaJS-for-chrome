/** global */
// join
export const join = (req, res) => {
    console.log("testData")
    res.send("User Join Page!")
};

// login
export const login = (req, res) => res.send("User Login Page!");


/** user */
// watch
export const watch = (req, res) => res.send("User watch Page");

// logout
export const logout = (req, res) => {
    console.log("testData");
    res.send("User Logout Page")
};

// edit
export const edit = (req, res) => res.send("User Edit Page!");

// remove
export const remove = (req, res) => res.send("User Remove Page!");
