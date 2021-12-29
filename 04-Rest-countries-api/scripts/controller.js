import Service from "./service.js";
import View from "./view.js";

export default class Controller {
  constructor() {
    this.service = new Service();
    this.view = new View();
    this.regionValue = "all";
    this.filterValue = "";
  }

  init = () => {
    this.addListeners();
    this.firstLoadCards();
  };

  firstLoadCards = async () => {
    this.countries = await this.service.getAll();
    this.view.setCountryCards(this.countries);
  };

  addListeners = () => {
    document
      .getElementById("dropdownOptions")
      .addEventListener("click", this.handleRegionChange);

    document
      .getElementById("filteredRegion")
      .addEventListener("keyup", this.handleRegionFilter);

    document
      .getElementById("closeDetails")
      .addEventListener("click", this.handleCountryCloseDetails);

    document
      .getElementById("toggleColorMode")
      .addEventListener("click", this.handleColorMode);

    this.view.countriesContainer.addEventListener(
      "click",
      this.handleCountryDetails
    );
  };

  handleRegionChange = async (e) => {
    const { id } = e.target;
    if (!id) return;
    this.regionValue = id;
    this.view.setSelectedRegionTitle(e.target);
    this.handleFiltering();
  };

  handleRegionFilter = async (e) => {
    this.filterValue = e.target.value;

    this.handleFiltering();
  };

  handleFiltering = async () => {
    this.countries = [];

    if (this.regionValue === "all") {
      this.countries = await this.service.getAll();
    } else {
      this.countries = await this.service.getByContinent(this.regionValue);
    }

    if (this.filterValue.length !== 0) {
      this.countries = this.countries.filter((c) =>
        c.name.toLowerCase().includes(this.filterValue.toLowerCase())
      );
    }

    this.view.setCountryCards(this.countries);
  };

  handleCountryDetails = async (e) => {
    const id = e.target.closest(".country-card")?.id;
    if (!id) return;

    const data = await this.service.getByCode(id);
    console.log(data);

    document.getElementById("detailsContainer").classList.remove("hidden");
    this.view.setDetails(data);
  };

  handleCountryCloseDetails = async (e) => {
    document.getElementById("detailsContainer").classList.add("hidden");
  };

  handleColorMode = async (e) => {
    document.body.classList.toggle("light-mode");
  };
}