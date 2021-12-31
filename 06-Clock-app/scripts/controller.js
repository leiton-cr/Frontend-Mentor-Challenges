import View from "./view.js";
import Service from "./service.js";

export default class Controller {
  constructor() {
    this.ipgeolocationKey = "bb1ccb54b1ef44008185f7435d38529c";
    this.view = new View();
    this.service = new Service();

    this.addListeners();
    this.initTimer();
    this.refreshQuoteHandler();
  }

  addListeners() {
    document
      .getElementById("quoteUpdate")
      .addEventListener("click", this.refreshQuoteHandler);
  }

  refreshQuoteHandler = async () => {
    const quote = await this.service.getQuote();
    this.view.setQuote(quote);
  };

  initTimer = async () => {
    const actualInfo = await this.service.getTimeData();

    this.view.setData(actualInfo);
    this.view.updateHour();

    setInterval(() => {
      this.view.updateHour();
    }, 1000);
  };
}

new Controller();