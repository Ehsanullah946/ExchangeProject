import { Link, NavLink } from "react-router-dom"
import styles from "../Navstyles/appNav.module.css"
function ManagementNav() {
    return (
        <nav className={styles.appNav}>
          <ul>
            <li>
                <NavLink to="owner">Owner</NavLink>
            </li>
            <li>
                <NavLink to="employee">Employee</NavLink>
            </li>
            <li>
                <NavLink to="customer">Customer</NavLink>
            </li>
            <li>
                <NavLink to="SR">Sender/Receiver</NavLink>
            </li>              
            <li>
                <NavLink to="guarantor">Guarantor</NavLink>
            </li>              
            <li>
                <NavLink to="exchanger">Exchanger</NavLink>
            </li>              
            <li>
                <NavLink to="createUser">Create User</NavLink>
            </li>              
            <li>
                <NavLink to="branch">Branch</NavLink>
            </li>                          
          </ul>
        </nav>
    )
}

export default ManagementNav
