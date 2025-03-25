import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

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
            Main Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Bank"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : ""
            }
          >
            Bank
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/management"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : ""
            }
          >
            Management
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : ""
            }
          >
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/setting"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : ""
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;