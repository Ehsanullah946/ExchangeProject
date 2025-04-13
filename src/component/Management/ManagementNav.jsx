import { Link, NavLink } from "react-router-dom"
import styles from "../Navstyles/appNav.module.css"
import { FaCrown, FaUserTie } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BiTransferAlt } from 'react-icons/bi';
import { RiShieldUserLine } from 'react-icons/ri';
import { TbArrowsExchange } from 'react-icons/tb';
import { MdPersonAddAlt1, MdAccountTree } from 'react-icons/md';


function ManagementNav() {
  return (
    <div>
    <nav className={styles.appNav}>
   <ul>
 <li>
     <NavLink to="owner">
     <div  className={styles.cli}>
     <FaCrown size={18} />
            Owner
         </div>
     </NavLink>
 </li>
 <li>
     <NavLink to="employee">
       <div  className={styles.cli}>
       <FaUserTie size={18} />
            Employee
         </div>
     </NavLink>
</li>
 <li>
     <NavLink to="customer">
           <div  className={styles.cli}>
           <FiUsers size={18} />
            Customer
         </div>
     </NavLink>
 </li>
 <li>
     <NavLink to="SR">
           <div  className={styles.cli}>
           <BiTransferAlt size={18} />
              Sender/Receiver
              </div>
     </NavLink>
 </li>              
 <li>
     <NavLink to="guarantor">
      <div  className={styles.cli}>
      <RiShieldUserLine size={18} />
        Guarantor
        </div>
     </NavLink>
 </li>              
 <li>
     <NavLink to="exchanger">
     <div  className={styles.cli}>
     <TbArrowsExchange size={18} />
          Exchanger
          </div>
     </NavLink>
 </li>              
 <li>
     <NavLink to="createUser">
       <div  className={styles.cli}>
       <MdPersonAddAlt1 size={18}/>
          Create User
          </div>
     </NavLink>
 </li>              
 <li>
     <NavLink to="branch">
        <div  className={styles.cli}>
        <MdAccountTree size={18} />
            Branch
            </div>
     </NavLink>
 </li>                          
 </ul>
      </nav>
    </div>
  );
}

export default ManagementNav
