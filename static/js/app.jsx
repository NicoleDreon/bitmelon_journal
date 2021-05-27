function App() {
    const [userInfo, setUserInfo] = React.useState([]);
    const [showComponent, setShowComponent] = React.useState(false)


    return (
        <ReactRouterDOM.BrowserRouter> 
            <ReactRouterDOM.Switch>
                <ReactRouterDOM.Route exact path={["/","/login","/signup", "/allmelons", "/userprofile"]}>
                    <nav id="logout">
                        <ReactRouterDOM.Link to="/"></ReactRouterDOM.Link>
                        <ReactRouterDOM.Link to="/login">Login   </ReactRouterDOM.Link>|
                        <ReactRouterDOM.Link to="/allmelons">   See All Our Melons!</ReactRouterDOM.Link>
                    </nav>
                </ReactRouterDOM.Route>
            </ReactRouterDOM.Switch>

            <ReactRouterDOM.Switch>
                <ReactRouterDOM.Route exact path="/">
                    <Homepage />
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/login">
                    { showComponent ? <UserProfile userInfo={userInfo} setUserInfo={setUserInfo}/> : <Login userInfo={userInfo} setUserInfo={setUserInfo} showComponent={showComponent} setShowComponent={setShowComponent}/> }
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/allmelons">
                    <AllMelons />
                </ReactRouterDOM.Route>
            </ReactRouterDOM.Switch>
        </ReactRouterDOM.BrowserRouter>
    );
}




ReactDOM.render(<App />, document.querySelector("#root"));