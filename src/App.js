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

    const handleClick = (nextHand) => {
        const nextOtherHand = generateRandomHand();
        const nextHistoryItem = getResult(nextHand, nextOtherHand);
        setHand(nextHand);
        setOtherHand(nextOtherHand);
        setGameHistory([...gameHistory, nextHistoryItem]);
    };

    const handleClearClick = () => {
        setHand(INITIAL_VALUE);
        setOtherHand(INITIAL_VALUE);
        setGameHistory([]);
    };

    return (
        <div className="App">
            <Button onClick={handleClearClick}>처음부터</Button>
            <p>{getResult(hand, otherHand)}</p>
            <div>
                <HandIcon value={hand} />
                <HandIcon value={otherHand} />
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
