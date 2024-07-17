// img 폴더 내 사진 이름과 같게 설정
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
]

// 랜덤하게 사진이름 고르기
const selectedImage = images[Math.floor(Math.random() * images.length)];

// 자바스크립트에서 html element 생성하기
const bgImage = document.createElement("img");
bgImage.src = `img/${selectedImage}`;

// html 파일에 생성한 element 전달하기
document.body.appendChild(bgImage);
