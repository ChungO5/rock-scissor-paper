import React from "react";
import resetIcon from "./assets/ic-reset.svg";

const Button = ({ onClick }) => {
    return (
        <img
            className="App-reset"
            src={resetIcon}
            alt="초기화"
            onClick={onClick}
        />
    );
};

export default Button;
