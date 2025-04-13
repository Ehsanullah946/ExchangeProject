
import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { FaUniversity } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import styles from './Sidebar.module.css'
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.sidebarTile}>Dashboard</h2>
      <nav className={styles.sidebarNav}>
        <div className={styles.sidebarItem}> 
          <AiFillHome className={styles.sidebarIcon} />
          <span>Main Page</span>

        </div>
        <div className={styles.sidebarItem}>
          <FaUniversity className={styles.sidebarIcon} />
          <span>Bank</span>
        </div>
        <div className={styles.sidebarItem}>
          <MdManageAccounts className="sidebar-icon" />
          <span>Management</span>
        </div>
        <div className={styles.sidebarItem}>
          <HiOutlineDocumentReport className="sidebar-icon" />
          <span>Reports</span>
        </div>
        <div className={styles.sidebarItem}>
          <FiSettings className={styles.sidebarIcon} />
          <span>Settings</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
