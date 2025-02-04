import { NavLink } from "react-router-dom"
import styles from "../Navstyles/appNav.module.css"
function BankNav() {
    return (
              <nav className={styles.appNav}>
          <ul>
            <li>
                <NavLink to="ABDeposit">Afghan bank deposit</NavLink>
            </li>
            <li>
                <NavLink to="ABWithdrow">Afghan bank withdrow</NavLink>
            </li>
            <li>
                <NavLink to="FBDeposit">Foreign Bank deposit</NavLink>
            </li>
            <li>
                <NavLink to="FBWithdrow">Foreign Bank withdrow</NavLink>
            </li>              
          </ul>
        </nav>
    )
}

export default BankNav
