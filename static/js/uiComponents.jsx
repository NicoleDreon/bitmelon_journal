function Homepage(props) {
  
// conditional for navbar to display, return should change according to state
    return (
        <div>
            {/* <div>
                <header>
                    logged out
                </header> 
            </div>
            <div id="login">
                <header>
                    logged in - logic to get this one
                </header> 
            </div> */}
            {/* <h1>{userInfo['user_name']}</h1> */}
            <h3>testing login </h3>
        </div>
    );
}

// ReactDOM.render(
//     (
//       <Homepage/>
//     ),
//     document.querySelector('#login')
//   );

function Login(props) {
    const [userInfo, setUserInfo] = React.useState([]);

    React.useEffect(()=>{
        fetch('/login')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setUserInfo(data);
        })
    }, [])

    function loginUser(evt){
        // evt.preventDefault();
        console.log(evt);
        const login = document.querySelector('button')

        // $.post('/login', login, (response)=>{
        //     console.log(response);
        // })
        console.log('done');
    }

    return (
        <div>
            <h1>Login</h1>
            <form action="/login" method="post">
                <label>Email</label>
                <input type="text" name="email" id="email" />
                <label>Password</label>
                <input type="password" name="password" id="password" />
                <button onClick={loginUser}>Login</button>
            </form>
        </div>
    );
}


function UserProfile(props) {
    return (
        <div>
            <h5>user is logged in</h5>
            <h5>this is the user profile componen</h5>
        </div>
    )
}

function MelonJournal(props) {
    return (
        <div>
            <header>Journal</header>
            <form action="/melonJournal">
                <label>Title</label>
                <input type="text" name="title" id="title"/>
                <label>Rating</label>
                <input type="text" name="rating" id="rating" />
                <label>Favorite</label>
                <input type="text" />
                <label>Flavor</label>
                    <ul>
                        <h6>Sour</h6>
                        <label name="sour">1</label>
                        <input type="radio" name="sour" id="1"/>
                        <label name="sour">2</label>
                        <input type="radio" name="sour" id="2"/>
                        <label name="sour">3</label>
                        <input type="radio" name="sour" id="3"/>
                        <label name="sour">4</label>
                        <input type="radio" name="sour" id="4"/>
                        <label name="sour">5</label>
                        <input type="radio" name="sour" id="5"/>
                    </ul>
                    <ul>
                        <h6>Sweet</h6>
                        <label name="sweet">1</label>
                        <input type="radio" name="sweet" id="1"/>
                        <label name="sweet">2</label>
                        <input type="radio" name="sweet" id="2"/>
                        <label name="sweet">3</label>
                        <input type="radio" name="sweet" id="3"/>
                        <label name="sweet">4</label>
                        <input type="radio" name="sweet" id="4"/>
                        <label name="sweet">5</label>
                        <input type="radio" name="sweet" id="5"/>
                    </ul>
                    <ul>
                        <h6>Bitter</h6>
                        <label name="bitter">1</label>
                        <input type="radio" name="bitter" id="1"/>
                        <label name="bitter">2</label>
                        <input type="radio" name="bitter" id="2"/>
                        <label name="bitter">3</label>
                        <input type="radio" name="bitter" id="3"/>
                        <label name="bitter">4</label>
                        <input type="radio" name="bitter" id="4"/>
                        <label name="bitter">5</label>
                        <input type="radio" name="bitter" id="5"/>
                    </ul>
                    <ul>
                        <h6>Salty</h6>
                        <label name="salty">1</label>
                        <input type="radio" name="salty" id="1"/>
                        <label name="salty">2</label>
                        <input type="radio" name="salty" id="2"/>
                        <label name="salty">3</label>
                        <input type="radio" name="salty" id="3"/>
                        <label name="salty">4</label>
                        <input type="radio" name="salty" id="4"/>
                        <label name="salty">5</label>
                        <input type="radio" name="salty" id="5"/>
                    </ul>
                    <ul>
                        <h6>Savory</h6>
                        <label name="savory">1</label>
                        <input type="radio" name="savory" id="1"/>
                        <label name="savory">2</label>
                        <input type="radio" name="savory" id="2"/>
                        <label name="savory">3</label>
                        <input type="radio" name="savory" id="3"/>
                        <label name="savory">4</label>
                        <input type="radio" name="savory" id="4"/>
                        <label name="savory">5</label>
                        <input type="radio" name="savory" id="5"/>
                    </ul>
                <label>Image</label>
                <button>Button</button>
            </form>
        </div>
    )
}



function MelonMemory(props) {
    return (
        <div>
            <header>Memory</header>
            <form action="/melonMemory">
                <label>Location</label>
                <input type="text" name="location" id="location"/>
                <label>Memory</label>
                <input type="text" name="melon-memory" id="melon-memory" />
                <label>Date</label>
                <input type="date" />
                <label>Friend</label>
                <input type="text" />
                <label>Image</label>
                <button>Button</button>
            </form>
        </div>
    )
}

function MelonWanted(props){
    return(
        <div>
            <h5>melon wanted</h5>
        </div>
    )
}


