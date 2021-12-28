import { OPTIONS, WEAKNESSES, RESULTS } from "./utils.js";

export default class GameEngine {
  constructor() {
    this.score = 0;

    this.score_field = document.getElementById("score_field");
    this.player_selection = document.getElementById("player_selection");

    this.player_token = document.getElementById("player_token");
    this.house_token = document.getElementById("house_token");

    this.game_field_1 = document.getElementById("step_1");
    this.game_field_2 = document.getElementById("step_2");

    this.result_modal = document.getElementById("result_modal");
    this.result_title = document.getElementById("result_title");
    this.result_btn = document.getElementById("result_btn");
  }

  init = () => {
    this.addListeners();
  };

  addListeners = () => {
    this.player_selection.addEventListener("click", (e) => {
      const { id } = e.target;
      if (!OPTIONS.includes(id)) return;
      this.mainLoop(id);
    });

    this.result_btn.addEventListener("click", () => {
      setTimeout(() => {
        this.reset();
      }, 500);
    });
  };

  mainLoop = async (player_selection) => {
    this.setPlay(player_token, player_selection);

    const house_random = Math.floor(Math.random() * 5);
    const house_selection = OPTIONS[house_random];

    this.changeStep();

    for (let i = 0; i < Math.floor(Math.random() * 4) + 5; i++) {
      await this.setIntervaledPlay(i);
    }

    this.result_modal.checked = false;

    this.setPlay(house_token, house_selection);

    if (player_selection === house_selection) {
      return this.setScore("tie");
    }

    if (WEAKNESSES[player_selection].includes(house_selection)) {
      return this.setScore("lose");
    }

    return this.setScore("win");
  };

  setIntervaledPlay = (i) => {
    return new Promise((res) => {
      setTimeout(() => {
        this.setPlay(house_token, OPTIONS[i % 5]);

        res(true);
      }, 125);
    });
  };

  changeStep = () => {
    this.game_field_1.classList.add("hidden");
    this.game_field_2.classList.remove("hidden");
  };

  setScore = (state) => {
    this.score += RESULTS[state];
    this.score_field.innerText = this.score;
    this.writeResult(state);
  };

  writeResult = (state) => {
    this.result_btn.innerText = "Play Again";
    this.result_title.innerText = `You ${state}`;
  };

  setPlay = (token, selection) => {
    token.className = "";
    token.classList.add("token", selection);
  };

  reset = () => {
    this.game_field_1.classList.remove("hidden");
    this.game_field_2.classList.add("hidden");

    setTimeout(() => {
      this.house_token.className = "token";
      this.player_token.className = "token";

      this.result_btn.innerText = "Try Again";
      this.result_title.innerText = "Hacker?";
    }, 150);
  };
}