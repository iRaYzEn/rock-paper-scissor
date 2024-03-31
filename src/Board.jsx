export default function Board({ score }) {
    return (
        <div className="board">
            <div>
                <h2 className='board__title'>Rock <br /> Paper <br /> Scissors</h2>
            </div>
            <div className="board__box">
                <span className='box__score'>Score</span>
                <span className="box__num">{score}</span>
            </div>
        </div>
    )
}
