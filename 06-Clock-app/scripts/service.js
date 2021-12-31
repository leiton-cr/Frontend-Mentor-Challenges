export default class Service {
  constructor() {}
  
  async getQuote() {
    const response = await this.getData("https://api.quotable.io/random");
    return {author: response.author, content:response.content};
  }

  async getTimeData() {
    
    const addressData = await this.getData('https://api.freegeoip.app/json/?apikey=f5c104f0-69d2-11ec-b85e-21370f4e01ea');
    const timeData = await this.getData(`http://worldtimeapi.org/api/timezone/${addressData.time_zone}`);

    return {
      dateTime: timeData.datetime,
      dayOfYear: timeData.day_of_year,
      dayOfWeek: timeData.day_of_week,
      weekNumber: timeData.week_number,
      timezone: addressData.time_zone,
      location: `${addressData.country_name}, ${addressData.country_code}`
    };
  }

  async getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

}