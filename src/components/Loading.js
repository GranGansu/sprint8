import './Loading.css'
import { Link } from 'react-router-dom'
export default function Loading({ clase, existe }) {
    if (!existe) {
        return (
            <div className={clase}>
                <p>Esta página no existe :(</p>
                <Link to='/'>Volver a Home</Link>
            </div>
        )
    }
    return (
        <div className={clase}>
            <img src='../img/loading.gif' alt="gif cargando" className="loading" />
        </div>
    )
}