export const home = (req, res) => res.send("Video Home Page !");
export const search = (req, res) => res.send("User Search Page!");

export const upload = (req, res) => res.send("Video Upload Page!"); 

export const see = (req, res) => {
    console.log(req.params);
    res.send("Video See Page!");
}

export const edit = (req, res) => {
    console.log(req.params);
    res.send("Video Edit Page!");
}
export const remove = (req, res) => {
    console.log(req.params);
    res.send("Video Remove Page!"); 
}    

