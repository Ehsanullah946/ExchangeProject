import {NavLink } from "react-router-dom"
import styles from './Header.module.css'
function Header() {
    return (
        <nav className={styles.nav}>
          <ul>
            <li>
                <NavLink className={styles.active} activeClassName={styles.active} to="/main">Main Page</NavLink>
            </li>
            <li>
                <NavLink  to="/Bank">Bank</NavLink>
            </li>
            <li>
                <NavLink to="/management">Management</NavLink>
            </li>
            <li>
                <NavLink to="/reports">Reports</NavLink>
            </li>              
            <li>
                <NavLink to="/setting">Settings</NavLink>
            </li>              
          </ul>
        </nav>
    )
}

export default Header
