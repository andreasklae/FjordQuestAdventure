let summer = true;

let summerButton = document.getElementById("summerButton");
let winterButton = document.getElementById("winterButton");
let underline = document.getElementById("underline");

summerButton.onclick = function() {
    let delay = 0
    if (!summer) delay = 400

    let w = document.getElementById("winterCards")
    let s = document.getElementById("summerCards")
    w.style.transform = "translateX(100%)"
    s.style.transform = "translateX(0%)"

    setTimeout(function() {
        document.getElementById("cards").scrollIntoView({
            behavior: 'smooth',  // Smooth scrolling effect
            inline: 'nearest'    // Keep horizontal position unchanged
        });
    }, delay);

    summer = true;
    updateStyles();
};

winterButton.onclick = function() {
    let delay = 0
    if (summer) delay = 400
    
    let w = document.getElementById("winterCards")
    let s = document.getElementById("summerCards")
    w.style.transform = "translateX(-100%)"
    s.style.transform = "translateX(-100%)"
    
    setTimeout(function() {
        document.getElementById("cards").scrollIntoView({
            behavior: 'smooth',  // Smooth scrolling effect
            block: 'start',      // Scroll to the top of the view on the y-axis
            inline: 'nearest'    // Keep horizontal position unchanged
        });
    }, delay);

    summer = false;
    updateStyles();
};

// Function to update the styles based on the `summer` variable
function updateStyles() {
    if (summer) {
        // Get the width and position of the summer button
        let summerRect = summerButton.getBoundingClientRect();

        // Set the underline's width and position to match the Summer button
        underline.style.width = summerRect.width + 'px';
        underline.style.left = 0;

        // Update button text styles
        summerButton.style.color = "white";
        winterButton.style.color = "#d3d3d3";
    } else {
        // Get the width and position of the winter button
        let winterRect = winterButton.getBoundingClientRect();
        let summerRect = summerButton.getBoundingClientRect();

        gap = document.getElementById("seasonSelector").style.gap;

        // Set the underline's width and position to match the Winter button
        underline.style.width = winterRect.width + 'px';
        underline.style.left = summerRect.width + 20 + 'px';

        // Update button text styles
        winterButton.style.color = "white";
        summerButton.style.color = "#d3d3d3";
    }
}

// Initial call to set the correct styles based on the initial `summer` value
updateStyles();