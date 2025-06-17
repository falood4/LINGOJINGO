function Welcome(props) {
    console.log('PROPS', props)
    const { name, setName } = props
    return (
        <section id="welcome">
            <h3 className="text-large special-shadow">
                EVERY DAY</h3>
            <h3 className="text-large special-shadow">A NEW WORD</h3>
            <p></p>
            <h6>
                Diverisfy and enhance your vocabulary
                Start TODAY 🎖️🎖️🎖️
            </h6>

            <div>
                <input value={name} onChange={(evt) => { setName(evt.target.value) }} name="inputname" type="text" placeholder="Enter your name">
                </input>
            </div>
            <button>
                <h6>START...</h6>
            </button>
        </section>
    )
}

export default Welcome