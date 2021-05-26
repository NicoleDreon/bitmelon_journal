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
        <div class="col">
            <h1>Login</h1>
            <form onSubmit={(evt) => {loginUser(evt)}}>
                <div class="form-group w-50">
                    <div class="col-xs-2">
                        <label>Email</label>
                        <input class="form-control" type="text" name="email" id="email" onChange={ evt => {
                            setEmail(evt.target.value)
                        }}/>
                    </div>
                    <div class="col-xs-2">
                        <label>Password</label>
                        <input class="form-control" type="password" name="password" id="password" onChange={ evt => {
                            setPassword(evt.target.value)
                        }}/>
                    </div>
                    <button type="submit" class="btn btn-primary active">Login</button>
                </div>
            </form>
        </div>
    );
}