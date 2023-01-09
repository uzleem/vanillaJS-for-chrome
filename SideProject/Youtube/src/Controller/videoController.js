import videoModel from "../model/video";

export const home = async (req, res) =>  {
    const videos = await videoModel.find({});
    console.log(videos);
    return res.render("home", {pageTitle:"HomePug", videos});
};

/**
 *  watch 
 */
export const watch = (req, res) => {    
    let { id } = req.params; 
    return res.render("watch", {pageTitle})

}

/**
 * getEdit
 */
export const getEdit = (req, res) => {
    
    let { id } = req.params;
    // console.log(req.params); 
    // console.log("========getTest========");


    return res.render("edit", {pageTitle});

}
 
/**
 * postEdit
 */
export const postEdit = (req, res) => {
    
    console.log("========set Test========");
    let { id } = req.params; 
    console.log(id);

    // form에서 받아온 값
    console.log("========newTitle Test========");
    let newTitle = req.body.title;
    console.log(newTitle);

    // 기존 값 변경
    console.log("========save Test========");

    
    return res.redirect(`/video/${id}`)
}

/**
 * get Upload
 */
export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle:"upload"});
}

/**
 * post Upload
 */
export const postUpload  = async (req, res) => {
    
    const { title, description, hashtags, meta } = req.body
    
    // const video = new videoModel({
    try{
        await videoModel.create({    
            title,
            description,
            createAt : Date.now(),
            hashtags : hashtags.split(",").map(test=>`#${test}`),
            meta : {
                views : 0,
                rating : 0
            },
        })
    }catch{
        console.log("error");
    }

    // await video.save();
    return res.redirect("/")
}



/**
 * remove
 */
export const remove = (req, res) => res.send("Video Remove Page!");   



// res.send(`<!DOCUTYPE html><html lang='ko'><head><title>Youtube</title></head><body><h1>Video watch Page #${req.params.id}<h1></body>`)
