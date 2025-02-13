import { NavLink } from "react-router-dom"
import styles from "../Navstyles/appNav.module.css"
function ReportNav() {
    return (
        <nav className={styles.appNav}>
        <ul>
          <li>
              <NavLink to="profetReport">Profet Report</NavLink>
          </li>
          <li>
              <NavLink to="depositReport">Deposit Report</NavLink>
          </li>
          <li>
              <NavLink to="withdrowReport">Withdrow Report</NavLink>
          </li>
          <li>
              <NavLink to="sendingReport">Sending Report</NavLink>
          </li>              
          <li>
              <NavLink to="receivingReport">Receiving Report</NavLink>
          </li>              
          <li>
              <NavLink to="expenceReport">Expence Report</NavLink>
          </li>              
          <li>
              <NavLink to="sellingReport">Selling Report</NavLink>
          </li>              
          <li>
              <NavLink to="purchaseReport">Purchase Report</NavLink>
          </li>                           
          <li>
              <NavLink to="wealthReport">Wealth Report</NavLink>
          </li>              
          <li>
              <NavLink to="costomerReport">Customer Report</NavLink>
          </li>              
          <li>
              <NavLink to="guarantorReport">Branch Report</NavLink>
          </li>                           
          <li>
              <NavLink to="bankReport">Bank Report</NavLink>
          </li>              
          <li>
              <NavLink to="daybookReport">DayBook Report</NavLink>
          </li>              
          <li>
              <NavLink to="walletReport">Wallet Report</NavLink>
          </li>              
          <li>
              <NavLink to="rateReport">Rates Report</NavLink>
          </li>              
        </ul>
      </nav>
    )
}

export default ReportNav
