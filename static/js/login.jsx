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
        <div id="homepage-container" style={{ "height":"700px", "borderRadius": "1%","backgroundSize":"cover",
                backgroundImage: `url("https://isntthiscute.files.wordpress.com/2017/10/tumblr_oss4mqsbrd1ts598co1_1280.gif?w=2000&h=1000")`,  
              }}>
                <div class="col">
            
            <form onSubmit={(evt) => {loginUser(evt)}}>
                <div id="login-container" class="form-group w-50">
                    <h1>Login</h1>
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
                    <button id="loginSubmit" type="submit" class="btn btn-primary active">Login</button>
                </div>
            </form>
        </div>
        </div>
        
    );
} 