export default function Button({ setPerson, image, classname }) {
    return (
            <button onClick={() => setPerson(`${classname}`)}  className={`btn btn--game btn--${classname}`} ><img className="image__btn" src={image} alt="game image" /></button>
    )
}
