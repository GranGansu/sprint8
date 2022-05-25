import axios from 'axios'
import Loading from '../components/Loading'
import Pilotos from '../components/Pilotos'
import Films from '../components/Films'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './FichaNave.css'

export default function FichaNave() {
    const id = useParams().id;
    const [nav, setNav] = useState([])
    const [loading, setLoading] = useState('block');
    const [existe, setExiste] = useState(true);
    const [pilotos, setPilotos] = useState([]);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/' + id)
            .then((elemento) => {
                const pilotoz = elemento.data.pilots;
                const filmz = elemento.data.films;
                setPilotos(pilotoz);
                setFilms(filmz);
                setNav(elemento.data)
                setLoading('none')
            })
            .catch(() => {
                setExiste(false)
            })
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Loading clase={loading} existe={existe} />
            <h1>{nav.name}</h1>
            <p>{nav.manufacturer}</p>
            <div className="tabla">

                {// eslint-disable-next-line
                    Object.entries(nav).filter((value) => {
                        var elementosNoValidos = ['url', 'films', 'pilots', 'created', 'edited']
                        if (!elementosNoValidos.includes(value[0]))
                            return value[0]
                    }).map((elemento, key) => {
                        const categoria = elemento[0].replace(/_/g, ' ')
                        const categoriaUpper = categoria[0].toUpperCase() + categoria.slice(1)
                        const elementoValido = <p key={key}><span>{categoriaUpper}:</span> {elemento[1]}</p>
                        return elementoValido
                    })}

            </div>

            {(pilotos.length !== 0) ? <h2>Pilots:</h2> : <h2>No pilots found</h2>}
            {pilotos.map((item) => {
                return <Pilotos url={item} />
            })}

            {(films.length !== 0) ? <h2>Films:</h2> : <h2>No films found</h2>}
            {films.map((item) => {
                return <Films url={item} />
            })}
        </div>
    )
}