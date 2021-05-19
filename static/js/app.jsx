function App() {
    //add useState and useEffect later


    return (
        <ReactRouterDOM.BrowserRouter> 
            {/* maybe add switch */}
            <nav id="logout">
                <ReactRouterDOM.Link to="/">Homepage | </ReactRouterDOM.Link>
                <ReactRouterDOM.Link to="/login">Login | </ReactRouterDOM.Link>
                <ReactRouterDOM.Link to="/signup">Signup | </ReactRouterDOM.Link>
                <hr></hr>
            </nav>
            <nav id="login">
                {/* the two below need to only show when logged in - store in state
                check state when renders component done in this file */}
                <ReactRouterDOM.Link to="/favorites">Favorites | </ReactRouterDOM.Link>
                <ReactRouterDOM.Link to="/logout">Logout</ReactRouterDOM.Link>
                <hr></hr>
            </nav>
            <ReactRouterDOM.Switch>

                <ReactRouterDOM.Route exact path="/">
                    <Homepage />
                    
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/login">
                    <Login />
                </ReactRouterDOM.Route>
                
            </ReactRouterDOM.Switch>
        </ReactRouterDOM.BrowserRouter>

    );
}




ReactDOM.render(<App />, document.querySelector("#root"));