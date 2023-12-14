document.addEventListener("click", (ev) =>{
    if(!localStorage.getItem("nClicks")){
        localStorage.setItem("nClicks", 0);
    }
    let currentClicks = localStorage.getItem("nClicks");
    localStorage.setItem("nClicks",++currentClicks);
});

