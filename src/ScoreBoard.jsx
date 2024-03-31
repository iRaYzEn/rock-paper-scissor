import Button from "./Button";
import rock from "./assets/images/icon-rock.svg";
import paper from "./assets/images/icon-paper.svg";
import scissor from "./assets/images/icon-scissors.svg";
import { useState } from "react";

export default function ScoreBoard({ person, playAgain, setScore }) {


    const ROCK = 3;
    const SCISSOR = 2;
    const PAPER = 1;

    const computer = Math.round(Math.random() * 2) + 1

    let personPoint;

    if (person == "rock") {
        personPoint = ROCK;
    } else if (person == "paper") {
        personPoint = PAPER;
    } else if (person == "scissor") {
        personPoint = SCISSOR
    }


    let condition = personPoint - computer;
    let result;
    let edgeCase = 2;

    if (condition == 0) {
        result = "draw";
    } else if (condition == 1) {
        result = "win"
    } else if (condition == edgeCase) {
        result = "win"
    } else if (condition == -edgeCase) {
        result = "lost"
    } else if (condition == -1) {
        result = "lost"
    }

    return (
        <div className="scoreboard">
        <button>{person}</button>
            <div className="scoreboard__result">
                <h1 className="result__result">You {result}</h1>
                <button onClick={playAgain} className="btn btn__result">Play again</button>
            </div>
        <button>{computer}</button>
        </div>
    )
}
