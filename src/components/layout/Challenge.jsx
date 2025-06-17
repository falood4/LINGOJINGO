import ProgressBar from "../ProgressBar"

function Challenge() {
    const word = "copacetic"
    const definition = 'in excellent order'

    return (
        <section id="challenge">
            <h1>{word}</h1>
            <p>{definition}</p>
            <div className="helper">
                <div>
                    { }
                    {[...Array(definition.length).keys()].map((element, elementIdx) => {
                        return (
                            <div key={elementIdx}>
                                a
                            </div>
                        )
                    })}
                </div>
                <input type="text" placeholder="Enter definition" />
                <div className="challenge-btns">
                    <button className="card-button-secondary">
                        <h6>
                            Quit
                        </h6>
                    </button>
                    <button className="card-button-primary">
                        <h6>I forgot</h6>
                    </button>
                </div>
            </div>
            <ProgressBar />
        </section>)
}

export default Challenge