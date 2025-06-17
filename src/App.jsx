import Layout from "./components/layout/Layout"
import Welcome from "./components/layout/Welcome"
import Dashboard from "./components/layout/Dashboard"
import Challenge from "./components/layout/Challenge"
import { use, useState } from "react"

function App() {
  const [selectedPage, setselectedPage] = useState(0)
  const [name, setName] = useState('')

  function handleChangePage(pageIndex) {
    setselectedPage(pageIndex)
  }

  function handleCreateAccount() {
    if (!name) { return }
    localStorage.setItem('username', name)
  }

  const pages = {
    0: <Welcome username='hello' name={name} setName={setName} />,
    1: <Dashboard />,
    2: <Challenge />
  }
  return (
    <Layout>
      {pages[selectedPage]}
    </Layout>
  )
}

export default App
