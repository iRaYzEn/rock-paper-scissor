import { useState } from "react";
import Board from './Board'
import Buttons from "./Buttons"
import Rules from './Rules'
import ScoreBoard from "./ScoreBoard";

import "./App.css"

function App() {
    const [person, setPerson] = useState("");
    const [score, setScore] = useState(0)

    function playAgain() {
        setPerson("");
    }

    return (
        <div className="wrapper">
            <Board score={score} />
            {
                person.length == 0 ?
                    <Buttons setPerson={setPerson} />
                    : <ScoreBoard setScore={setScore} playAgain={playAgain} person={person} />
            }
            <Rules />
        </div>
    )
}

export default App
