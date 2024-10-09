/* 

instructions:

Change only the clear text underneath. do not remove the " or the `. 
that will mess up the files. new lines (clicking enter) wil not create 
new lines on the website, it wil only affect how the text looks in this 
file. use new lines to keep this file neat.

*/

// the first two info texts

// first header 
let header1 = "Something interesting"

// the paragraph under
let paragraph1 = `
    Discover breathtaking landscapes, majestic fjords, and thrilling adventures 
    with Fjordquest Adventure. Whether you're seeking a peaceful escape or an adrenaline-filled 
    journey, we have something for everyone. Embark on a personalized trip that connects you 
    to the raw beauty of Sunmøre, where nature meets tradition in perfect harmony.
`

// second header 
let header2 = "Your Adventure Awaits"

// the paragraph under
let paragraph2 = `
    Fjordquest Adventure specializes in creating unforgettable experiences tailored 
    to your desires. Whether it's skiing down pristine slopes, hiking through towering mountains, 
    or exploring the rugged coastline, we offer curated travel packages that will leave you with 
    lifelong memories. Let us be your guide to the best Sunmøre has to offer.
`

let aboutUs = `
    Something about us that is interesting and fun for the user to read.
`

let aboutSm = `
    Something about us that is interesting and fun for the user to read.
`

// your email
let email = "support@fqa.no"

// your phone nmbr
let phone = "+47 123 45 678"

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
        header = "Ski Adventure",
        description = "Ski through the breathtaking fjords with expert guides",
        backgroundImage = "bilder/featured/ski.jpg"
    ),
    new FeaturedBox(
        header = "Mountain Hiking",
        description = "Experience unparalleled views on a mountain hike",
        backgroundImage = "bilder/featured/hiking.jpg"
    ),
    new FeaturedBox(
        header = "Luxury Stay",
        description = "Relax in comfort at our handpicked luxury hotels",
        backgroundImage = "bilder/featured/hotel.jpg"
    ),
    new FeaturedBox(
        header = "camping",
        description = "Go camping in nature",
        backgroundImage = "bilder/featured/camping.jpg",
        link = "#"
    ),
    new FeaturedBox(
        header = "Scenic Road Trips",
        description = "Journey through Sunmøre’s scenic routes",
        backgroundImage = "bilder/featured/car.jpg"
    ),
    new FeaturedBox(
        header = "Biking",
        description = "Go biking in the terrain",
        backgroundImage = "bilder/featured/biking.jpg",
        link = "#"
    )
]

// do not edit beyond this point
let underConstruction = true

if(underConstruction){
    body = document.getElementById("body")
    document.body.style.backgroundImage = "url('bilder/ålesund.jpeg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    //document.body.style.backgroundRepeat = "no-repeat";
    body.innerHTML = `
        <div
        style = "
                margin-top: 10vh;
                left: auto;
                width: 70vw;
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
                margin-bottom: 20vh;
            "
            >
                For contact: Hello@FjordQuestAdventure.no
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
    
    // Function to check if the device is a phone
    const onPhone = function() {
        return window.innerWidth < 700;
    };
    
    function setNav(){
        if(!onPhone()){
            document.getElementById("topButtons").innerHTML = `
                <h3> <a href="">Discover</a> </h3>
                <h3> <a href="contact.html">Contact us</a> </h3>
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
            <h3> <a href="">Discover</a> </h3>
            <h3> <a href="contact.html">Contact us</a> </h3>
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
    document.getElementById("aboutSm").innerHTML = aboutSm
    
    setFooter();
    window.addEventListener('resize', setFooter);
    function footer(){
        if(onPhone()){
            return`
                <p></p>
                <h3>Reach us</h3>
                <p id="Email">${email}</p>
                <p id="Phone">${phone}</p>
                <h1></h1>
                <h3>Socials</h3>
                <p>Instagram</p>
                <p>Facebook</p>
                `
        }
        else{
            return`
                <div style = "display: flex;">
                    <div style = "display: block; margin-right: 40vw;">
                        <h2>Reach us</h2>
                        <p id="Email">${email}</p>
                        <p id="Phone">${phone}</p>
                    </div>
                    <div style = "display: block;">
                        <h2>Socials</h2>
                        <p>Instagram</p>
                        <p>Facebook</p>
                    </div>
                </div>
                `
        }
    }
    function setFooter(){
        document.getElementById("footerContent").innerHTML = footer()
    }
}

