import React from "react";
import rock from "./assets/rock.svg";
import scissor from "./assets/scissor.svg";
import paper from "./assets/paper.svg";

const HAND_ICON = {
    rock: rock,
    scissor: scissor,
    paper: paper,
};

const HandIcon = ({ value }) => {
    return <img src={HAND_ICON[value]} alt={value} />;
};

export default HandIcon;
