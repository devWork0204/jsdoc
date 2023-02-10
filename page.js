class Page{
    constructor(pageData){

    }

    bindData(data){
        var items = document.querySelectorAll("[data-bind]");
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
}

var _page = new Page();
_page.bindData(pageData);