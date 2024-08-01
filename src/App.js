import { useState } from "react";
import Button from "./Button";
import HandButton from "./HandButton";
import { compareHand, generateRandomHand } from "./utils";
import HandIcon from "./HandIcon";
import "./App.css";

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
            <h1 class="App-heading">가위바위보</h1>
            <Button onClick={handleClearClick} class="App-reset" />
            <div className="App-scores">
                <div class="Score">
                    <div class="Score-num">{score}</div>
                    <div class="Score-name">나</div>
                </div>
                <div class="App-versus">:</div>
                <div class="Score">
                    <div class="Score-num">{otherScore}</div>
                    <div class="Score-name">상대</div>
                </div>
            </div>
            <div class="Box App-box">
                <div class="Box-inner">
                    <div class="App-hands">
                        <div
                            class={score > otherScore ? "Hand winner" : "Hand"}
                        >
                            <HandIcon value={hand} className={"Hand-icon"} />
                        </div>
                        VS
                        <div
                            class={score < otherScore ? "Hand winner" : "Hand"}
                        >
                            <HandIcon value={otherHand} className="Hand-icon" />
                        </div>
                    </div>
                    <div class="App-bet">
                        <span>배점</span>
                        <input
                            type="number"
                            value={bet}
                            min={1}
                            max={9}
                            onChange={handleBetChange}
                        />
                        <span>배</span>
                    </div>
                    <div class="App-history">
                        <h2>승부기록</h2>
                        <p>{gameHistory.join(", ")}</p>
                    </div>
                </div>
            </div>
            <div>
                <HandButton value="rock" onClick={handleClick} />
                <HandButton value="scissor" onClick={handleClick} />
                <HandButton value="paper" onClick={handleClick} />
            </div>
        </div>
    );
};

export default App;
