function createButtons(objArr){
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
    }
}

document.body.addEventListener('click', async (event) => {
    const clickedButton = event.target.closest('button');
    if (clickedButton) {
        chrome.webview.hostObjects.ahkFunc.SideItemClicked(clickedButton.value);
    }
});
