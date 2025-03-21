import {NavLink } from "react-router-dom"
import styles from "../Navstyles/appNav.module.css"
function SettingNav() {
    return (
        <nav className={styles.appNav}>
        <ul>
          <li>
              <NavLink to="general">General</NavLink>
          </li>
          <li>
              <NavLink to="moneyType">Money Type</NavLink>
          </li>
          <li>
              <NavLink to="them">Them</NavLink>
          </li>
          <li>
              <NavLink to="autoBackup">Auto Backup</NavLink>
          </li>              
          <li>
              <NavLink to="connecting">whatsApp</NavLink>
          </li>              
          <li>
              <NavLink to="print">Print</NavLink>
          </li>              
          <li>
              <NavLink to="accessing">Accessing</NavLink>
          </li>              
          <li>
              <NavLink to="database">Database</NavLink>
          </li>                          
          <li>
              <NavLink to="moreSetting">More Settings</NavLink>
          </li>                          
        </ul>
      </nav>
    )
}

export default SettingNav
