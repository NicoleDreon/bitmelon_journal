function App() {
    //add useState and useEffect later


    return (
        <ReactRouterDOM.BrowserRouter>
            {/* <Navbar logo="" brand="BitMelon">
                <ReactRouterDOM.NavLink
                    to="/login"
                    activeClassName="navlink-active"
                    className="nav-link">
                    Login
                </ReactRouterDOM.NavLink>
            </Navbar> */}

            <ReactRouterDOM.Route exact path="/">
                <Homepage />
                <Login />
            </ReactRouterDOM.Route>
            {/* <ReactRouterDOM.Route exact path="/login">
                <Login />
            </ReactRouterDOM.Route> */}
        </ReactRouterDOM.BrowserRouter>

    );
}




ReactDOM.render(<App />, document.querySelector("#root"));