import { useState } from "react";
import "./App.css";
import Button from "./Button";
import HandButton from "./HandButton";
import { compareHand, generateRandomHand } from "./utils";
import HandIcon from "./HandIcon";

const getResult = (me, other) => {
    const comparison = compareHand(me, other);
    if (comparison > 0) return "승리";
    if (comparison < 0) return "패배";
    return "무승부";
};

const App = () => {
    const [hand, setHand] = useState("rock");
    const [otherHand, setOtherHand] = useState("scissor");

    const handleClick = (nexthand) => {
        setHand(nexthand);
        setOtherHand(generateRandomHand());
    };

    const handleClearClick = () => {
        setHand("rock");
        setOtherHand("rock");
    };

    return (
        <div className="App">
            <Button onClick={handleClearClick}>처음부터</Button>
            <p>{getResult(hand, otherHand)}</p>
            <div>
                <HandIcon value={hand} />
                <HandIcon value={otherHand} />
            </div>
            <HandButton value="rock" onClick={handleClick} />
            <HandButton value="scissor" onClick={handleClick} />
            <HandButton value="paper" onClick={handleClick} />
        </div>
    );
};

export default App;
