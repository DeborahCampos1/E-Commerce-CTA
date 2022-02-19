function LogIn(){


    return(
        <div className="login">
            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h3>Email</h3>
                    <input type="email" />
                    <h3> Password</h3>
                    <input type="password" />
                    <button type="submit" className="login-button">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default LogIn;