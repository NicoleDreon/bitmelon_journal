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



function Login(props) {
    const [userInfo, setUserInfo] = React.useState([]);

    React.useEffect(()=>{
        fetch('/login.json')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setUserInfo(data);
            
        })
    }, [])
    return (
        <div>
            <h1>Login</h1>
            <form action="/login.json" method="post">
                <label>Email</label>
                <input type="text" name="email" id="email" />
                <label>Password</label>
                <input type="password" name="password" id="password" />
                {/* <button onClick={loginUser}>Login</button> */}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}


function UserProfile(props) {
    return (
        <div className="col-3" >
            <h6>{props.name}</h6>
            {/* {key.user_name} */}
            <h6>{props.description}</h6>
            <img src={props.img} width="100%" height="20%"  />
        </div>
    )
}

function MelonJournal(props) {
    return (
        <div>
            <header>Journal</header>
            <form action="/melonMemory">
                <label>Title</label>
                <input type="text" name="title" id="title"/>
                <label>Rating</label>
                <input type="text" name="rating" id="rating" />
                <label>Favorite</label>
                <input type="text" />
                <label>Flavor</label>
                {/* <input type="text" /> */}
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


function Melon(props) {
    return (
        <div className="col-3" >
            <h6>{props.name}</h6>
            <h6>{props.description}</h6>
            <img src={props.img} width="100%" height="20%"  />
        </div>
    )
}

function AllMelons(props){

    const [allMelons, setAllMelons] = React.useState([]);
    //const [clickedButtonId, setClickedButtonId] = React.useState('');

    React.useEffect(()=>{
        fetch('/allmelons.json')
        .then((response) => response.json())
        .then((data) => {
            setAllMelons(data);
            
        })
    }, [])

    const melonDiv = [];
    for (const melon in allMelons) {
        // updateDetails is the callback function we'll use when the button is clicked
        melonDiv.push(
            // Give each button a unique key so that React can identify it.
            
            <Melon melon={melon} name={allMelons[melon]['name']} description= {allMelons[melon]['description']} img = {allMelons[melon]['url']} />
        )
    }

    return(
        <div>
            {melonDiv}
        </div>
    )

}