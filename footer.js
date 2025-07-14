// your email
let email = "support@fqa.no"

// your phone nmbr
let phone = "+47 123 45 678"

let base = `<div class="logoContainer" style="display: flex;">
            <img id="logoTop" style="margin-right: 20px;" src="bilder/brand_images/package_highres_89cusilu (1)/black/icon/white_icon_transparent_background.png" alt="">
            <h2>Fjord Quest Adventure</h2>
        </div>`

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
            <p style="color: gray;">Website created by Andreas Klæboe</p>
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
            <p style="color: gray;">Website created by Andreas Klæboe</p>

            `
    }
}
function setFooter(){
    document.getElementById("footer").innerHTML = 
    base + 
    footer()
}
setFooter();
window.addEventListener('resize', setFooter);