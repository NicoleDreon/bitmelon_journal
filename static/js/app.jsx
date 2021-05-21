function App() {
    const [userInfo, setUserInfo] = React.useState([]);
//maybe add isLoggedIn to state?


    return (
        <ReactRouterDOM.BrowserRouter> 
            {/* maybe add switch */}
            <ReactRouterDOM.Switch>
                <ReactRouterDOM.Route exact path={["/","/login","/signup", "/allmelons", "/userprofile"]}>
                    <nav id="logout">
                        <ReactRouterDOM.Link to="/">Homepage | </ReactRouterDOM.Link>
                        <ReactRouterDOM.Link to="/login">Login | </ReactRouterDOM.Link>
                        <ReactRouterDOM.Link to="/signup">Signup | </ReactRouterDOM.Link>
                        <ReactRouterDOM.Link to="/allmelons">See All Our Melons! | </ReactRouterDOM.Link>
                        <ReactRouterDOM.Link to="/userprofile">User Profile | </ReactRouterDOM.Link>
                        <hr></hr>
                    </nav>
                    <ReactRouterDOM.Route exact path="/userprofile">
                
                        <UserProfile userInfo={userInfo}/>
                        <MelonJournal />                      
                        <MelonMemory />
                        <MelonWanted />
                    </ReactRouterDOM.Route>
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route exact path={["/logout", "/userprofile", "/favorites"]}>
                    <nav id="login">
                        {/* the two below need to only show when logged in - store in state
                        check state when renders component done in this file */}
                        <ReactRouterDOM.Link to="/userprofile">User Profile | </ReactRouterDOM.Link>
                        
                        <ReactRouterDOM.Link to="/favorites">Favorites | </ReactRouterDOM.Link>
                        <ReactRouterDOM.Link to="/logout">Logout</ReactRouterDOM.Link>
                        <hr></hr>
                    </nav>
                <ReactRouterDOM.Route exact path="/userprofile">
                
                        <UserProfile userInfo={userInfo}/>
                        <MelonJournal />                      
                        <MelonMemory />
                        <MelonWanted />
                </ReactRouterDOM.Route>
               

                </ReactRouterDOM.Route>
            </ReactRouterDOM.Switch>

            <ReactRouterDOM.Switch>
                <ReactRouterDOM.Route exact path="/">
                    <Homepage />
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/login">
                    <Login userInfo={userInfo} setUserInfo={setUserInfo}/>
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route exact path="/allmelons">
                    <AllMelons />
                </ReactRouterDOM.Route>
                
            </ReactRouterDOM.Switch>
        </ReactRouterDOM.BrowserRouter>

    );
}




ReactDOM.render(<App />, document.querySelector("#root"));