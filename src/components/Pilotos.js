import axios from 'axios'
import Loading from '../components/Loading'
import { useState, useEffect } from 'react'
import './Pilotos.css'

export default function Pilotos({ url }) {
    const [pilot, setPilot] = useState([])
    const [loading, setLoading] = useState('block');
    const [existe, setExiste] = useState(true);

    useEffect(() => {
        axios.get(url)
            .then((elemento) => {
                setPilot(elemento.data)
                setLoading('none')
            })
            .catch(() => {
                setExiste(false)
            })
        // eslint-disable-next-line
    }, [])

    return (
        <div className="pilotos">
            <Loading clase={loading} existe={existe} />
            <h3>{pilot.name}</h3>
            <img src="../img/profile.png"/>
        </div>
    )
}