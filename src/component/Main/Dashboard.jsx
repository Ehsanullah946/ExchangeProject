import styles from './Dashboard.module.css';
import Button from '../Button';
import GraphBar from './GraphBar';
import { useTranslation } from 'react-i18next';
function Dashboard() {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.cont}>
        {/* <Sidebar/> */}
        <div className={styles.container}>
          <div className={styles.box}>
            <div>
              <h1>19000 دالر</h1>
              <h1>{t('Credit')}</h1>
            </div>
            <span>➕</span>
            <Button tip="boxBtn">{t('more info')}❓</Button>
          </div>
          <div className={styles.box}>
            <div>
              <h1>19000 دالر</h1>
              <h1>{t('Debit')}</h1>
            </div>
            <span>➖</span>
            <Button tip="boxBtn">{t('more info')}❓</Button>
          </div>
          <div className={styles.box}>
            <div>
              <h1>19000 دالر</h1>
              <h1>{t('Not Received')}</h1>
            </div>
            <span>💶</span>
            <Button tip="boxBtn">{t('more info')}❓</Button>
          </div>
          <div className={styles.box}>
            <div>
              <h1>19000 دالر</h1>
              <h1>{t('Cash')}</h1>
            </div>
            <span>💸</span>
            <Button tip="boxBtn">{t('more info')}❓</Button>
          </div>
        </div>
      </div>
      <table border="1">
        <tr>
          <th>No</th>
          <th>Currency</th>
          <th>Rate</th>
          <th>دالر</th>
        </tr>
        <tr>
          <td>1</td>
          <td>افغانی</td>
          <td>72</td>
          <td>21000</td>
        </tr>
      </table>
      <div className={styles.bar}>
        <GraphBar />
      </div>
    </>
  );
}

export default Dashboard;
