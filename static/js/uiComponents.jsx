function Homepage(props) {
    const [userInfo, setUserInfo] = React.useState([]);

    React.useEffect(()=>{
        fetch('/login')
        .then((response) => response.json())
        .then((data) => {
            console.log(type(data));
            setUserInfo(data);
        })
    }, [])

    return (
        <div>
            <h1>{userInfo}</h1>
        </div>
    );
}

function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <form action="/login" method="post">
                <label>Email</label>
                <input type="text" name="email" id="email" />
                <label>Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

