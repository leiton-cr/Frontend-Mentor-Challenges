import Service from "./service.js";
import View from "./views.js";

export default class Controller {
    constructor() {
        this.view = new View();
        this.service = new Service();
        this.searchBtn = document.getElementById("searchBtn");
        this.searchInput = document.getElementById("searchInput");
        this.addListeners();
        this.handleSearch();
    }

    addListeners = () => {
        this.searchBtn.addEventListener('click', this.handleSearch)
    }

    handleSearch = async () => {
        
        try {
            const { value } = this.searchInput;
            const data = await this.service.getInfo(value);
            this.view.setInformation(data);
    
            this.setMap(data.lat, data.long);

        } catch (error) {
            Swal.fire({
                title: `Invalid IP`,
                text: `Please verify the format and try again`,
                confirmButtonColor: '#3085d6'
              })
        }

    }

    setMap(lat, long) {
        L.DomUtil.get('map')._leaflet_id = null;

        const map = L.map('map', {
            center: [lat, long],
            zoom: 14
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
        L.marker([lat, long], { icon: L.icon({ iconUrl: '/05-Ip-address-tracker-master/images/icon-location.svg' }) }).addTo(map)
    }
}

new Controller();


