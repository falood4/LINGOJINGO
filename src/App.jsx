import Layout from "./components/layout/Layout"
import Welcome from "./components/layout/Welcome"
import Dashboard from "./components/layout/Dashboard"
import Challenge from "./components/layout/Challenge"

const selectedpage = 2

const pages = {
  0: <Welcome />,
  1: <Dashboard />,
  2: <Challenge />
}

function App() {
  return (
    <Layout>
      {pages[selectedpage]}
    </Layout>
  )
}

export default App
