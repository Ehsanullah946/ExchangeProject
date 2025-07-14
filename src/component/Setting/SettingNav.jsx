import { NavLink } from 'react-router-dom';
import styles from '../Navstyles/appNav.module.css';
import { FiSettings } from 'react-icons/fi';
import { GiMoneyStack } from 'react-icons/gi';
import { MdColorLens, MdVpnKey } from 'react-icons/md';
import { BiCloudUpload } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlinePrinter } from 'react-icons/ai';
import { VscDatabase } from 'react-icons/vsc';
import { IoSettingsSharp } from 'react-icons/io5';
function SettingNav() {
  return (
    <nav className={styles.appNav}>
      <ul>
        <li>
          <NavLink to="general">
            <div className={styles.cli}>
              <FiSettings size={18} />
              General
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="moneyType">
            <div className={styles.cli}>
              <GiMoneyStack size={18} />
              Money Type
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="them">
            <div className={styles.cli}>
              <MdColorLens size={18} />
              Them
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="autoBackup">
            <div className={styles.cli}>
              <BiCloudUpload size={18} />
              Auto Backup
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="connecting">
            <div className={styles.cli}>
              <FaWhatsapp size={18} />
              WhatsApp
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="print">
            <div className={styles.cli}>
              <AiOutlinePrinter size={18} />
              Print
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="accessing">
            <div className={styles.cli}>
              <MdVpnKey size={18} />
              Accessing
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="database">
            <div className={styles.cli}>
              <VscDatabase size={18} />
              Database
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="moreSetting">
            <div className={styles.cli}>
              <IoSettingsSharp size={18} />
              More Setting
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="language">
            <div className={styles.cli}>
              <IoSettingsSharp size={18} />
              language
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SettingNav;
