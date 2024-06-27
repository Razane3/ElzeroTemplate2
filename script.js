let up = document.getElementById("up");
up.style.cssText = 'cursor:pointer;display:none; background: rgb(25 200 250/50%); padding: 9px 12px; border: none; border-radius: 50%; bottom: 20px; position: fixed; right: 20px; z-index: 2;'
let icon = document.getElementById("icon");
icon.style.cssText= 'color: white';


if(window.onscroll){

}

window.onscroll = function(){
    if(window.scrollY >= 696){
      up.style.display = 'block';
    }
    else{
      up.style.display = 'none';
    }
}

up.onclick = function(){
    window.scrollTo({
        left: 0,
        top:0,
        behavior:"smooth"   
    })
}