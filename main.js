const menu = document.getElementById("menu");
const cancel = document.getElementById("close");


menu.addEventListener('click', function(){
    document.getElementById("menu").style.display= "none";
    document.getElementById("menu-items").style.display= "flex";
    document.getElementById("close").style.display= "flex";
    document.getElementById("navbar").style.width= "40%";
    document.getElementById("menu-items").style.width= "40%";
    document.getElementById("navbar").style.transition = "all .5s ease";
})

cancel.addEventListener('click', function(){
    document.getElementById("close").style.display= "none";
    document.getElementById("menu-items").style.display= "none";
    document.getElementById("menu").style.display= "flex";
    document.getElementById("navbar").style.width= "10%";
    document.getElementById("menu-items").style.width= "10%";
})