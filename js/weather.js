// https://home.openweathermap.org/ <- 날씨 api 제공 사이트에서 개인 api 키 저장
const WEATHER_KEY = "Your personal API key";

function onGeoOk(position) {
    // 현재위치의 위도 경도 저장
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    // 날씨 api에서 정보 가져와서 브라우저에 나타내기
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_KEY}`;
    fetch(url).then(response => response.json()).then(data => {
        const location = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        location.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
    console.log("날씨 api 에러 발생");
}

// 현재 위치 좌표를 성공적으로 가져오면 onGeoOk 함수 실행.
// 에러시 onGeoError 실행
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 