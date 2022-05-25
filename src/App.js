import React, { useState } from 'react';
import Starships from './pages/Starships';
import NavBar from './components/NavBar';
import Bienvenida from './pages/Bienvenida';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GuardedRoute from './GuardedRoute';
import FichaNave from './pages/FichaNave';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom"

export default function App() {
    const [altura, setAltura] = useState(0);
    return (
        <Router>
            <NavBar Link={Link} setAltura={setAltura} />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Bienvenida />}  />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/ficha/:id" element={<FichaNave />} />
                    <Route path="/naves" element={
                        <GuardedRoute auth={true}>
                            <Starships preScroll={altura} />
                        </GuardedRoute>
                    } />
                </Routes>
            </div>
        </Router>
    )
}
