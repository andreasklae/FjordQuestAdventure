function toggle(divId, arrowId){
    let div = document.getElementById(divId)
    let arrow = document.getElementById(arrowId)

    const opened = arrow.classList.contains("arrowOpened");

    if (!opened){
        arrow.classList.remove("arrowClosed");
        arrow.classList.add("arrowOpened");
        div.style.display = "flex"
    }
    else{
        arrow.classList.remove("arrowOpened");
        arrow.classList.add("arrowClosed");
        div.style.display = "none"
        
    }
}