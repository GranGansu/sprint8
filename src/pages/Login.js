export default function Login() {
    const login = (e) => {
        e.preventDefault();
        const dataFormulario = new FormData(e.target);
        const usuario = dataFormulario.get('username');
        const password = dataFormulario.get('password');
        if (localStorage.getItem('password') === password && localStorage.getItem('username') === usuario) {
            console.log('Login correcto')
        } else {
            console.log('Login Fallido')
        }
    }
    return (
        <div><p>Login</p>
            <form name="login" onSubmit={login}>
                <label>Username</label><br></br><input type="text" autoComplete="password" name="username"></input><br></br>
                <label>Password</label><br></br><input type="password" autoComplete="current-password" name="password"></input><br></br>
                <button type="submit">Loggearse</button>
            </form>
        </div>
    )
}