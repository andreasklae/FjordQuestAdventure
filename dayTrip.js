class ItineraryItem {
    constructor(itemData) {
        this.destination = itemData.destination;
        this.start_time = itemData.start_time;
        this.end_time = itemData.end_time;
        this.description = itemData.description;
        this.image = itemData.image;
    }
}

class Trip {
    constructor(tripData) {
        this.trip_name = tripData.trip_name;
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
                <style>
                    .timeline {
                        position: relative;
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 20px;
                    }

                    .timeline::after {
                        content: '';
                        position: absolute;
                        width: 6px;
                        background-color: white;
                        top: 0;
                        bottom: 0;
                        left: ${onPhone() ? '31px' : '50%'};
                        margin-left: -3px;
                        border-radius: 3px;
                    }

                    .timeline-item {
                        padding: ${onPhone() ? '10px 10px 10px 70px' : '10px 40px'};
                        position: relative;
                        width: ${onPhone() ? '100%' : '50%'};
                        box-sizing: border-box;
                        animation: fadeIn 1s;
                        margin: 20px 0;
                    }

                    .timeline-item::after {
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
                        left: ${onPhone() ? '0' : '0'};
                    }

                    .right {
                        left: ${onPhone() ? '0' : '50%'};
                    }

                    .right::after {
                        ${onPhone() ? 'left: 19px;' : 'left: -16px;'}
                    }

                    .content {
                        padding: 20px 30px;
                        background-color: rgba(255, 255, 255, 0.1);
                        border-radius: 6px;
                        backdrop-filter: blur(10px);
                    }

                    .content img {
                        width: 100%;
                        height: ${onPhone() ? '150px' : '200px'};
                        object-fit: cover;
                        border-radius: 4px;
                        margin: 10px 0;
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
                <div class="timeline">
            `;

            trip.itinerary.forEach((item, index) => {
                const side = onPhone() ? 'left' : (index % 2 === 0 ? 'left' : 'right');
                html += `
                    <div class="timeline-item ${side}">
                        <div class="content">
                            <h3>${item.destination}</h3>
                            <p class="time">${item.start_time} - ${item.end_time}</p>
                            <img src="placeholder.jpg" alt="${item.destination}">
                            ${item.description ? `<p>${item.description}</p>` : ''}
                        </div>
                    </div>
                `;
            });

            html += '</div>';

            const element = document.getElementById(elementId);
            fadeText(element, html);
        })
        .catch(error => console.error('Error:', error));
}