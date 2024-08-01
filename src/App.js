import "./App.css";
import HandButton from "./HandButton";

const App = () => {
    const handleClick = (value) => console.log(value);
    return (
        <div className="App">
            <HandButton value="rock" onClick={handleClick} />
            <HandButton value="scissor" onClick={handleClick} />
            <HandButton value="paper" onClick={handleClick} />
        </div>
    );
};

export default App;
