// Initialize the map centered on Vermont
const map = L.map('map').setView([44.0, -72.7], 8);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(map);

// Store markers for filtering
let markers = [];
let selectedCenter = null;

// Create custom icon
function createCustomIcon() {
    return L.divIcon({
        className: 'custom-div-icon',
        html: '<div class="custom-marker">🏫</div>',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });
}

// Create popup content for a center
function createPopupContent(center) {
    const programTags = center.programs.map(p =>
        `<span class="program-tag">${p}</span>`
    ).join('');

    return `
        <div class="popup-content">
            <div class="popup-title">${center.name}</div>
            <div class="popup-location">📍 ${center.location}</div>

            <div class="popup-stats">
                <div class="popup-stat">
                    <span class="popup-stat-label">Est. Students:</span>
                    <span class="popup-stat-value">${center.estimatedStudents}</span>
                </div>
                <div class="popup-stat">
                    <span class="popup-stat-label">Graduation Rate:</span>
                    <span class="popup-stat-value">${center.graduationRate}%</span>
                </div>
                <div class="popup-stat">
                    <span class="popup-stat-label">Cost to Students:</span>
                    <span class="popup-stat-value">FREE</span>
                </div>
                <div class="popup-stat">
                    <span class="popup-stat-label">Programs Offered:</span>
                    <span class="popup-stat-value">${center.programs.length}</span>
                </div>
            </div>

            <div class="popup-programs">
                <h4>Programs:</h4>
                ${programTags}
            </div>

            ${center.notes ? `<p style="margin-top: 10px; font-size: 12px; color: #666; font-style: italic;">${center.notes}</p>` : ''}

            <p style="margin-top: 10px; text-align: center;">
                <a href="${center.website}" target="_blank" style="color: #1a5f2e; font-weight: 600;">Visit Website →</a>
            </p>
        </div>
    `;
}

// Add markers for all centers
function addMarkers() {
    vtTechCenters.forEach(center => {
        const marker = L.marker(center.coordinates, {
            icon: createCustomIcon()
        }).addTo(map);

        marker.bindPopup(createPopupContent(center), {
            maxWidth: 350,
            className: 'custom-popup'
        });

        marker.on('click', () => {
            selectCenter(center.id);
        });

        marker.centerData = center;
        markers.push(marker);
    });
}

// Create sidebar list items
function createSidebarList() {
    const container = document.getElementById('centerListContainer');

    vtTechCenters.forEach(center => {
        const item = document.createElement('div');
        item.className = 'center-item';
        item.id = `center-item-${center.id}`;

        const programCount = center.programs.length;
        const topPrograms = center.programs.slice(0, 3).join(', ');

        item.innerHTML = `
            <div class="center-name">${center.name}</div>
            <div class="center-location">${center.location}</div>
            <div class="center-programs">
                <strong>${programCount} programs</strong> including ${topPrograms}${programCount > 3 ? ', and more' : ''}
            </div>
        `;

        item.addEventListener('click', () => {
            selectCenter(center.id);
            map.setView(center.coordinates, 12);

            // Find and open the marker popup
            const marker = markers.find(m => m.centerData.id === center.id);
            if (marker) {
                marker.openPopup();
            }
        });

        container.appendChild(item);
    });
}

// Select a center (highlight in sidebar and on map)
function selectCenter(centerId) {
    // Remove previous selection
    document.querySelectorAll('.center-item').forEach(item => {
        item.classList.remove('selected');
    });

    // Add selection to clicked item
    const item = document.getElementById(`center-item-${centerId}`);
    if (item) {
        item.classList.add('selected');
        selectedCenter = centerId;
    }
}

// Filter centers based on program categories
function filterCenters() {
    const filters = {
        healthcare: document.getElementById('filter-healthcare').checked,
        trades: document.getElementById('filter-trades').checked,
        tech: document.getElementById('filter-tech').checked,
        culinary: document.getElementById('filter-culinary').checked,
        automotive: document.getElementById('filter-automotive').checked
    };

    // If all filters are unchecked, show all
    const anyChecked = Object.values(filters).some(v => v);

    markers.forEach(marker => {
        const center = marker.centerData;
        let shouldShow = !anyChecked; // Show all if no filters

        if (anyChecked) {
            // Show if center has any of the selected categories
            shouldShow = center.programCategories.some(cat => filters[cat]);
        }

        if (shouldShow) {
            marker.addTo(map);
            document.getElementById(`center-item-${center.id}`).style.display = 'block';
        } else {
            marker.remove();
            document.getElementById(`center-item-${center.id}`).style.display = 'none';
        }
    });
}

// Set up filter event listeners
function setupFilters() {
    ['healthcare', 'trades', 'tech', 'culinary', 'automotive'].forEach(category => {
        document.getElementById(`filter-${category}`).addEventListener('change', filterCenters);
    });
}

// Initialize the application
function init() {
    addMarkers();
    createSidebarList();
    setupFilters();

    console.log('Vermont Tech Centers Map loaded successfully');
    console.log(`Total centers: ${vtStats.totalCenters}`);
    console.log(`Total estimated students: ${vtStats.totalStudents}`);
    console.log(`Average graduation rate: ${vtStats.avgGraduationRate}%`);
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}