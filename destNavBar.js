class Destination{
    constructor(name){
        this.name = name
    }
}

let dests = [
    new Destination("Oslo"),
    new Destination("Trondheim"),
    new Destination("Ålesund"),
    new Destination("Geiranger"),
]

let accommodationMap = getAccommodations() // a map

let selected = dests[0]

function setDests(){

    let html = ""
    for(let i = 0; i < dests.length; i++){
        html += `
        <div
            id="${dests[i].name}" 
            onclick="selectDest('${i}')" 
            class="navItem"
        >
            <p>${dests[i].name}</p>
        </div>
        `
    }
    document.getElementById("destNavBar").innerHTML = html
}

setDests()
document.getElementById("accommodationContainer").style.display = "flex"
selectDest(0)
document.getElementById("accommodationContainer").style.display = "none"


function selectDest(index){
    selected = dests[index]
    setAccommodationContent()
    setSelectedBoxStyle()
}

function setAccommodationContent(){
    let accommodation = accommodationMap.get(selected.name)
    let key = onPhone() ? "vertical" : "horizontal";
    
    let accommodationContent = document.getElementById("accommodationContent");
    let newContent = accommodation.intro + accommodation.cards.get(key) + accommodation.outro;
    fadeContent(accommodationContent, newContent);
}

function fadeContent(element, newContent) {
    // Set the transition for opacity
    element.style.transition = "opacity 0.2s";
    
    // Start by fading out
    element.style.opacity = "0";
    

    // After the fade-out completes, change the content and fade back in
    setTimeout(() => {
        // Change the content
        element.innerHTML = newContent;
        // Fade back in
        element.style.opacity = "1";
    }, 500); // Wait 0.5 seconds for the fade-out to complete
}


function setSelectedBoxStyle(){
    let selectedHtml = document.getElementById(selected.name)
    const left = selectedHtml.getBoundingClientRect().left
    const right = selectedHtml.getBoundingClientRect().right;

    let selectedBox = document.getElementById("selected")
    selectedBox.style.width = selectedHtml.offsetWidth + "px"

    let start = document.getElementById(dests[0].name).getBoundingClientRect().left
    let end = document.getElementById(dests[dests.length - 1].name).getBoundingClientRect().right

    let rightBox = document.getElementById("navRightBound")
    rightBox.style.width = end - right + "px"

    let leftBox = document.getElementById("navLeftBound")
    leftBox.style.width = left - start + "px"

}

window.addEventListener("resize", setSelectedBoxStyle);
window.addEventListener("resize", setAccommodationContent);