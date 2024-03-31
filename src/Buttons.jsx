import rock from "./assets/images/icon-rock.svg";
import paper from "./assets/images/icon-paper.svg";
import scissor from "./assets/images/icon-scissors.svg";
import Button from "./Button";

export default function Buttons( {setPerson} ) {
    return (
        <div className="buttons">
            <Button classname="paper" setPerson={setPerson} image={paper}/>
            <Button classname="scissor" setPerson={setPerson} image={scissor}/>
            <Button classname="rock" setPerson={setPerson} image={rock}/>
        </div >
    )
}
