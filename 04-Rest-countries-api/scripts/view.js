document.getElementById("selectedRegion");

export default class View {
  constructor() {
    this.regionField = document.getElementById("selectedRegion");
    this.countriesContainer = document.getElementById("countriesContainer");
    this.selectedRegion = undefined;
  }

  setSelectedRegionTitle = (region) => {
    this.selectedRegion?.classList.remove("selected");
    this.selectedRegion = region;
    this.selectedRegion.classList.add("selected");
    this.regionField.innerText = region.id;
  };

  setCountryCards(countries) {
    this.countriesContainer.innerHTML = "";

    let content = "";
    countries.forEach((country) => {
      content += this.getCountryCardTemplate(country);
    });

    this.countriesContainer.innerHTML = content;
  }


  setDetails = (data) => {

    const  country  = data;
    
    const currencies = Object.values(country.currencies).map((c) => c.name)
    const languages = Object.values(country.languages)
    const borders = Object.values(country.borders).map((b) => {
      return `<img loading="lazy"${this.getImageSrc(b.slice(0,2))} title="${b}" class="border_flag">`
    });
 

    document.getElementById("detCountryFlag").innerHTML = `
    <img loading="lazy"${this.getImageSrc(country.cca2)}
    alt="${country.name}">
    `;
    document.getElementById("detCountryName").innerText = (country.name.common);
    document.getElementById("detCountryOficialName").innerText = (country.name.official);
    document.getElementById("detCountryPopulation").innerText = (this.getPopulation(country));
    document.getElementById("detCountryRegion").innerText = (country.region);
    document.getElementById("detCountrySubRegion").innerText = (country.subregion);
    document.getElementById("detCountryCapital").innerText = (country.capital);
    document.getElementById("detCountryDomain").innerText = (country.tld);
    document.getElementById("detCountryCurrencies").innerText = (currencies.join());
    document.getElementById("detCountryLanguages").innerText = (languages.join());
    
    document.getElementById("detCountryBorders").innerHTML = (borders.join(''));
  }

  getCountryCardTemplate = (country) => {
    return `
    <div class="country-card" id="${country.alpha2Code}">
            <img loading="lazy"
            ${this.getImageSrc(country.alpha2Code)}
            alt="${country.name}"
            class="country-card__image">
          <div class="country-card__body">
              <h3 class="country-card__title">${country.name}</h3>
              <p class="country-card__info">Population: 
              ${this.getPopulation(country)}</p>
              <p class="country-card__info">Region: ${country.region}</p>
              <p class="country-card__info">Capital: ${country.capital}</p>
          </div>
        </div>
    `;
  }

  getImageSrc(code){
    return `
    src="https://flagcdn.com/w640/${code.toLowerCase()}.png"
    srcset="https://flagcdn.com/w1280/${code.toLowerCase()}.png 2x"
    `
  }

  getPopulation(country){
    return new Intl.NumberFormat( "de-DE" ).format(country.population);
  }
}