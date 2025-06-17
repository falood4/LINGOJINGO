function History() {
    return (
        <div className="card-history-card">
            <h3>History</h3>
            <h6 style={{ opacity: 0.5 }}>You have no attempts. Press START to begin</h6>
            <div className="history-list">
                <div className="card-button-secondary">
                    <div>
                        <p>
                            Started
                        </p>
                        <h3>
                            14.02.25
                        </h3>
                    </div>
                    <div>
                        <p>
                            Streak
                        </p>
                        <h3>
                            5
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History