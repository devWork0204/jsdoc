function show(item, name){
    var tabs = document.querySelectorAll('.content-tab');
    for(let i = 0; i < tabs.length; i++){
        let tab = tabs[i];
        if(tab.classList.contains(name))
            tab.classList.remove('d-none');
        else
            tab.classList.add('d-none');
    }
}

function run(item){
    let name = item.getAttribute("code_name");
    let cmd = item.parentNode.getElementsByTagName('textarea')[0].value;
    eval(cmd);
}

function multiple(arr){
    let result = 1;
    for(let i =0; i < arr.length; i++){
        result *= arr[i];
    }
    return result;
}

// multi([2, 0]);