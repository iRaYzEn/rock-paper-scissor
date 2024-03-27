import rock from "./assets/images/icon-rock.svg";
import paper from "./assets/images/icon-paper.svg";
import scissor from "./assets/images/icon-scissors.svg";
export default function Buttons() {
    return (
        <div className="buttons">
            <button className='btn btn--paper'><img className="image__btn" src={paper} alt="paper image" /></button>
            <button className='btn btn--scissor'><img className="image__btn" src={scissor} alt="scissor image" /></button>
            <button className='btn btn--rock'><img className="image__btn" src={rock} alt="rock image" /></button>
        </div>
    )
}
