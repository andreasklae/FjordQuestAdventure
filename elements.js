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
    // Insert CSS
    const style = document.createElement("style");
    style.textContent = `
        .menu-container {
            width: fit-content;
            margin: 20px auto;
        }

        .menu-navbar {
            display: flex;
            position: relative;
            justify-content: space-between;
            border: 2px solid white;
            border-radius: 20px;
            overflow: hidden;
            margin: 40px;
        }

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

        .menu-item {
            margin: 0;
            flex: 1;
            padding: 32px 30px;
            color: white;
            font-weight: bold;
            cursor: pointer;
            text-align: center;
            position: relative;
            z-index: 2;
            transition: color 0.3s ease-in-out;
            font-size: 2rem;
        }

        .menu-dropdown {
            display: none;
            width: fit-content;
            margin-right: auto;
        }

        .menu-mobile-wrapper {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            overflow: hidden;
            transition: max-height 0.3s ease-in-out;
        }

        .menu-dropdown-top {
            background-color: white;
            color: black;
            font-weight: bold;
            padding: 12px 20px;
            font-size: 1.5rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .menu-dropdown-top span {
            font-size: 2rem;
            transition: transform 0.3s ease;
        }

        .menu-dropdown.open .menu-dropdown-top span {
            transform: rotate(-45deg);
        }

        .menu-dropdown-items {
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: max-height 0.3s ease, opacity 0.3s ease;
        }

        .menu-dropdown.open .menu-dropdown-items {
            max-height: 500px;
            opacity: 1;
        }

        .menu-dropdown-item {
            padding: 12px 20px;
            font-weight: bold;
            color: white;
            font-size: 1.3rem;
            cursor: pointer;
        }

        .menu-dropdown-item:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
    `;
    document.head.appendChild(style);

    // Create container
    const container = document.createElement("div");
    if (onPhone()) {
        container.style.margin = "20px 0";
    } else {
        container.style.margin = "20px auto";
    }
    container.classList.add("menu-container");

    // Desktop navbar
    const highlight = document.createElement("div");
    highlight.classList.add("menu-highlight");

    const navbar = document.createElement("div");
    navbar.classList.add("menu-navbar");
    navbar.appendChild(highlight);

    items.forEach((item, index) => {
        const navItem = document.createElement("p");
        navItem.classList.add("menu-item");
        navItem.textContent = item;
        navItem.onclick = () => selectMenuItem(index, items);
        navbar.appendChild(navItem);
    });

    // Mobile dropdown
    const dropdown = document.createElement("div");
    dropdown.classList.add("menu-dropdown");

    const dropdownWrapper = document.createElement("div");
    dropdownWrapper.classList.add("menu-mobile-wrapper");

    const dropdownTop = document.createElement("div");
    dropdownTop.classList.add("menu-dropdown-top");
    dropdownTop.innerHTML = `${items[0]} <span>+</span>`;
    dropdownTop.onclick = () => {
        dropdown.classList.toggle("open");
    };

    const dropdownItems = document.createElement("div");
    dropdownItems.classList.add("menu-dropdown-items");

    function updateDropdown(currentIndex) {
        dropdownItems.innerHTML = "";
        items.forEach((item, i) => {
            if (i !== currentIndex) {
                const div = document.createElement("div");
                div.classList.add("menu-dropdown-item");
                div.textContent = item;
                div.onclick = () => {
                    selectMenuItem(i, items);
                    dropdown.classList.remove("open");
                };
                dropdownItems.appendChild(div);
            }
        });
        dropdownTop.innerHTML = `${items[currentIndex]} <span>+</span>`;
    }

    dropdownWrapper.appendChild(dropdownTop);
    dropdownWrapper.appendChild(dropdownItems);
    dropdown.appendChild(dropdownWrapper);

    // Add both to container
    container.appendChild(navbar);
    container.appendChild(dropdown);
    document.currentScript.parentNode.insertBefore(container, document.currentScript);

    // Track selected
    window.selectedMenuIndex = 0;
    selectMenuItem(0, items);
    updateDropdown(0);

    // Handle resizing
    window.addEventListener("resize", () => {
        if (onPhone()) {
            container.style.margin = "20px 0";
        } else {
            container.style.margin = "20px auto";
        }
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("open");
        }
    });

    // Expose updateDropdown to selection function
    window._menuUpdateDropdown = updateDropdown;
}

// Selection logic
function selectMenuItem(index, items) {
    const menuItems = document.querySelectorAll(".menu-item");
    const highlight = document.querySelector(".menu-highlight");
    const navbar = document.querySelector(".menu-navbar");
    const dropdown = document.querySelector(".menu-dropdown");

    window.selectedMenuIndex = index;

    if (window.innerWidth <= 768) {
        navbar.style.display = "none";
        dropdown.style.display = "block";
        if (window._menuUpdateDropdown) {
            window._menuUpdateDropdown(index);
        }
    } else {
        navbar.style.display = "flex";
        dropdown.style.display = "none";

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
    }

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