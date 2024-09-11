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

// the boxes of featured trips:

// do not edit this!
class FeaturedBox{
    constructor(header, description, backgroundImage){
        this.header = header
        this.description = description
        this.backgroundImage = backgroundImage
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
        backgroundImage = "bilder/featured/camping.jpg"
    ),
    new FeaturedBox(
        header = "Scenic Road Trips",
        description = "Journey through Sunmøre’s scenic routes",
        backgroundImage = "bilder/featured/car.jpg"
    ),
    new FeaturedBox(
        header = "Biking",
        description = "Go biking in the terrain",
        backgroundImage = "bilder/featured/biking.jpg"
    )
]

// the section with the people

// do not edit this!
class Person{
    constructor(name, email, tlf, picture){
        this.name = name
        this.email = email
        this.tlf = tlf
        this.picture = picture
    }
}

// here you can edit info for each employee to be shown on the home page
let employees = [
    new Person(
        name = "Name",
        email = "sample@mail.com",
        tlf = "900 00 001",
        picture = "bilder/people/person1.webp"
    ),
    new Person(
        name = "Name",
        email = "sample@mail.com",
        tlf = "900 00 001",
        picture = "bilder/people/person2.webp"
    ),
    new Person(
        name = "Name",
        email = "sample@mail.com",
        tlf = "900 00 001",
        picture = "bilder/people/person3.webp"
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
                <a href="">
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

// iterates throguh the people
for (let i = 0; i < employees.length; i++) {
    
    document.getElementById("peopleBoxes").innerHTML +=
    `
    <div class="person">
        <img src="${employees[i].picture}" alt="">
        <h2>${employees[i].name}</h2>
        <p>Email: ${employees[i].email}</p>
        <p>Tlf: ${employees[i].tlf}</p>
    </div>
   `
}

