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
            <form>
                <label>Email</label>
                <input type="text" name="email" id="email" />
                <label>Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

// function Navbar(props) {
//     const { logo, brand, children, className } = props;
  
//     const navLinks = children.map((el, i) => {
//       return (
//         <div key={i} className="nav-item">
//           {el}
//         </div>
//       );
//     });
  
//     return (
//       <nav className={`navbar ${className || ""}`}>
//         <ReactRouterDOM.Link
//           to="/"
//           className="havbar-brand d-flex justify-content-center">
//           <img src={logo} height="30" />
//           <span>{brand}</span>
//         </ReactRouterDOM.Link>
  
//         <section className="d-flex justify-content-center">{navLinks}</section>
//       </nav>
//     );
//   }