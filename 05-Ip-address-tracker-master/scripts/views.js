export default class View{
    constructor(){
        this.ipAddress = document.getElementById("ipAddress");
        this.timeZone = document.getElementById("timeZone");
        this.location = document.getElementById("location");
        this.isp = document.getElementById("isp");
    }

    setInformation(ip){
        this.ipAddress.innerText= ip.ip;
        this.location.innerText= ip.location;
        this.timeZone.innerText= ip.timeZone;
        this.isp.innerText= ip.isp;
    }

}