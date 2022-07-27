let settingsmenu = document.querySelector('.settings-menu')
let darkbtn = document.getElementById("dark-button")


function settingMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height")
    if(localStorage.getItem("theme") == "light")
    {
        localStorage.setItem("theme", "dark")
    }
    else{
        localStorage.setItem("theme","light")
    }
}


darkbtn.onclick = function(){
    darkbtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme")
}

if(localStorage.getItem("theme") == "light")
{
    document.body.classList.remove("dark-theme")
    darkbtn.classList.remove("dark-btn-on")
}
else if(localStorage.getItem("theme") == "dark")
{
    document.body.classList.add("dark-theme")
    darkbtn.classList.add("dark-btn-on")
}
else{
    localStorage.setItem("theme","light")
}

