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
    something else djkfbkd that is interesting and engaging for the user.
    Bla bla you should fill in something here
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium...
`

// second header 
let header2 = "Something engaging"

// the paragraph under
let paragraph2 = `
    Something you want to tell about your business in a short introduction.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium...
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
        header = "ski trip",
        description = "take a ski trip in the fjords",
        backgroundImage = "bilder/featured/ski.jpg",
        link = "#"
    ),
    new FeaturedBox(
        header = "Hiking",
        description = "Go on a hike in the mountains",
        backgroundImage = "bilder/featured/hiking.jpg",
        link = "#"
    ),
    new FeaturedBox(
        header = "Hotels",
        description = "Sleep comfortably",
        backgroundImage = "bilder/featured/hotel.jpg",
        link = "#"
    ),
    new FeaturedBox(
        header = "camping",
        description = "Go camping in nature",
        backgroundImage = "bilder/featured/camping.jpg",
        link = "#"
    ),
    new FeaturedBox(
        header = "Rent a car",
        description = "Take a scenic roadtrip",
        backgroundImage = "bilder/featured/car.jpg",
        link = "#"
    ),
    new FeaturedBox(
        header = "Biking",
        description = "Go biking in the terrain",
        backgroundImage = "bilder/featured/biking.jpg",
        link = "#"
    )
]

// do not edit beyond this point

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

function setFooter(){
    if(onPhone()){
        document.getElementById("footerContent").innerHTML = `
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
        document.getElementById("footerContent").innerHTML = `
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
setFooter();
window.addEventListener('resize', setFooter);

