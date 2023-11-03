import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'


import paths from '../../config/paths';

import logo from '../../images/logo.svg'

export default function Header() {
    return (
        <header className={styles.header} >
            <div className={styles.navContainer}>
                <div className={styles.topContainer}>
                    <a href={paths.HOME} ><img src={logo} alt="Little Star Logo" className={styles.logo} /></a>
                    <button className={styles.mobileButton}><span></span><span></span></button>
                </div>
                <div className={styles.bottomContainer}>
                    <nav>
                        <ul>
                            {/* <li><NavLink to={paths.HOME}>Accueil</NavLink></li>
                            <li><NavLink to={paths.PLAYLISTS}>Playlists</NavLink></li> */}
                            <li><a href={paths.HOME}>Accueil</a></li>
                            <li><a href={paths.PLAYLISTS}>Playlist</a></li>
                        </ul>
                    </nav>
                    <button className={styles.search}><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                {/* A transformer en form ? */}
            </div>
        </header>
    )
}