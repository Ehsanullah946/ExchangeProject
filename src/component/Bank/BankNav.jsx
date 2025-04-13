import { NavLink } from "react-router-dom"
import styles from "../Navstyles/appNav.module.css"
import { GiReceiveMoney, GiTakeMyMoney } from 'react-icons/gi';
import { RiBankLine } from 'react-icons/ri';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
function BankNav() {
    return (
              <nav className={styles.appNav}>
          <ul>
            <li>
                <NavLink to="ABDeposit">
             <div  className={styles.cli}>
                <GiReceiveMoney  size={18} />
                 Afghan Bank Deposit
             </div>      
                
                </NavLink>
            </li>
            <li>
                <NavLink to="ABWithdrow">
                <div  className={styles.cli}>
                <GiTakeMyMoney  size={18} />
                 Afghan Bank withdrow
             </div> 
                </NavLink>
            </li>
            <li>
                <NavLink to="FBDeposit">
                <div  className={styles.cli}>
                <RiBankLine   size={18} />
                <FaArrowDown  size={18} />
                 Foreign bank deposit
             </div> 
                </NavLink>
            </li>
            <li>
                <NavLink to="FBWithdrow">
                <div  className={styles.cli}>
                <RiBankLine  size={18} />
                <FaArrowUp   size={18} />
                 Foreign bank withdrow
             </div> 
                </NavLink>
            </li>              
          </ul>
        </nav>
    )
}

export default BankNav
