let destinations = [
    new Card(
        Header = "Oslo",
        paragraph = "Oslo is a dynamic city where sleek modernity meets stunning nature. With fjord views, cutting-edge architecture, vibrant arts, and endless outdoor adventures, it’s a city that captivates at every turn!",
        img = "bilder/thief/Tjuvholmen-view.jpg"
    ),
    new Card(
        Header = "Geiranger",
        paragraph = "Geiranger is a breathtaking gem, nestled between towering mountains and deep fjords. Known for its stunning waterfalls and dramatic landscapes, this village offers unforgettable views and outdoor adventures in the heart of Norway’s natural beauty!",
        img = "bilder/destinations/geiranger.jpg"
    ),
    new Card(
        Header = "Ålesund",
        paragraph = "Ålesund is a picturesque coastal city known for its stunning Art Nouveau architecture and panoramic views. Surrounded by mountains and fjords, it’s the perfect spot for nature lovers and architecture enthusiasts alike!",
        img = "bilder/destinations/alesund.jpeg"
    ),
    new Card(
        Header = "Trondheim",
        paragraph = "Trondheim is a charming city steeped in history, with colorful wooden houses, the majestic Nidaros Cathedral, and a lively waterfront. Blending old-world charm with a vibrant cultural scene, it’s a true Nordic treasure!",
        img = "bilder/destinations/trondheim.jpeg"
    )
]

verticalCards = generateVerticalCards(destinations)
horizontalCards = generateHorizontalCards(destinations)

function setCards(){
    if (onPhone()){ 
        document.getElementById("destinationContainer").innerHTML = verticalCards
    }
    else {
        document.getElementById("destinationContainer").innerHTML = horizontalCards
    }
}

window.addEventListener('resize', setCards)
setCards()