    // 로그인
    const loginInput = document.querySelector("#login-form input");
    const loginForm = document.querySelector("#login-form");
    // 로그아웃
    const home = document.querySelector("#greeting");
    const greeting = document.querySelector("#greeting h1");
    const logoutBtn = document.querySelector("#greeting button")

    const HIDDEN_CLASSNAME = "hidden";
    const USERNAME_KEY = "username";

    function showUserName(name) {
        greeting.innerText = `Hello ${name}`;
        home.classList.remove(HIDDEN_CLASSNAME);
        logoutBtn.addEventListener("click", onLogoutBtn);
    }

    function onLoginSubmit(event) {
        event.preventDefault(); // 기본동작을 실행하지 않도록 설정
        const name= loginInput.value
        if(name === "") {
            alert("Please write your name.");
        } 
        else {
            localStorage.setItem(USERNAME_KEY, name);
            loginForm.classList.add(HIDDEN_CLASSNAME);
            showUserName(name);
        }
    }

    function onLogoutBtn() {
        greeting.innerText = "";
        localStorage.removeItem(USERNAME_KEY);
        home.classList.add(HIDDEN_CLASSNAME);
        loginForm.classList.remove(HIDDEN_CLASSNAME);
    }

    const savedUsername = localStorage.getItem(USERNAME_KEY);

    if(savedUsername === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    }
    else {
        showUserName(savedUsername);
    }