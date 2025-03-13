function spacer(height) {
    let spaceDiv = document.createElement("div");
    spaceDiv.style.height = `${height}px`;
    spaceDiv.style.width = "100%";

    // Find the script tag that called this function
    let scriptTag = document.currentScript;

    // Insert the spacer div right before the script tag
    scriptTag.parentNode.insertBefore(spaceDiv, scriptTag);
}