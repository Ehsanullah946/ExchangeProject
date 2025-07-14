import { NavLink } from 'react-router-dom';
import styles from '../Navstyles/appNav.module.css';
import { AiOutlineDashboard, AiOutlineRise } from 'react-icons/ai';
import {
  FaArrowAltCircleDown,
  FaExchangeAlt,
  FaRegArrowAltCircleUp,
} from 'react-icons/fa';
import { MdCompareArrows, MdToday } from 'react-icons/md';
import { RiDownloadLine, RiSendPlaneLine } from 'react-icons/ri';
import { GiPayMoney } from 'react-icons/gi';
import { FiUser } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
function MainNav() {
  const { t } = useTranslation();
  return (
    <div>
      <nav className={styles.appNav}>
        <ul>
          <li>
            <NavLink to="dashboard">
              <div className={styles.cli}>
                <AiOutlineDashboard size={18} />
                {t('Dashboard')}
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="deposit">
              <div className={styles.cli}>
                <FaArrowAltCircleDown size={18} />
                {t('Deposit')}
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="withdrow">
              <div className={styles.cli}>
                <FaRegArrowAltCircleUp size={18} />
                {t('Withdrow')}
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="accountToAccount">
              <div className={styles.cli}>
                <MdCompareArrows size={18} />
                {t('Account to Account')}
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="sendMoney">
              <div className={styles.cli}>
                <RiSendPlaneLine size={18} />
                {t('Send money')}
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="receiveMoney">
              <div className={styles.cli}>
                <RiDownloadLine size={18} />
                {t('Receive money')}
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="exchange">
              <div className={styles.cli}>
                <FaExchangeAlt size={18} />
                {t('Exchange')}
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="consumption">
              <div className={styles.cli}>
                <GiPayMoney size={18} />
                {t('Consumption')}
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="dayBook">
              <div className={styles.cli}>
                <MdToday size={18} />
                {t('daily')}
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="rate">
              <div className={styles.cli}>
                <AiOutlineRise size={18} />
                {t('Rate')}
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="acount">
              <div className={styles.cli}>
                <FiUser size={18} />
                {t('Account')}
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNav;
