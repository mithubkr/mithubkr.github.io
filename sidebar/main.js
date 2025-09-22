function createButtons(objArr){
    //const body = document.body;
    let button, div, container, subject, description, link, update
    for (i = 0; i < objArr.length; i++){
        subject = objArr[i].subject;
        description = objArr[i].description;
        link = objArr[i].link;
        update = objArr[i].update;
        button = document.createElement('button');
        button.type = "button";
        button.value = link;
        div = document.createElement('div');
        div.className = "button__subject";
        div.textContent = subject;
        button.appendChild(div);

        div = document.createElement('div');
        div.className = "button__description";
        div.textContent = description;
        button.appendChild(div);

        container = document.createElement('div');
        container.className = "button__linkContainer"
        button.appendChild(container);

        div = document.createElement('div');
        div.className = "button__link";
        div.textContent = link.length > 35 ? link.slice(0, 35) + "..." : link;
        container.appendChild(div);

        div = document.createElement('div');
        div.className = "button__update";
        div.textContent = update;
        container.appendChild(div);

        document.body.appendChild(button);
        //button.addEventListener('click', buttonClicked);
    }

    async function buttonClicked(){
        chrome.webview.hostObjects.ahkFunc.SideItemClicked()
    }
}

testObjArr = [
    {
        subject: "소아청소년 성장상태 측정계산기",
        description: "질병관리청 2017년 소아청소년 성장도표 기반의 가나다라 동해물과 백두산이 마르고 닳는동안 계산하는 계산기",
        tags: ["소아", "청소년", "성장", "계산기", "도표", "그래프"],
        link: "https://knhanes.kdca.go.kr/knhanes/grtcht/clclt/measClclt.do",
        update: 250916,
        priority: 9
    },
    {
        subject: "철결핍 빈혈에서의 철분 요구량",
        description: "Ganzoni equation",
        tags: ["빈혈", "철결핍", "철분", "저장철", "계산기"],
        link: "https://mithubkr.github.io/calculator/IronDeficitCalculator.html",
        update: 250916,
        priority: 9
    }
];

createButtons(testObjArr);
