let settingsMenu=document.querySelector(".setting-menu")
function settingMenuToggle(){
    settingsMenu.classList.toggle("setting-menu-height")

}
let btn=document.getElementById("dark-btn")
btn.onclick=function(){
    btn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme")
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark")
    }
    else{
        localStorage.setItem("theme","light")

    }
}
if(localStorage.getItem("theme") == "light"){
    btn.classList.remove("dark-btn-on")
    document.body.classList.remove("dark-theme")
}
else if(localStorage.getItem("theme") == "dark"){
    btn.classList.add("dark-btn-on")
    document.body.classList.add("dark-theme")

}
else{
    localStorage.setItem("theme","light")

}

