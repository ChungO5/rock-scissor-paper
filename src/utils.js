const HANDS = ["rock", "scissor", "paper"];

const WINS = {
    rock: "scissor",
    scissor: "paper",
    paper: "rock",
};

export const compareHand = (a, b) => {
    if (WINS[a] === b) return 1;
    if (WINS[b] === a) return -1;
    return 0;
};

const random = (n) => {
    return Math.floor(Math.random() * n);
};

export const generateRandomHand = () => {
    const idx = random(HANDS.length);
    return HANDS[idx];
};
