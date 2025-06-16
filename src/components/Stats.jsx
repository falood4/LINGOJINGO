import ProgressBar from "./ProgressBar"

function Stats() {

    const name = "John"
    const day = 5
    const words = 36
    const acc = 67

    return (

        <div className="card stats-card">
            <div className="welcome-text">
                <h6>Welcome</h6>
                <h4 className="text-large">
                    {name}
                </h4>
            </div>

            <div className="stats-column">
                <div>
                    <p>Your streak🔥</p>
                    <h3>{day - 1}</h3>
                </div>
                <div>
                    <p>Word seen</p>
                    <h3>{words}</h3>
                </div>
                <div>
                    <p>Accuracy</p>
                    <h3>{acc}%</h3>
                </div>
            </div>
            <ProgressBar />
        </div>
    )
}

export default Stats