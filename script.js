var cur = 0;

function changeTheme(){
    if(cur == 0){

        document.getElementById("changetheme").innerHTML = "Light Mode"; 

        let cur = document.getElementsByClassName('body');
        for(i = 0; i < cur.length; i++) {
            cur[i].style.backgroundColor = 'black';
            cur[i].style.color = 'white';
        }

        cur = document.getElementsByClassName('container1');
        for(i = 0; i < cur.length; i++) cur[i].style.border = '3px solid white';
        

        // cur = document.getElementsByClassName('container');
        // for(i = 0; i < cur.length; i++) cur[i].style.bordercolor = 'white ';
        

        cur = document.getElementsByClassName('fa-github');
        for(i = 0; i < cur.length; i++) cur[i].style.color = 'white';
        

        cur = document.getElementsByClassName('nav');
        for(i = 0; i < cur.length; i++) cur[i].style.backgroundColor = 'white';

        cur = document.getElementsByClassName('navlink');
        for(i = 0; i < cur.length; i++) cur[i].style.color = 'black';
    }
    else{
        document.getElementById("changetheme").innerHTML = "Dark Mode"; 

        let cur = document.getElementsByClassName('body');
        for(i = 0; i < cur.length; i++) {
            cur[i].style.backgroundColor = 'white';
            cur[i].style.color = 'black';
        }

        cur = document.getElementsByClassName('container1');
        for(i = 0; i < cur.length; i++) cur[i].style.border = '3px solid black';
        

        // cur = document.getElementsByClassName('container');
        // for(i = 0; i < cur.length; i++) cur[i].style.border.color = 'black ';
        

        cur = document.getElementsByClassName('fa-github');
        for(i = 0; i < cur.length; i++) cur[i].style.color = 'black';
        

        cur = document.getElementsByClassName('nav');
        for(i = 0; i < cur.length; i++) cur[i].style.backgroundColor = '#333';
        

        cur = document.getElementsByClassName('navlink');
        for(i = 0; i < cur.length; i++) cur[i].style.color = 'white';
    }

    cur = cur^1;
}