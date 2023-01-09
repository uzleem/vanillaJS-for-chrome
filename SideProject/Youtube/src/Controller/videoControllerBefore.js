// const videos = [
//     {
//         title : "First Video", 
//         rating : 5,
//         comments : "2comments",
//         createdAt : "Monster",
//         views : 59,
//         id : 1
//     },
//     {
//         title : "Second Video", 
//         rating : 5,
//         comments : "2comments",
//         createdAt : "Monster",
//         views : 1,
//         id : 2
//     },
//     {
//         title : "Third Video", 
//         rating : 5,
//         comments : "2comments",
//         createdAt : "Monster",
//         views : 59,
//         id : 3
//     }
// ];


// export const home = (req, res) => res.render("home", {pageTitle:"HomePug", videos});

// /**
//  *  watch 
//  */
// export const watch = (req, res) => {
    
//     // -- ES6 ver : req.params value를 바로 받아올수있음.
//     let { id } = req.params; 
//     // console.log(id);

//     let video = videos[id - 1];
//     // console.log(video);

//     return res.render("watch", {pageTitle:`${video.title}`, video})

// }

// /**
//  * getEdit
//  */
// export const getEdit = (req, res) => {
    
//     let { id } = req.params;
//     // console.log(req.params); 
//     // console.log("========getTest========");
    
//     let video = videos[id-1];
//     console.log(video);

//     return res.render("edit", {pageTitle:`Editing:${video.title}`, video});

// }
 
// /**
//  * postEdit
//  */
// export const postEdit = (req, res) => {
    
//     console.log("========set Test========");
//     let { id } = req.params; 
//     console.log(id);

//     // form에서 받아온 값
//     console.log("========newTitle Test========");
//     let newTitle = req.body.title;
//     console.log(newTitle);

//     // 기존 값 변경
//     console.log("========save Test========");
//     console.log(`AS-IS : ${videos[id - 1].title}`);
//     videos[id - 1].title = newTitle;

//     console.log(`TO-BE : ${videos[id - 1].title}`);
    
//     return res.redirect(`/video/${id}`)
// }

// /**
//  * get Upload
//  */
// export const getUpload = (req, res) => {
//     return res.render("upload", {pageTitle:"upload"});
// }

// /**
//  * post Upload
//  */
// export const postUpload = (req, res) => {
//     const { title } = req.body
//     const newVideo = 
//         {
//             title,
//             rating : 0,
//             comments : "0comments",
//             createdAt : "just now",
//             views : 0,
//             id : videos.length+1
//         }
    
//     videos.push(newVideo);
//     return res.redirect("/")
// }



// /**
//  * remove
//  */
// export const remove = (req, res) => res.send("Video Remove Page!");   



// // res.send(`<!DOCUTYPE html><html lang='ko'><head><title>Youtube</title></head><body><h1>Video watch Page #${req.params.id}<h1></body>`)
