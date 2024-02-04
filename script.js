function setTheme(){
    if(localStorage.getItem("theme") == null) localStorage.setItem("theme",0);
    loadTheme();
}

function changeTheme(){
    localStorage.setItem("theme",localStorage.getItem("theme")^1);
    loadTheme();
}

function setData(idd){
    let x = localStorage.getItem(idd);
    if(x == null) x = 0;
    document.getElementById("number").innerHTML = x;
    localStorage.setItem(idd, x);
    if(x > 0) document.getElementsByClassName('fa-heart')[0].style.color='red';

    let y = localStorage.getItem(idd+"com");
    if(y == null || y == "") localStorage.setItem(idd+"com","");
    else{
        let comojb = JSON.parse(y);
        for (var i in comojb) printComment(comojb[i],idd);
    }

    setTheme();
}

function counter(idd){
    document.getElementById("number").innerHTML = 1;
    localStorage.setItem(idd, 1);
    document.getElementsByClassName('fa-heart')[0].style.color='red';
}

function addComment(comment, idd){
    if(comment == "") return;

    let y = localStorage.getItem(idd+"com");
    comArray = [];
    if(y != null && y != ""){
        comobj = JSON.parse(y);
        for(var i in comobj) comArray.push(comobj[i]);
    }
    comArray.push(comment);

    let newstring = JSON.stringify(comArray);
    localStorage.setItem(idd+"com", newstring);

    printComment(comment,idd);
}

function printComment(comment, idd){
    if(comment == "") return;

    var v = document.createElement('div');
    var text = document.createTextNode(comment);
    v.appendChild(text);
    document.getElementById('comment1'+idd).appendChild(v);
}

function loadTheme(){
    let x = Number(localStorage.getItem("theme"));

    if(x == 1){

        document.getElementById("changetheme").classList.remove("fa-moon-o");
        document.getElementById("changetheme").classList.add("fa-sun-o");

        let cur = document.getElementsByClassName('body');
        for(i = 0; i < cur.length; i++) {
            cur[i].style.backgroundColor = 'black';
            cur[i].style.color = 'white';
        }

        cur = document.getElementsByClassName('container1');
        for(i = 0; i < cur.length; i++) cur[i].style.border = '3px solid white';
        
        cur = document.getElementsByClassName('fa-github');
        for(i = 0; i < cur.length; i++) cur[i].style.color = 'white';
        

        cur = document.getElementsByClassName('nav');
        for(i = 0; i < cur.length; i++) cur[i].style.backgroundColor = 'white';

        cur = document.getElementsByClassName('navlink');
        for(i = 0; i < cur.length; i++) cur[i].style.color = 'black';
    }
    else{
        document.getElementById("changetheme").classList.remove("fa-sun-o");
        document.getElementById("changetheme").classList.add("fa-moon-o");

        let cur = document.getElementsByClassName('body');
        for(i = 0; i < cur.length; i++) {
            cur[i].style.backgroundColor = 'white';
            cur[i].style.color = 'black';
        }

        cur = document.getElementsByClassName('container1');
        for(i = 0; i < cur.length; i++) cur[i].style.border = '3px solid black';

        cur = document.getElementsByClassName('fa-github');
        for(i = 0; i < cur.length; i++) cur[i].style.color = 'black';
        

        cur = document.getElementsByClassName('nav');
        for(i = 0; i < cur.length; i++) cur[i].style.backgroundColor = '#333';
        

        cur = document.getElementsByClassName('navlink');
        for(i = 0; i < cur.length; i++) cur[i].style.color = 'white';
    }
}