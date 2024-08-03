import React from 'react'
import '../styles.css';
import { Link } from 'react-router-dom';
export default function Navbar(){

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Watchlist">Watchlist</Link>
                </li>
            </ul>
        </nav>
    )
}