import Stats from '../Stats'
import Countdown from '../Countdown'
import History from '../History'
import ProgressBar from '../ProgressBar'

function Dashboard() {
    return (
        <section>
            <Stats />
            <Countdown />
            <History />
        </section>)
}

export default Dashboard