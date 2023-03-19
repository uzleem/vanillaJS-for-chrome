const images = [
  // "img1.jpg",
  // "img2.jpg",
  // "img3.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length, 0)];

/** html에 적용시킬 Element 추가 : <img> */
const bgImage = document.createElement("img");

/** 이미지 경로 설정 */
bgImage.src = `img/${chosenImage}`;

/** document(html) image경로 적용 */
document.body.appendChild(bgImage);
