import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./MainNav.module.css"

function MainNavigation() {
  return (
    <nav className={styles.nav}>
        <h2>Great quotes app</h2>
        <ul>
            <li> <Link to ="/"> All Quotes </Link></li>
            <li> <Link to ="/new"> New Quotes </Link></li>

        </ul>
    </nav>
  )
}

export default MainNavigation