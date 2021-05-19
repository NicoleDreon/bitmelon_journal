function App() {
    //add useState and useEffect later


    return (
        <ReactRouterDOM.BrowserRouter>
            <nav>
                <ReactRouterDOM.Link to="/">Homepage | </ReactRouterDOM.Link>
                <ReactRouterDOM.Link to="/login">Login | </ReactRouterDOM.Link>
                <ReactRouterDOM.Link to="/signup">Signup | </ReactRouterDOM.Link>
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