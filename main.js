/* 

instructions:

Change only the clear text underneath. do not remove the " or the `. 
that will mess up the files. new lines (clicking enter) wil not create 
new lines on the website, it wil only affect how the text looks in this 
file. use new lines to keep this file neat.

*/

// the first two info texts

// first header 
let header1 = "Discover Norway in Style"

// the paragraph under
let paragraph1 = `
    Experience majestic fjords in an exclusive way.
    FjordQuest Adventure offers tailor-made journeys through Norway’s most breathtaking landscapes.
    Drive a Porsche Taycan 4S and indulge in luxurious experiences, from guided mountain hikes to local culinary delights.
    This is more than just a trip – it’s a journey of discovery through Norway’s unique natural wonders.
`

// second header 
let header2 = "Tailored Luxury Experiences"

// the paragraph under
let paragraph2 = `
    Your dream, our tailored adventure.
    Every FjordQuest Adventure is crafted around your preferences, whether you're seeking thrilling expeditions or relaxing days in Norway’s most luxurious villas. 
    Let us help you create unforgettable memories with bespoke packages that combine nature, culture, and luxury. 
    We bring you closer to the beauty of nature – on your terms.
`

let aboutUs = `
At Fjord Quest Adventure, we specialize in creating bespoke travel experiences tailored to your unique desires. 
Based in Norway, we combine our deep expertise in luxury travel with a passion for crafting journeys that go beyond 
the ordinary. Whether you dream of serene escapes, cultural immersions, or exhilarating adventures, our team meticulously designs 
every detail to ensure an unforgettable experience. With access to exclusive destinations, personalized itineraries, and exceptional service, 
we turn your travel aspirations into reality. At Fjord Quest Adventure, your journey is as extraordinary as the memories you’ll make.
`

let mission = `
Our mission at Fjord Quest Adventure is to redefine luxury travel by creating personalized journeys that inspire, delight, and leave lasting impressions.
 We are dedicated to curating unique experiences that reflect our clients’ individuality, ensuring every adventure is seamless, stress-free, and 
 extraordinary. With a commitment to excellence, sustainability, and meaningful connections, we aim to transform travel into an art form, where every 
 detail is designed to exceed expectations and celebrate the beauty of exploration.
`

// the boxes of featured trips:

// do not edit this!
class FeaturedBox{
    constructor(header, description, backgroundImage, link){
        this.header = header
        this.description = description
        this.backgroundImage = backgroundImage
        this.link = link
    }
}

let boxes = [
    // here you can edit each box. Only edit what is in between the ""
    new FeaturedBox(
        header = "The Porsche",
        description = "Cruise through stunning fjords in a Porsche Taycan 4S for an unforgettable journey",
        backgroundImage = "bilder/Boks/Porscheu1.jpeg"
    ),
    new FeaturedBox(
        header = "Private Boat Tours",
        description = "Cruise through Norway’s serene fjords and experience the tranquility of nature from the comfort of a private boat.",
        backgroundImage = "bilder/boks/båtu1.jpg"

    ),
    new FeaturedBox(
        header = "Hotels/Villa",
        description = "Relax in comfort and style with stays at handpicked luxury hotels and villas offering stunning views and top-class amenities.",
        backgroundImage = "bilder/boks/UnionGeirangeru1.jpg"
    ),
    new FeaturedBox(
        header = "Helikopter",
        description = "Soar above Norway’s majestic fjords and mountains for a breathtaking aerial adventure like no other.",
        backgroundImage = "bilder/boks/fjordhelikopteru1.jpg"
    ),
    new FeaturedBox(
        header = "Culinary Experience",
        description = "Indulge in gourmet dining with local delicacies, crafted by expert chefs for an unforgettable culinary journey.",
        backgroundImage = "bilder/boks/culinu1.webp"
    ),
    new FeaturedBox(
        header = "Hiking",
        description = "Explore breathtaking mountain trails and experience Norway's raw natural beauty on foot.",
        backgroundImage = "bilder/boks/Hikingu3.jpg"
        
 
    )
]

// do not edit beyond this point
let underConstruction = false

if(underConstruction){
    body = document.getElementById("body")
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    //document.body.style.backgroundRepeat = "no-repeat";
    body.innerHTML = `
    <img
        style = "
            position = absolute;
        "
        id="backgroundPhoto" src="bilder/Forside/alesund.jpeg" 
        alt=""
    >
        <div
        style = "
                margin-top: 10vh;
                left: auto;
                width: 90vw;
                display: flex; flex-direction: column;
                align-items: center; /* Center the contents horizontally */
                overflow: hidden; /* Prevent scrolling inside the div */
            "
        > 
            <img src="bilder/brand_images/package_watermark_89cusilu (1)/white/full/white_logo_transparent_background.png" alt="" 
            style = "
                left: auto;
                width: 70vw;
                max-width: 700px;
                z-index: 1; /* Place the image behind the text */
            ">
            <h2 style = "
                color: white;
                text-align: center;
                z-index: 2;
                margin-bottom: 0vh;
            "
            >
                Website currently under construction
            </h2>
            <h3 style = "
                color: white;
                text-align: center;
                z-index: 2;
            "
            >
                For contact: \n
            Hello@FjordQuestAdventure.no
            </h3>
        </div>
        
    `
}


else{

    // sets the first texts
    document.getElementById("header1").innerHTML = header1
    document.getElementById("paragraph1").innerHTML = paragraph1
    document.getElementById("header2").innerHTML = header2
    document.getElementById("paragraph2").innerHTML = paragraph2
    console.log(window.innerWidth)
    
    function setNav(){
        if(!onPhone()){
            document.getElementById("topButtons").innerHTML = `
                <h3> <a href="discover.html">What we offer</a> </h3>
                <h3> <a href="contact.html">Contact us</a> </h3>
                <h3> <a href="contact.html">Accomodation</a> </h3>
                `
        }
        else{
            document.getElementById("topButtons").innerHTML = hamburgerMenu();
            const hamMenu = document.querySelector(".ham-menu");
    
            const offScreenMenu = document.querySelector(".off-screen-menu");
    
            hamMenu.addEventListener("click", () => {
            hamMenu.classList.toggle("active");
            offScreenMenu.classList.toggle("active");
            });
        }
    }
    setNav();
    window.addEventListener('resize', setNav);
    
    
    function hamburgerMenu(){
        return `
        <div class="off-screen-menu">
            <h3> <a href="discover.html">What we offer</a> </h3>
            <h3> <a href="contact.html">Contact us</a> </h3>
            <h3> <a href="contact.html">Accomodation</a> </h3>
        </div>
    
        <nav>
          <div class="ham-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        `
    }
    
    function updateIntro(){
        if(onPhone()){
            document.getElementById("firstTexts").className = "about slideUp";
        }
        else{
            document.getElementById("firstTexts").className = "intro slideUp";
        }
    }
    updateIntro();
    window.addEventListener('resize', updateIntro);
    
    
    // Function to update the layout of the boxes
    const updateFeturedboxLayout = function() {
        const featured = document.getElementById("featured");
        featured.innerHTML = ''; // Clear existing content
    
        // Iterate through the boxes
        for (let i = 0; i < boxes.length; i++) {
            let style = "ad";
    
            if (onPhone()) {
                style += " adFull slideLeft";
            } else {
                if ((i % 4 === 0) || (i % 4 === 3)) {
                    style += " adWide";
                } else {
                    style += " adNarrow";
                }
    
                if (i % 2 === 0) {
                    style += " slideLeft";
                } else {
                    style += " slideRight";
                }
            }
    
            // Add the new box to the featured section
            featured.innerHTML += `
                <div class="${style}">
                    <a href="${boxes[i].link}">
                        <img src="${boxes[i].backgroundImage}">
                        <div class="text-content">
                            <h2>${boxes[i].header}</h2>
                            <p>${boxes[i].description}</p>
                        </div>
                    </a>
                </div>
            `;
        }
    };
    
    // Initial call to apply the layout when the page loads
    updateFeturedboxLayout();
    
    // Add an event listener to handle window resizing
    window.addEventListener('resize', updateFeturedboxLayout);
    
    document.getElementById("aboutUs").innerHTML = aboutUs
    document.getElementById("mission").innerHTML = mission
}

