import styles from './Dashboard.module.css'
import Button from "../Button"
import GraphBar from './GraphBar'
function Dashboard() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.box}>
            <div>
             <h1>19000 دالر</h1>
             <h1>Cridet</h1>
            </div>
           <span>➕</span>
             <Button tip="boxBtn">more info❓</Button>
          </div>
          <div className={styles.box}>
            <div>
             <h1>19000 دالر</h1>
             <h1>Debit</h1>
            </div>
           <span>➖</span>
             <Button tip="boxBtn">more info❓</Button>
          </div>
          <div className={styles.box}>
            <div>
             <h1>19000 دالر</h1>
             <h1>Not Received</h1>
            </div>
           <span>💶</span>
             <Button tip="boxBtn">more info❓</Button>
          </div>
          <div className={styles.box}>
            <div>
             <h1>19000 دالر</h1>
             <h1>Cash</h1>
            </div>
           <span>💸</span>
             <Button tip="boxBtn">more info❓</Button>
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
        <GraphBar/>
        </div>

      </>
    )
}

export default Dashboard
