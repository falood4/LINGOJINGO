function Layout(props) {
    console.log(props)
    const { children } = props

    return (
        <>
            <header>
                <h1 className="text-gradient">LINGOJINGO</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <small>Created by</small>
                <a href="https://github.com/falood4">
                    <img src="https://avatars.githubusercontent.com/u/117526109?v=4"></img>
                    <i className="fa-brands fa-github"> @ falood4</i>
                </a>
            
            </footer>
        </>
    )
}

export default Layout