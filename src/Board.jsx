export default function Board() {
    return (
        <div className="board">
            <div>
                <h1 className='board__title'>Rock <br /> Paper <br /> Scissors</h1>
            </div>
            <div className="board__box">
                <span className='box__score'>Score</span>
                <span className="box__num">0</span>
            </div>
        </div>
    )
}
