import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'


import paths from '../../config/paths';

import logo from '../../images/logo.svg'

export default function Header() {
    return (
        <header style={{"background": "red"}}>
            <a href="" ><img src={logo} alt="Little Star Logo" /></a>
            <button></button>
            <nav>
                <ul>
                    {/* <li><NavLink to={paths.HOME}>Accueil</NavLink></li>
                    <li><NavLink to={paths.PLAYLISTS}>Playlists</NavLink></li> */}
                    <li><a href={paths.HOME}>Accueil</a></li>
                    <li><a href={paths.PLAYLISTS}>Playlist</a></li>
                </ul>
            </nav>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
            {/* A transformer en form ? */}
        </header>
    )
}