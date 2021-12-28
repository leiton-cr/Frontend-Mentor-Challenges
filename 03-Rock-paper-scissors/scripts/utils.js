export const OPTIONS = ["rock", "paper", "scissors", "lizzard", "spock"];

export const WEAKNESSES = {
  rock: ["paper", "spock"],
  paper: ["scissors", "lizzard"],
  scissors: ["rock", "spock"],
  lizzard: ["rock", "scissors"],
  spock: ["paper", "lizzard"],
};

export const RESULTS = {
    "lose": -1,
    "tie": 0,
    "win": 1
};