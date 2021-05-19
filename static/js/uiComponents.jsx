function Homepage(props) {
    return (
        <div>
            <h1>test</h1>
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

