function spacer(height) {
    let spaceDiv = document.createElement("div");
    spaceDiv.style.height = `${height}px`;
    spaceDiv.style.width = "100%";

    // Find the script tag that called this function
    let scriptTag = document.currentScript;

    // Insert the spacer div right before the script tag
    scriptTag.parentNode.insertBefore(spaceDiv, scriptTag);
}

function menu(...items) {
    // Insert CSS dynamically
    const style = document.createElement("style");
    style.textContent = `
        .menu-container {
            width: fit-content;
            margin: 20px auto;
        }

        /* Navbar */
        .menu-navbar {
            display: flex;
            position: relative;
            justify-content: space-between;
            border: 2px solid white;
            border-radius: 20px;
            padding: 0;
            overflow: hidden;
        }

        /* Highlight */
        .menu-highlight {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background-color: white;
            border-radius: 18px;
            transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
            z-index: 1;
        }

        /* Menu Items */
        .menu-item {
            flex: 1;
            padding: 30px 30px;
            color: white;
            font-weight: bold;
            cursor: pointer;
            text-align: center;
            position: relative;
            z-index: 2;
            transition: color 0.3s ease-in-out;
            font-size: 1.5rem;
        }

        /* Dropdown (Hidden by Default) */
        .menu-dropdown {
            display: none;
            position: relative; /* Stay inside parent */
            width: fit-content;
            border-radius: 10px;
            margin-right: 100vw;
            overflow: hidden;
            padding: 0; /* Ensure no extra padding */
        }

        /* Dropdown Button (Always Visible) */
        .menu-dropdown-button {
            padding: 1px 20px;
            background-color: white;
            color: black;
            font-weight: bold;
            cursor: pointer;
            text-align: left;
            border: none;
            outline: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
        }

        /* Dropdown Arrow */
        .menu-dropdown-button span {
            display: inline-block;
            transition: transform 0.3s ease-in-out;
            font-size: 2em;
            transform: rotate(0deg);
            margin-left: 10px;
        }

        /* Rotate Arrow When Active */
        .menu-dropdown.open .menu-dropdown-button span {
            transform: rotate(-45deg);
        }

        /* Dropdown Menu */
        .menu-dropdown-menu {
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
            background: rgba(255, 255, 255, 0.1);
            text-align: left;
        }

        /* Show Dropdown Menu */
        .menu-dropdown.open .menu-dropdown-menu {
            max-height: 300px;
            opacity: 1;
        }

        /* Dropdown Items */
        .menu-dropdown-menu div {
            padding: 20px;
            font-weight: bold;
            color: white;
            cursor: pointer;
            transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
        }

        /* Hover Effect */
        .menu-dropdown-menu div:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }

        
    `;
    document.head.appendChild(style);

    // Create the menu container
    const container = document.createElement("div");
    container.classList.add("menu-container");

    const highlight = document.createElement("div");
    highlight.classList.add("menu-highlight");

    // Desktop Navbar
    const navbar = document.createElement("div");
    navbar.classList.add("menu-navbar");
    navbar.appendChild(highlight);

    // Mobile Dropdown
    const dropdownWrapper = document.createElement("p");
    dropdownWrapper.classList.add("menu-dropdown");

    const dropdownButton = document.createElement("p");
    dropdownButton.classList.add("menu-dropdown-button");
    dropdownButton.onclick = toggleDropdown;

    const dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("menu-dropdown-menu");
    let chosen = items[0];
    // Populate both navbar & dropdown
    items.forEach((item, index) => {
        // Navbar Items
        const navItem = document.createElement("p");
        navItem.classList.add("menu-item");
        navItem.textContent = item;
        navItem.onclick = () => {
            selectMenuItem(index, items);
            chosen = navItem;
        }
        navbar.appendChild(navItem);
    });

    // Append dropdown elements
    dropdownWrapper.appendChild(dropdownButton);
    dropdownWrapper.appendChild(dropdownMenu);

    // Append everything to the container
    container.appendChild(navbar);
    container.appendChild(dropdownWrapper);

    // Insert menu where script is placed
    document.currentScript.parentNode.insertBefore(container, document.currentScript);

    // Auto-select the first item
    selectMenuItem(0, items);
    return chosen;
}

// Menu Selection Logic
function selectMenuItem(index, items) {
    const menuItems = document.querySelectorAll(".menu-item");
    const highlight = document.querySelector(".menu-highlight");
    const navbar = document.querySelector(".menu-navbar");
    const dropdownButton = document.querySelector(".menu-dropdown-button");
    const dropdownMenu = document.querySelector(".menu-dropdown-menu");

    if (window.innerWidth <= 768) {
        document.querySelector(".menu-navbar").style.display = "none";
        document.querySelector(".menu-dropdown").style.display = "block";

        // Update dropdown button text with selected item
        dropdownButton.innerHTML = `${items[index]} <span>⌃</span>`;

        // Regenerate the dropdown menu (excluding selected item)
        dropdownMenu.innerHTML = "";
        items.forEach((item, i) => {
            if (i !== index) {
                const dropdownItem = document.createElement("h2");
                dropdownItem.textContent = item;
                dropdownItem.onclick = () => selectMenuItem(i, items);
                dropdownMenu.appendChild(dropdownItem);
            }
        });

        closeDropdown();
    } else {
        document.querySelector(".menu-navbar").style.display = "flex";
        document.querySelector(".menu-dropdown").style.display = "none";
    }

    const selectedItem = menuItems[index];
    const boundingBox = selectedItem.getBoundingClientRect();
    const navbarBox = navbar.getBoundingClientRect();
    const borderWidth = parseFloat(getComputedStyle(navbar).borderWidth);
    const leftPosition = boundingBox.left - navbarBox.left - borderWidth;
    const width = boundingBox.width;

    highlight.style.width = `${width}px`;
    highlight.style.transform = `translateX(${leftPosition}px)`;

    menuItems.forEach(item => item.style.color = "white");
    selectedItem.style.color = "black";

    // ✅ Dispatch a custom event with the selected item
    const event = new CustomEvent("menuItemSelected", {
        detail: { selectedItem: items[index] }
    });
    document.dispatchEvent(event);
}

// Dropdown Functions
function toggleDropdown() {
    document.querySelector(".menu-dropdown").classList.toggle("open");
}

function closeDropdown() {
    document.querySelector(".menu-dropdown").classList.remove("open");
}

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!event.target.closest(".menu-dropdown")) {
        closeDropdown();
    }
});

window.addEventListener("resize", () => {
    const items = Array.from(document.querySelectorAll(".menu-item")).map(item => item.textContent);
    if (typeof window.selectedMenuIndex === "undefined") {
        window.selectedMenuIndex = 0;
    }

    // Force update menu type (navbar vs dropdown) when resizing
    selectMenuItem(window.selectedMenuIndex, items);
});

// Set default selection
window.onload = () => {
    const items = Array.from(document.querySelectorAll(".menu-item")).map(item => item.textContent);
    if (items.length > 0) selectMenuItem(0, items);
};