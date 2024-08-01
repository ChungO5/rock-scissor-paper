import React from "react";
import rock from "./assets/rock.svg";
import scissor from "./assets/scissor.svg";
import paper from "./assets/paper.svg";

const HAND_ICON = {
    rock: rock,
    scissor: scissor,
    paper: paper,
};

const HandIcon = ({ value, className }) => {
    const src = HAND_ICON[value];
    return <img className={className} src={src} alt={value} />;
};

export default HandIcon;
