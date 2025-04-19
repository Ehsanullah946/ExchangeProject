
import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { FaArrowAltCircleDown, FaUniversity } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import styles from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.sidebarTile}>Dashboard</h2>
      <nav className={styles.sidebarNav}>
      <li className={styles.sidebarItem}>
       <NavLink to="deposit">
        <div  className={styles.cli}>
         <FaArrowAltCircleDown className={styles.sidebarIcon} size={18}/>
             Deposit
          </div>
        </NavLink>
      </li>
        <div className={styles.sidebarItem}>
          <FaUniversity className={styles.sidebarIcon} />
          Management
        </div>
        <div className={styles.sidebarItem}>
          <MdManageAccounts className="sidebar-icon" />
           deposite
        </div>
        <div className={styles.sidebarItem}>
          <HiOutlineDocumentReport className="sidebar-icon" />
          report
        </div>
        <div className={styles.sidebarItem}>
          <FiSettings className={styles.sidebarIcon} />
          setting
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
