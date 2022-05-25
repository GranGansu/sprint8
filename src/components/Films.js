import axios from 'axios'
import Loading from '../components/Loading'
import { useState, useEffect } from 'react'
import './Films.css'

export default function Films({ url }) {
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState('block');
    const [existe, setExiste] = useState(true);

    useEffect(() => {
        axios.get(url)
            .then((elemento) => {
                setFilms(elemento.data)
                setLoading('none')
            })
            .catch(() => {
                setExiste(false)
            })
        // eslint-disable-next-line
    }, [])

    return (
        <div className="films">
            <Loading clase={loading} existe={existe} />
            <h3>{films.title}</h3>
            <p>{films.opening_crawl}</p>
        </div>
    )
}