export default class View {
  constructor() {
    this.quoteField = document.getElementById("quote");
    this.quoteAuthorField = document.getElementById("quoteAuthor");

    this.greetingField = document.getElementById("greeting");
    this.greetingIcon = document.getElementById("greetingIcon");

    this.mainContainer = document.getElementById("mainContainer");

    this.locationField = document.getElementById("location");
    this.timezoneField = document.getElementById("timezone");

    this.dayField = document.getElementById("day");
    this.dayWeekField = document.getElementById("dayWeek");
    this.weekField = document.getElementById("week");

    this.hourField = document.getElementById("hour");

  }

  setQuote(quote) {
    this.quoteField.innerText = quote.content;
    this.quoteAuthorField.innerText = quote.author;
  }

  setData(info) {
    const date = new Date();

    this.greetingField.innerText =
      date.getHours() < 12
        ? "morning"
        : date.getHours() < 17
        ? "afternoon"
        : "evening";

    this.greetingIcon.className = "";
    this.greetingIcon.classList.add(
      "upper-container__greeting",
      date.getHours() < 17 ? "sun" : "moon"
    );

    this.mainContainer.className = "";
    this.mainContainer.classList.add("main-container");
    this.mainContainer.classList.add(
      date.getHours() < 17 ? "main-container__day" : "main-container__night"
    );

    this.locationField.innerText = info.location;
    this.timezoneField.innerText = info.timezone;

    this.dayField.innerText = info.dayOfYear;
    this.dayWeekField.innerText = info.dayOfWeek;
    this.weekField.innerText = info.weekNumber;
  }

  updateHour(){
    const date = new Date();
    this.hourField.innerHTML = `<p>
                                ${date.getHours()< 9 ? '0' + date.getHours() : date.getHours()}:
                                ${date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes()}
                                <span> ${date.getHours() < 12? 'am' :date.getHours() > 12 ? 'pm' : 'md'}</span>
                                </p>`;
  }
}