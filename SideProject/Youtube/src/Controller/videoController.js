export const home = (req, res) => res.render("home", {pageTitle2:"Home"});

export const search = (req, res) => res.send("User Search Page!");

export const upload = (req, res) => res.send("Video Upload Page!"); 

// res.send(`<!DOCUTYPE html><html lang='ko'><head><title>Youtube</title></head><body><h1>Video See Page #${req.params.id}<h1></body>`)
export const see = (req, res) => res.render("watch", {pageTitle2:"Watch"});

export const edit = (req, res) => res.render("edit", {pageTitle2:"Edit"});
export const remove = (req, res) => {
    console.log(req.params);
    res.send("Video Remove Page!"); 
}    

