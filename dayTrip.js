class ItineraryItem {
    constructor(itemData) {
        this.destination = itemData.destination;
        this.start_time = itemData.start_time;
        this.duration = itemData.duration;
        this.description = itemData.description;
        this.image = itemData.image;
    }
}

class Trip {
    constructor(tripData) {
        this.trip_name = tripData.trip_name;
        this.trip_start = tripData.trip_start;
        this.trip_end = tripData.trip_end;
        this.description = tripData.description;
        this.image = tripData.image;
        this.itinerary = tripData.itinerary.map(item => new ItineraryItem(item));
    }
}

function fadeText(element, newText) {
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        element.innerHTML = newText;
        element.style.opacity = '1';
    }, 500);
}

function changeTrip(tripName, elementId) {
    fetch('daytrips.json')
        .then(response => response.json())
        .then(data => {
            const tripData = data.trips.find(trip => trip.trip_name === tripName);
            if (!tripData) {
                console.error('Trip not found');
                return;
            }

            const trip = new Trip(tripData); 

            let html = `
            <div class="row">
                <img src="${trip.image}" alt="Image of ${trip.tripName}" class="row-image">
                <div class="textLeft">
                    <h2 id="tripname">${trip.trip_name}</h2>
                    <p>${trip.description}</p>
                </div>
            </div>
            `
            
            html += `
                <style>
                    .timeline {
                        position: relative;
                        display: block; 
                        overflow: hidden;
                        height: 0;
                        transition: height 1s ease;
                    }

                    .timeline.expanded {
                        max-height: 50000px; /* large enough to accommodate content */
                    }

                    .timeline-line {
                        display: ${onPhone() ? 'none' : 'block'};
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 50%;
                        width: 6px;
                        background-color: white;
                        margin-left: -3px;
                        margin-top: 30px;
                        margin-bottom: 30px;
                        border-radius: 3px;
                        z-index: 0;
                    }

                    .timeline-item {
                        padding: ${onPhone() ? '15px' : '10px 40px'};
                        position: relative;
                        width: ${onPhone() ? '100%' : '50%'};
                        box-sizing: border-box;
                        animation: fadeIn 1s;
                        margin: ${onPhone() ? '5px auto' : '20px 0'};
                        text-align: ${onPhone() ? 'center' : 'left'};
                    }

                    .timeline-item::after {
                        display: ${onPhone() ? 'none' : 'block'};
                        content: '';
                        position: absolute;
                        width: 25px;
                        height: 25px;
                        ${onPhone() ? 'left: 19px;' : 'right: -17px;'}
                        background-color: white;
                        border: 4px solid white;
                        top: 50%;
                        transform: translateY(-50%);
                        border-radius: 50%;
                        z-index: 1;
                    }

                    .left {
                        padding-left: 0;
                        margin-right: auto;
                    }

                    .right {
                        margin-left: auto;
                        padding-right: 0;
                    }

                    .right::after {
                        ${onPhone() ? 'left: 19px;' : 'left: -16px;'}
                    }

                    .content {
                        text-align: center;
                        padding:  ${onPhone() ? '15px' : '20px 30px' };
                        background-color: rgba(255, 255, 255, 0.1);
                        border-radius: 10px;
                        backdrop-filter: blur(10px);
                    }

                    .content img {
                        width: 90%;
                        aspect-ratio: 1 / 1; /* Makes it square */
                        object-fit: cover;    /* Crops to fill the square */
                        border-radius: 10px;
                        margin: 15px 0;
                    }
                    
                    .content p{
                        font-size: 1.5rem;
                        margin: 5px;    
                    }
                    
                    .content h2{
                        margin: 10px;
                    }

                    .time {
                        color: #ffffff;
                        font-weight: bold;
                    }

                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                </style>
                <h2>Trip lasts from ${trip.trip_start} to ${trip.trip_end}</h2>
                <h3>Please note that all times are flexible and not fixed</h3>
                
                <div class="timeline">
                
                <div class="timeline-line"></div>
            `;
            trip.itinerary.forEach((item, index) => {
                const side = onPhone() ? '' : (index % 2 === 0 ? 'left' : 'right');
                html += `
                    <div class="timeline-item ${side}">
                        <div class="content">
                            <h2>${item.destination}</h2>
                            <p class="time">${item.start_time}</p>
                            <p class="time">Duration: ~${item.duration}</p>
                            <img src="${item.image}" alt="${item.destination}">
                            ${item.description ? `<p>${item.description}</p>` : ''}
                        </div>
                    </div>
                `;
            });

            html += '</div>';
            html += `<a id="toggleItineraryBtn" onclick="toggleItinerary()" class="nav-button">
                        <span id="toggleText">Show itinerary</span>
                        <span id="arrowIcon">❯</span>
                    </a>
                    `
                    
            const element = document.getElementById(elementId);
            fadeText(element, html);
        })
        .catch(error => console.error('Error:', error));
}

function toggleItinerary() {
    const timeline = document.querySelector('.timeline');
    const toggleText = document.getElementById('toggleText');
    const arrowIcon = document.getElementById('arrowIcon');

    if (!timeline) return;

    const isExpanded = timeline.classList.contains('expanded');

    if (isExpanded) {
        document.getElementById("tripname").scrollIntoView({ behavior: "smooth", block: "start" });
        timeline.style.height = timeline.scrollHeight + 'px';
        requestAnimationFrame(() => {
            timeline.style.height = '0px';
            timeline.classList.remove('expanded');
        });
        
        toggleText.textContent = "Show itinerary";
        arrowIcon.style.transform = "rotate(90deg)";
    } else {
        timeline.style.height = timeline.scrollHeight + 'px';
        timeline.classList.add('expanded');
        timeline.addEventListener('transitionend', function removeHeight() {
            if (timeline.classList.contains('expanded')) {
                timeline.style.height = 'auto';
            }
            timeline.removeEventListener('transitionend', removeHeight);
        });

        toggleText.textContent = "Hide itinerary";
        arrowIcon.style.transform = "rotate(-90deg)";
    }
}