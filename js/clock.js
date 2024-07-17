const clock = document.querySelector("#clock")

// 현재 시간을 clock의 innerText에 저장하는 함수
function getClock() {
    const date = new Date();

    // .padStart(length, str) <- 문자열이 length 길이가 될때까지 앞부분에 str을 채우는 함수
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `현재시간 ${hour}:${minute}:${second}`;
}

getClock();                     // 즉시 getClock 실행
setInterval(getClock, 1000);    // 1000ms 마다 getClock 실행