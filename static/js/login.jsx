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
            props.setShowComponent(true);
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
                <button id="login_btn" type="submit">Login</button>
            </form>
        </div>
    );
}