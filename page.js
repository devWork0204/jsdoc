class Page{
    articleBound = true;
    exBound = false;

    constructor(pageData){

    }

    bindArticleData(data){
        var _news = document.querySelector('.main-content');
        this.bind(data, _news);
    }

    bindPracticeData(data){
        var _exes = document.querySelector('.practice');
        this.bind(data, _exes);
    }

    bind(data, _scope){
        var items = _scope.querySelectorAll("[data-bind]");
        for(let i = 0; i < items.length; i++){
            let item = items[i];
            let value = this.getDataValue(data, item.getAttribute("data-bind"));
            // set text
            switch(item.tagName){
                case "INPUT":
                case "TEXTAREA":
                    item.value = value;
                    break;
                default:
                    item.innerHTML = value;
                    break;
            }
            // set title
            if(item.hasAttribute("data-title")){
                let titlePath = item.getAttribute("data-title");
                if(!titlePath)
                    item.setAttribute("title", value);
            }
        }
    }

    getDataValue(data, path){
        if(!path) return "";

        let sp = path.split(".");
        var val = JSON.parse(JSON.stringify(data));
        sp.forEach(p => { 
            if(!val) return "";
            val = val[p]; 
        });

        return val;
    }

    keyDown(item){
        if(event.key == "Enter" && event.ctrlKey){
            let value = item.value;
            let name = item.getAttribute("code-name");
            let result = eval(value);
            let pad = document.querySelector(`.code[code-result='${name}']`);
            if(pad)
                pad.innerHTML = result;
        }
    }

    show(item){
        let goto = item.getAttribute("goto");
        // header
        let _others = item.parentNode.querySelectorAll('li');
        for(let i = 0; i < _others.length; i++){
            _others[i].classList.remove('active');
        }
        item.classList.add('active');

        // page
        var tabs = document.querySelectorAll('.content-tab');
        for(let i = 0; i < tabs.length; i++){
            let tab = tabs[i];
            if(tab.classList.contains(goto))
                tab.classList.remove('d-none');
            else
                tab.classList.add('d-none');
        }

        // nav
        if(goto == 'main-content')
            lc.drawNavigation(navConfig);
        else if(goto == 'practice')
            lc.drawNavigation(practiveConfig);

        // bind data
        if(goto == 'main-content'){
            if(!this.articleBound) 
                this.bindArticleData(pageData);
            this.articleBound = true;
        }
        else if(goto == 'practice'){
            if(!this.exBound)
                this.bindPracticeData(practice);
            this.exBound = true;
        }
    }
}

var _page = new Page();
_page.bindArticleData(pageData);

let example1 = '  String toturial 1: String là kiểu dữ liệu thông dụng trong Js   ';
const example2 = {
    firstName: 'Hieu',
    lastName: 'Bui'
};
let example3 = ["toturial", {fee: 100}, 5, 10, 15, 20, "khóa học js cấp tốc"];