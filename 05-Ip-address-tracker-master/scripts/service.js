export default class Service{
    constructor(){
        this.ipgeolocationKey = 'bb1ccb54b1ef44008185f7435d38529c'
        this.ipgeolocationUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${this.ipgeolocationKey}`
    }

    async getInfo(ip){
       const response = await this.getData(`https://geo.ipify.org/api/v2/country?apiKey=at_ZzXfA5k9Zorr6PRiMRu7pPmYdTQZW&ipAddress=${ip}`);
       const geoResponse = await this.getGeolocation(response.ip);
   
        return {
            ip: response.ip,
            location:response.location.region,
            timeZone: `UCT${response.location.timezone}`,
            isp: response.isp,
            lat: geoResponse.latitude,
            long: geoResponse.longitude,
        }

    }

    async getGeolocation(ip){
        const response = await this.getData(`${this.ipgeolocationUrl}&ip=${ip}&fields=latitude,longitude`);
        return response;
    }


    async getData(url){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

}