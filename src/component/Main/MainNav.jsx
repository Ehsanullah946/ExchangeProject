import { NavLink } from "react-router-dom"
import styles from "../Navstyles/appNav.module.css"
function MainNav() {
    return (
        <div>
            <nav className={styles.appNav}>
          <ul>
            <li>
                <NavLink to="dashboard">Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="deposit">Deposit</NavLink>
            </li>
            <li>
                <NavLink to="withdrow">Withdrow</NavLink>
            </li>
            <li>
                <NavLink to="accountToAccount">Account To Account</NavLink>
            </li>        
            <li>
                <NavLink to="sendMoney">Send Money</NavLink>
            </li>
            <li>
                <NavLink to="reciveMoney">Receive Money</NavLink>
            </li>
            <li>
                <NavLink to="exchange">Exchanges</NavLink>
            </li>
            <li>
                <NavLink to="consumption">Consumption</NavLink>
            </li>
            <li>
                <NavLink to="dayBook">Daily</NavLink>
            </li>
            <li>
                <NavLink to="rate">Rate</NavLink>
            </li>
            <li>
                <NavLink to="acount">Acount</NavLink>
            </li>
          </ul>
        </nav>
        </div>
    )
}

export default MainNav
