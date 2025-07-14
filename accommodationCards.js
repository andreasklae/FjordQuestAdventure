class Accommodation{
    constructor(hotelName, city, intro, cards, link, img){
        this.hotelName = hotelName
        this.city = city
        this.cards = new Map()
        this.img = img
        this.outro = generateOutro(hotelName, link)

        let introCard = [new Card(hotelName, intro, this.img)]
        this.intro = generateVerticalCards(introCard)
        this.cards.set("horizontal", generateHorizontalCards(cards))
        this.cards.set("vertical", generateVerticalCards(cards))
    }
}

let theifCards = [
    new Card(
        Header = "Location: Tjuvholmen",
        paragraph = `The city district which was once home to criminals and shady dealings is now a power centre for contemporary art and good city living at the water’s edge.`,
        img = "bilder/thief/Tjuvholmen-view.jpg"
    ),
    new Card(
        Header = "Surroundings",
        paragraph = "International-calibre restaurants, cosy eateries and high-quality galleries sit side by side in pedestrianised streets and squares. And the Astrup Fearnley Museum designed by Italian star architect Renzo Piano, is the hotel’s nearest neighbour.",
        img = "bilder/thief/Sea-view-THE-THIEF.png"
    ),
    new Card(
        Header = "The rooms",
        paragraph = "THE THIEF reflects its surroundings. From the balcony you can enjoy the view of the fjord. Inside curator Sune Nordgren has hand-picked contemporary art which inspires, surprises and creates aesthetic experiences. The rooms have designer furniture from national and international quality producers selected by interior designer Wille Våge. The building was designed by Mellbye Arkitekter.",
        img = "bilder/thief/Bed-breakfast-THE-THIEF.jpg"
    ),
    new Card(
        Header = "Spa",
        paragraph = "THIEF SPA has stolen the best ideas from spa cultures all over the world and brought them home. Just grab your robe and ride the elevator directly from your accommodations in complete discretion down to the spa entrance. Treat yourself to Turkish hamam bath or Moroccan clay treatment. Get your facial cleanse, essential manicure or a relieving back massage by top professional therapists.",
        img = "bilder/thief/Pool-woman-THIEF-spa-THETHIEF.png"
    )
]

let thief = new Accommodation(
    hotelName = "THE THIEF", 
    city = "Oslo",
    intro = "A little island, a whole ocean of experiences. With Oslo’s most spectacular location THE THIEF steals its guests away from everyday life.",
    cards = theifCards,
    link = "https://thethief.com/en/",
    img = "bilder/thief/Night-fascade-THE-THIEF.jpg"
)

let trond = new Accommodation(
    hotelName = "Hotelnavn", 
    city = "Trondheim",
    intro = "fyll inn senere",
    cards = theifCards,
    link = "https://thethief.com/en/",
    img = "bilder/destinations/trondheim.jpeg"
)

let ale = new Accommodation(
    hotelName = "Hotelnavn", 
    city = "Ålesund",
    intro = "fyll inn senere",
    cards = theifCards,
    link = "https://thethief.com/en/",
    img = "bilder/destinations/alesund.jpeg"
)

let geir = new Accommodation(
    hotelName = "Hotelnavn", 
    city = "Geiranger",
    intro = "fyll inn senere",
    cards = theifCards,
    link = "https://thethief.com/en/",
    img = "bilder/destinations/geiranger.jpg"
)


let accommodations = [thief, trond, ale, geir]

function getAccommodations(){
    let map = new Map()
    for (i = 0; i < accommodations.length; i++){
        map.set(accommodations[i].city, accommodations[i])
    }
    return map
}

function generateOutro(name, link){
    return `
        <h2 class = "glassBox">To read more about ${name} click <a href="${link}">here</a></h2>
    `
}