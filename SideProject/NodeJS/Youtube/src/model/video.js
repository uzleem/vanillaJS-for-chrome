/** mongoose 데이터 스키마 */
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: [{ type: String, required: true, trim: true, maxLength: 20 }],
  titleTest: { type: String, default: "test" },
  description: { type: String, required: true, trim: true, minLength: 20 },
  createAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: [
    {
      views: { type: Number, required: true, default: 0 },
      rating: { type: Number, required: true, default: 0 },
    },
  ],
});

/** 업로드 이후 MiddleWare */
// schema.pre("save", async function () {
//   console.log(
//     `============================== MiddleWare : save ==============================`
//   );

//   console.log(this);

//     this.hashtags = this.hashtags[0]
//       .split(",")
//       .map((test) => (test.startsWith("#") ? test : `#${test}`));
// });

/** static */
schema.static("FormmatHashtags", function (hashtags) {
  console.log(
    `============================== FormmatHashtags ==============================`
  );
  //   console.log(hashtags);

  return hashtags
    .split(",")
    .map((test) => (test.startsWith("#") ? test : `#${test}`));
});

const videoModel = new mongoose.model("videoModel", schema);
export default videoModel;
