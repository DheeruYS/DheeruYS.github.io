var cur = 0;

function changeTheme(){
    if(cur == 0){
        document.getElementById("changetheme").innerHTML = "Light Mode"; 
        document.getElementById('bod').classList.remove("lightbody");
        document.getElementById('bod').classList.add("darkbody");
    }
    else{
        document.getElementById("changetheme").innerHTML = "Dark Mode"; 
        document.getElementById('bod').classList.remove("darkbody");
        document.getElementById('bod').classList.add("lightbody");
    }

    cur = cur^1;
}