import React from "react";
import HandIcon from "./HandIcon";
import purple from "./assets/purple.svg";

const HandButtonStyle = {
    width: "166px",
    height: "166px",
    border: "none",
    outline: "none",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "transparent",
    backgroundImage: `url('${purple}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
};

const HandButton = ({ value, onClick }) => {
    const handleClick = () => {
        onClick(value);
    };
    return (
        <button style={HandButtonStyle} onClick={handleClick}>
            <HandIcon value={value} />
        </button>
    );
};

export default HandButton;
