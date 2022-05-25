export default function Signup() {
    const registro = (e) => {
        e.preventDefault();
        const dataFormulario = new FormData(e.target)
        const usuario = dataFormulario.get('username')
        const password = dataFormulario.get('password')

        localStorage.setItem('username', usuario)
        localStorage.setItem('password', password)
    }
    return (
        <div>
            <p>Signup</p>
            <form name="registro" onSubmit={registro}>
                <label>Username</label><br></br><input type="text" autoComplete="username" name="username"></input><br></br>
                <label>Password</label><br></br><input type="password" autoComplete="new-password"  name="password"></input><br></br>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}