// 명대사 모음
const quotes = [
    {
        quote: "궁지에 몰렸을 때만 보이는 길도 있을거야.",
        anime: "늑대와 향신료",
    },
    {
        quote: "쓰레기는 구별하지 않으면 안돼.",
        anime: "진격의 거인",
    },
    {
        quote: "인생은 살아만 있으면 몇번이든 새출발할 수 있으니까.",
        anime: "GTO",
    },
    {
        quote: "여자의 거짓말을 용서할 줄 아는게 남자다.",
        anime: "원피스",
    },
    {
        quote: "마음먹은 날은 럭키데이, 그렇지 않은 날은 언럭키데이.",
        anime: "토리코",
    },
    {
        quote: "날개가 없기에 인간은 날아오를 방법을 찾는다.",
        anime: "하이큐",
    },
    {
        quote: "포기하면 그 순간이 바로 시합 종료에요.",
        anime: "슬램덩크",
    },
    {
        quote: "재능은 꽃피우는 것, 센스는 갈고닦는 것.",
        anime: "하이큐",
    },
    {
        quote: "자신을 믿지 않는 녀석따위는... 노력할 가치도 없다.",
        anime: "나루토",
    },
    {
        quote: "걸려 넘어진 걸 돌부리의 탓으로 돌리면 뭐가 바뀌냐.",
        anime: "은혼",
    },
    {
        quote: "씁쓸한 인생, 커피정돈 달아도 되겠지.",
        anime: "역시 내 청춘 러브코메디는 잘못됐다.",
    },
    {
        quote: "특수한게 뭐가 나빠. 영어로 하면 Special이잖아.",
        anime: "역시 내 청춘 러브코메디는 잘못됐다.",
    },
    {
        quote: "꿈은 도망가지 않아. 도망가는 건 언제나 나 자신이지.",
        anime: "짱구는 못말려.",
    },
]

// html 파일의 element 가져오기
const quote = document.querySelector("#quote span:first-child");
const anime = document.querySelector("#quote span:last-child");

// 가져온 element의 innerText에 명대사와 출처를 넣는 함수
function showQuote() {
    const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todayQuote.quote;
    anime.innerText = todayQuote.anime;
}

// 함수 실행
showQuote();