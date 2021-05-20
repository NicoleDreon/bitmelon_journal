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

ReactDOM.render(
    (
      <Homepage/>
    ),
    document.querySelector('#login')
  );

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

