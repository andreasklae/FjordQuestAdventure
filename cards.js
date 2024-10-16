let summerCardsHtml = document.getElementById("summerCards");
let winterCardsHtml = document.getElementById("winterCards");


class Card {
    constructor(header, paragraph, img, color) {
        this.header = header;
        this.paragraph = paragraph;
        this.img = img;
        this.color = color;
    }
}

let summerCards = [
    new Card(
        "Arrive at the hotel",
        "Arrive at the hotel and comlete the check-in process. Once settled in your room, take a moment to unwind after your journey. You can explore the hotel’s amenities or take a short walk around the nearby area to get acquainted with your surroundings.",
        "bilder/Boks/UnionGeirangeru1.jpg",
        "#003220"
    ),
    new Card(
        "Boat trip",
        "Embark on an unforgettable boat trip through the breathtaking Norwegian fjords. Glide past towering cliffs, cascading waterfalls, and tranquil waters as you experience the stunning natural beauty of this majestic landscape. Discover hidden gems and take in the serene atmosphere that only the fjords can offer",
        "bilder/Boks/Båtu1.jpg",
        "#002040"
    ),
    new Card(
        "Hike",
        "Set out on an exhilarating hike through the stunning landscapes of the Norwegian fjords. Traverse rugged trails, pass by crystal-clear streams, and ascend to viewpoints that offer sweeping vistas of majestic mountains and deep valleys. Embrace the fresh air and the beauty of nature as you explore the heart of this extraordinary region on foot.",
        "bilder/Boks/Hikingu3.jpg",
        "#6e3310"
    ),
    new Card(
        "Helicopter ride",
        "Experience the awe-inspiring beauty of the Norwegian fjords from above with a thrilling helicopter ride. Soar over dramatic cliffs, shimmering fjords, and snow-capped peaks as you take in panoramic views that are impossible to see from the ground. This unforgettable aerial adventure offers a unique perspective on the grandeur of Norway’s natural wonders.",
        "bilder/Boks/fjordhelikopteru1.jpg",
        "#4A708B"
    )
];

let winterCards = [
    new Card(
        "Arrive at the hotel",
        "Arrive at the hotel and do the check-in process. Once settled in your room, take a moment to unwind after your journey. You can explore the hotel’s amenities or take a short walk around the nearby area to get acquainted with your surroundings.",
        "bilder/Boks/UnionGeirangeru1.jpg",
        "#003152"
    ),
    new Card(
        "Ski trip",
        "Experience the thrill of a ski trip in the Norwegian fjords, where snow-covered peaks meet breathtaking vistas. Glide down pristine slopes surrounded by towering mountains and dramatic fjord landscapes. Whether you’re a beginner or an experienced skier, this adventure promises exhilarating runs, crisp winter air, and the unforgettable beauty of Norway’s winter wonderland.",
        "bilder/Boks/ski.jpg",
        "#000000"
    ),
    new Card(
        "Sauna",
        "Relax and rejuvenate with a sauna experience in the heart of the Norwegian fjords. Step into the soothing heat as you unwind after a day of adventure, surrounded by stunning natural views. Let the warmth of the sauna melt away stress, while the tranquility of the fjords provides the perfect backdrop for ultimate relaxation.",
        "bilder/Boks/sauna.webp",
        "#361d0d"
    ),
    new Card(
        "Helicopter ride",
        "Experience the awe-inspiring beauty of the Norwegian fjords from above with a thrilling helicopter ride. Soar over dramatic cliffs, shimmering fjords, and snow-capped peaks as you take in panoramic views that are impossible to see from the ground. This unforgettable aerial adventure offers a unique perspective on the grandeur of Norway’s natural wonders.",
        "bilder/Boks/fjordhelikopteru1.jpg",
        "#4A708B"
    )
];

function getCardStyle(index) {
    if (index == 0) {return window.innerWidth > 900 ? "cardWide" : "cardNarrow";}
    return window.innerWidth > 900 ? "cardWide slideUp" : "cardNarrow slideUp";
}

function generateCards(cards, element) {
    let cardElements = "";
    for (let i = 0; i < cards.length; i++) {
        if (window.innerWidth > 900) {
            if (i % 2 != 0) {
                cardElements += `
                <div class="${getCardStyle(i)}" data-color="${cards[i].color}">
                    <div class="text">
                        <h1>Day ${i + 1} - ${cards[i].header}</h1>
                        <p>${cards[i].paragraph}</p>
                    </div>
                    <img src="${cards[i].img}" alt="">
                </div>
                `;
            } else {
                cardElements += `
                <div class="${getCardStyle(i)}" data-color="${cards[i].color}">
                    <img src="${cards[i].img}" alt="">
                    <div class="text">
                        <h1>Day ${i + 1} - ${cards[i].header}</h1>
                        <p>${cards[i].paragraph}</p>
                    </div>
                </div>
                `;
            }
        } else {
            cardElements += `
                <div class="${getCardStyle(i)}" data-color="${cards[i].color}">
                    <div class="text">
                        <h2>Day ${i + 1} - ${cards[i].header}</h2>
                    </div>
                    <img src="${cards[i].img}" alt="">
                    <div class="text">
                        <p>${cards[i].paragraph}</p>
                    </div>
                </div>
            `;
        }
    }
    element.innerHTML = cardElements;
}

// Function to detect which card is in focus and update the body's background color
function observeCards() {
    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.5 // When 50% of the card is visible, trigger the callback
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the color from the card's data-color attribute and set it as the body's background color
                document.body.style.backgroundColor = entry.target.getAttribute("data-color");
                // Scroll the card into view when it becomes 50% visible
            }
        });
    }, options);

    // Select all the cards and observe them
    document.querySelectorAll(".cardWide, .cardNarrow").forEach(card => {
        observer.observe(card);
    });
}

// Initial call to generate cards and observe them
generateCards(summerCards, summerCardsHtml);
generateCards(winterCards, winterCardsHtml);
observeCards();

// Re-generate cards and re-observe them on window resize
window.addEventListener('resize', () => {
    generateCards(summerCards, summerCardsHtml);
    generateCards(winterCards, winterCardsHtml);
    observeCards();
});
