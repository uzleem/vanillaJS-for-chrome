const videos = [
    {
        title : "Fist Video", 
        rating : 5,
        comments : "2comments",
        createdAt : "Monster",
        views : 59,
        id : 1
    },
    {
        title : "Second Video", 
        rating : 5,
        comments : "2comments",
        createdAt : "Monster",
        views : 1,
        id : 2
    },
    {
        title : "Third Video", 
        rating : 5,
        comments : "2comments",
        createdAt : "Monster",
        views : 59,
        id : 3
    }
];


export const home = (req, res) => res.render("home", {pageTitle:"Home", videos});

/**
 *  watch 
 */
export const watch = (req, res) => {
    
    // -- ES6 ver : req.params value를 바로 받아올수있음.
    let { id } = req.params; 
    // console.log(id);

    let video = videos[id - 1];
    // console.log(video);

    return res.render("watch", {pageTitle:`${video.title}`, video})

}

/**
 * getEdit
 */
export const getEdit = (req, res) => {
    
    let { id } = req.params; 
    let video = videos[id - 1];
    return res.render("edit", {pageTitle:"EDIT", video});

}
 
/**
 * postEdit
 */
export const postEdit = (req, res) => {
    
    let { id } = req.params; 
    // let video = videos[id - 1];

    // form에서 받아온 값
    let newTitle = req.body;

    // 기존 값 변경
    videos[id - 1].title = newTitle;
    
    return res.redirect(`/video/${id}`)
}

/**
 * remove
 */
export const remove = (req, res) => res.send("Video Remove Page!");   


// res.send(`<!DOCUTYPE html><html lang='ko'><head><title>Youtube</title></head><body><h1>Video watch Page #${req.params.id}<h1></body>`)
