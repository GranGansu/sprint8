import './NavBar.css';
import React, { useRef, useEffect } from 'react'
import { useLocation } from "react-router-dom"
export default function NavBar({ Link, setAltura, pathy }) {
    var enlaces = [
        { url: '/', name: 'Home' },
        { url: '/naves', name: 'Starships' },
        { url: '/login', name: 'Login' },
        { url: '/signup', name: 'Sign up' },
    ]
    const location = useLocation().pathname
    var elementosActivados = []
    const nav = useRef(null)

    const activo = (e) => {
        // eslint-disable-next-line
        elementosActivados.map((elemento) => {
            elemento.target.className = '';
        })
        elementosActivados = [];
        elementosActivados.push(e);
        e.target.className = 'active'
    }

    useEffect(() => {
        setAltura(nav.current.clientHeight)
    })

    return (
        <nav ref={nav}>
            <img src="../img/starwars.jpg" alt="star wars" />
            <ul>
                {enlaces.map((element, key) => {
                    if (location === element.url) {
                        return (
                            <Link to={element.url} key={key}>
                                <li onClick={activo} className="active">{element.name}</li>
                            </Link>)
                    }
                    return (
                        <Link to={element.url} key={key}>
                            <li onClick={activo}>{element.name}</li>
                        </Link>
                    )
                })}
            </ul>
        </nav>
    )
}