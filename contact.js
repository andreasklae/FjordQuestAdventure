// your email
let email = "support@fqa.no"

// your phone nmbr
let phone = "+47 123 45 678"

// Function to check if the device is a phone
const onPhone = function() {
    return window.innerWidth < 700;
};

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