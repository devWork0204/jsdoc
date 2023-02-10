class LayoutMagager {
    constructor(){

    }
    
    drawNavigation(list) {
        var node = document.querySelector('.content .nav .nav-tree');
        var html = "";
        list.forEach(p => {
            html += `<li class="level${p.level}" onclick="lc.goto(this)" title="${p.name}">${p.name}</li>`;
        });
        node.innerHTML = html;
    }
    goto(item){
        let title = item.getAttribute("title");
        let parentNode = document.querySelector(".content-tab.main-content");
        var target = parentNode.querySelector(`h1[title="${title}"],.box-title[title="${title}"]`);
        if(target)
            target.scrollIntoView();
    }
}

let lc = new LayoutMagager();
lc.drawNavigation(navConfig);