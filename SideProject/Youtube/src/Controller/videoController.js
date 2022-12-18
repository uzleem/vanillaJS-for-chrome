const videos = [
    {
    title : "Fist Video", 
    rating : "5",
    comments : "2comments",
    createdAt : "Monster",
    views : "59"    
    },
    {
        title : "Second Video", 
        rating : "5",
        comments : "2comments",
        createdAt : "Monster",
        views : "59"    
    },
    {
        title : "Third Video", 
        rating : "5",
        comments : "2comments",
        createdAt : "Monster",
        views : "59"    
    }
];


export const home = (req, res) => res.render("home", { pageTitle2:"Home", videos});
export const search = (req, res) => res.send("User Search Page!");
export const upload = (req, res) => res.send("Video Upload Page!"); 
export const see = (req, res) => res.render("watch", {pageTitle2:"Watch"});
export const edit = (req, res) => res.render("edit", {pageTitle2:"Edit"});
export const remove = (req, res) => {
    console.log(req.params);
    res.send("Video Remove Page!"); 
}    


// res.send(`<!DOCUTYPE html><html lang='ko'><head><title>Youtube</title></head><body><h1>Video See Page #${req.params.id}<h1></body>`)
