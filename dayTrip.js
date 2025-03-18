function changeTrip(text, id) {
    const element = document.getElementById(id);

    if (!element) return;

    // Fade out
    let opacity = 1;
    const fadeOut = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(fadeOut);
            element.innerHTML = `<h1>${text}</h1>`; // Change text

            // Fade in
            let fadeInOpacity = 0;
            const fadeIn = setInterval(() => {
                if (fadeInOpacity >= 1) {
                    clearInterval(fadeIn);
                }
                element.style.opacity = fadeInOpacity;
                fadeInOpacity += 0.1; // Adjust speed
            }, 30); // Adjust timing
        }
        element.style.opacity = opacity;
        opacity -= 0.1; // Adjust speed
    }, 30); // Adjust timing
}