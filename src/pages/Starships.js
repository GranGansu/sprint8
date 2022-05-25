import './Starships.css';
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import DivNave from '../components/listadoNave'
var proximaURL = null;

function App({ preScroll }) {
  const refApp = useRef(null)
  const refNaves = useRef(new Map())
  const [naves, setNaves] = useState(new Map());
  const [loading, setLoading] = useState('block');
  const vez = useRef(1)
  const height = useRef(0)
  const prePre = useRef(0)

  useEffect(() => {
    height.current = refApp.current.clientHeight
    prePre.current = preScroll
  }, [naves, preScroll])

  //Cuando se ejecuta por primera vez
  useEffect(() => {
    fetchNaves('https://swapi.dev/api/starships/')
    window.addEventListener('scroll', (event) => {
      if (vez.current > 0) {
        var scrolly = event.path[1].scrollY + window.frames.innerHeight
        var clientHeight = height.current + prePre.current + 35
        console.log(scrolly + 'clientHeight: ' + clientHeight)
        if (scrolly > clientHeight && proximaURL !== null) {
          console.log('Cargando próxima página')
          fetchNaves(proximaURL)
        }
      }
    })
  }, [])

  const fetchNaves = (url) => {
    vez.current = 0;
    setLoading('block')
    fetch(url)
      .then((elemento) => {
        return elemento.json()
      })
      .then((elemento) => {
        proximaURL = elemento.next;
        // eslint-disable-next-line
        elemento.results.map((item) => {
          refNaves.current.set(item.name, item)
        })
        setNaves(refNaves.current)
        height.current = refApp.current.clientHeight;
        setLoading('none')
        if (proximaURL !== null) {
          vez.current = 1;
        }
      })
  }

  return (
    <div className="App" ref={refApp}>
      <div className="margenes">
        {Array.from(naves).map((item, key) => {
          const id = item[1].url.match(/\d+/g)
          return (
            <Link to={'/ficha/' + id} key={key}>
              <DivNave >
                <p>{item[1].name}</p>
                <p>{item[1].model}</p>
              </DivNave>
            </Link>
          )
        })}
        <DivNave id="blur" className={loading}>
          <img src="../img/loading.gif" alt="loading gif" />
          <p>Starship troopers</p>
          <p>Naboo master</p>
        </DivNave>
      </div>
    </div>
  );
}

export default App;