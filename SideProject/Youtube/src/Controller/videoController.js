import videoModel from "../model/video";

export const home = async (req, res) =>  {
    console.log(`============================== home ==============================`);
    
    // mongoose data 모두 조회
    const videos = await videoModel.find({});
    // console.log(`${videos}`);

    return res.render("home", {pageTitle:"HomePug", videos});
};

/**
 *  watch 
 */
export const watch = async (req, res) => { 
    console.log(`============================== watch ==============================`);
    
    let { id } = req.params; 
    
    // id에 해당하는 값 조회
    const videos = await videoModel.findById(id).exec();
    // console.log({id}
   
    if(!videos) {
        return res.render("error404", {pageTitle:"Video Not Found"}) 
    }
    return res.render("watch", {pageTitle:`Edit ${videos.title}`, videos})    
}

/**
 * getEdit
 */
export const getEdit = async (req, res) => {
    console.log(`============================== getEdit ==============================`)
    
    let { id } = req.params
    // console.log(req.params); 

    const videos = await videoModel.findById(id).exec()

    if(!videos) {
        return res.render("error404", {pageTitle:"Video Not Found"})
    }
    return res.render("edit", {pageTitle:`EDIT ${videos.title}`, videos})
}
 
/**
 * postEdit
 */
export const postEdit = async (req, res) => {
    console.log(`============================== postEdit ==============================`);
    
    // reqID : id
    console.log("========req.params=======");
    let { id } = req.params; 
    console.log(id);
    
    // reqData
    const {title, description, hashtags} = req.body

    // FindData
    const videos = await videoModel.findById(id).exec();

    // error
    if(!videos) {
        return res.render("error404", {pageTitle:"Video Not Found"}) 
    }
    //updata
    videos.title = title;
    videos.description = `${description}`;
    videos.hashtags = hashtags
        .split(",")
        .map((test) => test.startsWith('#') ? test : `#${test}`);
        
    await videos.save();
    return res.redirect(`/video/${id}`);
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
    console.log(`============================== postUpload ==============================`);
    
    const { title, titleTest, description, hashtags, createAt, meta } = req.body
    // console.log(`${{title, description, hashtags, createAt, meta}}`)

    try{
        await videoModel.create({    
            title,
            titleTest,
            description,
            hashtags : hashtags.split(",").map(test=>`#${test}`),
            createAt,
            // meta : meta={
            //     views,
            //     rating
            // }  
        })
        return res.redirect("/");
    }catch(error){
        // console.log(error._message);
        return res.render("upload", {pageTitle:"upload", errMsg:error._message});
    }
}



/**
 * remove
 */
export const remove = (req, res) => res.send("Video Remove Page!");   



// res.send(`<!DOCUTYPE html><html lang='ko'><head><title>Youtube</title></head><body><h1>Video watch Page #${req.params.id}<h1></body>`)
