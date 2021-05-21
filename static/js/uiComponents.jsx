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
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function loginUser(evt) {
        evt.preventDefault()

        console.log(email)
        console.log(password)

        fetch('/login.json', {
            method: 'POST',
            body: JSON.stringify({'email': email, 'password': password}),
            headers: {'Content-type': 'application/json'}
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            props.setUserInfo(data);
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(evt) => {loginUser(evt)}}>
                <label>Email</label>
                <input type="text" name="email" id="email" onChange={ evt => {
                    setEmail(evt.target.value)
                }}/>
                <label>Password</label>
                <input type="password" name="password" id="password" onChange={ evt => {
                    setPassword(evt.target.value)
                }}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}


function UserProfile(props) {

    const {userInfo} = props
    
    return (
        <div className="col-3" >
            user info should show: 
            <h1>{userInfo.user_name}</h1>
            <h6>{userInfo.user_id}</h6>
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
        {complimentButtons}
        {/* do we need the line of code below? */}
        {clickedButtonId && <Details id={clickedButtonId} />}

            {melonDiv}
        </div>
    )

}