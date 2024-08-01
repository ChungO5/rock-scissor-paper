import { useState } from "react";
import "./App.css";
import Button from "./Button";
import HandButton from "./HandButton";
import { compareHand, generateRandomHand } from "./utils";
import HandIcon from "./HandIcon";

const INITIAL_VALUE = "rock";

const getResult = (me, other) => {
    const comparison = compareHand(me, other);
    if (comparison > 0) return "승리";
    if (comparison < 0) return "패배";
    return "무승부";
};

const App = () => {
    const [hand, setHand] = useState(INITIAL_VALUE);
    const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
    const [gameHistory, setGameHistory] = useState([]);
    const [score, setScore] = useState(0);
    const [otherScore, setOtherScore] = useState(0);
    const [bet, setBet] = useState(1);

    const handleClick = (nextHand) => {
        const nextOtherHand = generateRandomHand();
        const nextHistoryItem = getResult(nextHand, nextOtherHand);

        const comparison = compareHand(nextHand, nextOtherHand);
        setHand(nextHand);
        setOtherHand(nextOtherHand);
        setGameHistory([...gameHistory, nextHistoryItem]);

        if (comparison > 0) setScore(score + bet);
        if (comparison < 0) setOtherScore(otherScore + bet);
    };

    const handleClearClick = () => {
        setHand(INITIAL_VALUE);
        setOtherHand(INITIAL_VALUE);
        setGameHistory([]);
        setScore(0);
        setOtherScore(0);
        setBet(1);
    };

    const handleBetChange = (e) => {
        const score = Number(e.target.value);
        if (score > 9) {
            setBet(9);
        } else if (score < 1) {
            setBet(1);
        } else {
            setBet(score);
        }
    };

    return (
        <div className="App">
            <Button onClick={handleClearClick}>처음부터</Button>
            <div>
                {score} : {otherScore}
            </div>
            <div>
                <HandIcon value={hand} />
                VS
                <HandIcon value={otherHand} />
            </div>
            <div>
                <input
                    type="number"
                    value={bet}
                    min={1}
                    max={9}
                    onChange={handleBetChange}
                ></input>
            </div>
            <p>승부 기록: {gameHistory.join(", ")}</p>
            <div>
                <HandButton value="rock" onClick={handleClick} />
                <HandButton value="scissor" onClick={handleClick} />
                <HandButton value="paper" onClick={handleClick} />
            </div>
        </div>
    );
};

export default App;
