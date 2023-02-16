import videoModel from "../model/video";

export const home = async (req, res) => {
  console.log(`================= home =================`);
  console.log(req.session.user);

  // mongoose data 모두 조회
  const videos = await videoModel.find({});
  // console.log(`${videos}`);

  return res.render("home", { pageTitle: "HomePug", videos });
};

/**
 *  watch
 */
export const watch = async (req, res) => {
  console.log(`================= watch =================`);

  let { id } = req.params;

  // id에 해당하는 값 조회
  const videos = await videoModel.findById(id);
  // console.log({id}

  if (!videos) {
    return res.status(404).render("error404", { pageTitle: "Video Not Found" });
  }
  return res.render("watch", { pageTitle: `Edit ${videos.title}`, videos });
};

/**
 * getEdit
 */
export const getEdit = async (req, res) => {
  console.log(`================= getEdit =================`);

  let { id } = req.params;
  // console.log(req.params);

  const videos = await videoModel.findById(id);

  if (!videos) {
    return res.status(404).render("error404", { pageTitle: "Video Not Found" });
  }
  return res.render("edit", { pageTitle: `EDIT ${videos.title}`, videos });
};

/**
 * postEdit
 */
export const postEdit = async (req, res) => {
  console.log(`================= postEdit =================`);

  // reqID : id
  console.log("========req.params=======");
  let { id } = req.params;
  // console.log(id);

  // reqData
  const { title, description, hashtags } = req.body;

  // FindData
  const videos = await videoModel.exists({ _id: id });

  // error
  if (!videos) {
    return res.status(404).render("error404", { pageTitle: "Video Not Found" });
  }

  //updata
  await videoModel.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: videoModel.FormmatHashtags(hashtags),
  });

  return res.redirect(`/video/${id}`);
};

/**
 * get Upload
 */
export const getUpload = (req, res) => {
  console.log(`================= getUpload =================`);
  return res.render("upload", { pageTitle: "upload" });
};

/**
 * post Upload
 */
export const postUpload = async (req, res) => {
  console.log(`================= postUpload =================`);

  const { title, titleTest, description, hashtags, createAt, meta } = req.body;

  try {
    await videoModel.create({
      title,
      titleTest,
      description,
      hashtags: videoModel.FormmatHashtags(hashtags),
      createAt,
    });
    return res.redirect("/");
  } catch (error) {
    // console.log(error._message);
    return res.status(400).render("upload", {
      pageTitle: "upload",
      errMsg: error._message,
    });
  }
};

/**
 * remove
 */
export const remove = async (req, res) => {
  const { id } = req.params;

  await videoModel.findByIdAndDelete({ _id: id });

  res.redirect("/");
};

/**
 * search
 */
export const search = async (req, res) => {
  console.log(`================= search =================`);

  const { keyword } = req.query;
  console.log(keyword);

  let test = [];

  if (keyword) {
    test = await videoModel.find({
      title: {
        $regex: new RegExp(`${keyword}$`, "i"),
      },
    });
  }

  console.log(`test : ${test}`);

  res.render("search", { pageTitle: "search", test });
};
