class Card {
    constructor(header, paragraph, img) {
        this.header = header;
        this.paragraph = paragraph;
        this.img = img;
    }
}

function generateHorizontalCards(cards){
    container = ""
    for (let i = 0; i < cards.length; i++) {
        let order = [1,2]
        let shadow = "shadowBottomLeft"
        if (i % 2 == 0) order = order.reverse()
        if (i % 2 == 0) shadow = "shadowBottomRight"
        
        

        container = container + `
        <div class="glassBox">
            <div class="cardHorizontal">
                <img style="order: ${order[1]};" src="${cards[i].img}" class="${shadow}"alt="photo of ${cards[i].header}">
                <div style="order: ${order[0]};" id="text">
                    <h1>${cards[i].header}</h1>
                    <h3> ${cards[i].paragraph}</h3>
            </div>
                <h3> ${cards[i].paragraph}</h3>
            </div>
        </div>
            
        `
    }
    return container
}

function generateVerticalCards(cards){
    container = ""
    for (let i = 0; i < cards.length; i++) {
        container = container + `
            <div class="cardVertical glassBox">
                <h1>${cards[i].header}</h1> 
                <img src="${cards[i].img}" class="shadowBottomCenter" alt="photo of ${cards[i].header}">
                <h3> ${cards[i].paragraph}</h3>
            </div>
        `
    }
    return container
}