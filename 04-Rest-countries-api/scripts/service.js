export default class Service {
  constructor() {}

  async getAll() {
    const data = await this.getData(
      "https://restcountries.com/v2/all?fields=name,population,region,capital,alpha2Code"
    );
    return data;
  }

  async getByContinent(continent) {
    const data = await this.getData(
      `https://restcountries.com/v2/region/${continent}?fields=name,population,region,capital,alpha2Code`
    );
    return data;
  }
  
  async getByCode(code) {
    const country = await this.getData(
      `https://restcountries.com/v3.1/alpha/${code}?fields=name,population,region,subregion,capital,nativeName,tld,currencies,languages,borders,cca2`
    );
    return country;
  }

  async getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}