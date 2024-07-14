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
    something else that is interesting and engaging for the user.
    Bla bla you should fill in something here
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium...
`

// second header 
let header2 = "Something About yourself"

// the paragraph under
let paragraph2 = `
    Something you want to tell about your business in a short introduction.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium...
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

// here you can edit each box. Only edit what is in between the ""
let box1 = new FeaturedBox(
    header = "ski trip",
    description = "take a ski trip in the fjords",
    backgroundImage = "bilder/ski.jpg"
)

let box2 = new FeaturedBox(
    header = "Hiking",
    description = "Go on a hike in the mountains",
    backgroundImage = "bilder/package_watermark_89cusilu (1)/demo-images/4.jpg"
)

let boxes = [box1]
boxes.push(box2)


// sets the first texts
document.getElementById("header1").innerHTML = header1
document.getElementById("paragraph1").innerHTML = paragraph1
document.getElementById("header2").innerHTML = header2
document.getElementById("paragraph2").innerHTML = paragraph2


// iterates through the boxes
for (let i = 0; i < boxes.length; i++) {
    let narrowOrWide
    if(i % 2 == 0){
        narrowOrWide = "ad adNarrow slideRight"
    }
    else{
        narrowOrWide = "ad adWide slideLeft"
    }
    document.getElementById("featured").innerHTML +=
    `
       <div class="${narrowOrWide}">
       <a href="">
           <img src="${boxes[i].backgroundImage}">
           <div class="text-content">
               <h2>${boxes[i].header}</h2>
               <p> 
                ${boxes[i].description}
               </p>
           </div>
       </a>
       </div>
   `
}


