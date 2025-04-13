import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { AiFillHome } from "react-icons/ai";
import { FaUniversity } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
function Header() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to="/main"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : ""
            }
          >
            <div className={styles.cli}>
          <AiFillHome size={18} color="aqua"/> 
            Main Page
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Bank"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : ""
            }
          >
            <div className={styles.cli}>
            <FaUniversity  size={18}/>
            Bank
            </div>
          </NavLink>
        </li>
        <li> 
          <NavLink
            to="/management"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : ""
            }
          >
            <div className={styles.cli}>
            <MdManageAccounts  size={18}/>
            Management
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : ""
            }
          >
            <div className={styles.cli}>
            <HiOutlineDocumentReport  size={18}/>
            Reports
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/setting"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : ""
            }
          >
          <div className={styles.cli}>
          <FiSettings size={18}/>
            Settings
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;