import React from "react";
import HandIcon from "./HandIcon";

const HandButton = ({ value, onClick }) => {
    const handleClick = () => {
        onClick(value);
    };
    return (
        <button onClick={handleClick}>
            <HandIcon value={value} />
        </button>
    );
};

export default HandButton;
