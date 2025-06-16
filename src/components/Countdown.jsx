function Countdown() {
    return (
        <div className="card countdown-card">
            <h1 className="item-header">
                Day{1}
            </h1>
            <div className="today-container">
                <div>
                    <p>TIME REMAINING</p>
                    <h3>13H 45M 22S</h3>
                </div>
                <div>
                    <p>WORDS FOR TODAY</p>
                    <h3>16</h3>
                </div>
            </div>
        </div>
    )
}

export default Countdown