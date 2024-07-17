const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

// 페이지 새로고침 시 기존 투두리스트 가져오는 함수
function loadTodos() {
    const savedTodo = localStorage.getItem(TODOS_KEY);
    if(savedTodo !== null) {   
        todos = JSON.parse(savedTodo);
        // for(let i = 0; i < todos.length; i++) {
        //     addTodo(todos[i]);
        // }
        // 위의 for문과 같은 기능. 배열의 모든 element에 대해 중괄호 내용 실행
        todos.forEach(element => {
            addTodo(element);
        });
    }
}
// 페이지 새로고침 시 투두리스트 가져오기
loadTodos();

// 로컬 스토리지에 문자열이 아닌 배열 형태로 저장
function saveTodos(array) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(array));
}

function deleteTodo(event) {
    // 눌린 element의 부모 element 가져오기
    const li = event.target.parentElement;
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos(todos);
    li.remove();
}

function addTodo(newObj) {
    const li = document.createElement("li");
    li.id = newObj.id;
    
    const span = document.createElement("span");
    span.innerText = newObj.text;
    li.appendChild(span);

    const btn = document.createElement("button");
    btn.innerText = "x";
    btn.addEventListener("click", deleteTodo);
    li.appendChild(btn);

    todoList.appendChild(li);
}

// greeting.js 파일의 form 내용과 비슷하다.
function handleTodoSubmit(event) {
    event.preventDefault(); // 제출 후 페이지 새로고침을 방지

    // 새로운 투두를 아이디와 함께 newObj에 저장 후 초기화하기
    const newObj = {
        text: todoForm.querySelector("input").value,
        id: Date.now(),
    }
    todoForm.querySelector("input").value = ""; 

    todos.push(newObj);     // 투두리스트에 새로운 투두 추가
    addTodo(newObj);        // 브라우저에 새로운 투두 추가
    saveTodos(todos);       // 투두리스트 저장
}

// 폼 제출 핸들러 저장
todoForm.addEventListener("submit", handleTodoSubmit)