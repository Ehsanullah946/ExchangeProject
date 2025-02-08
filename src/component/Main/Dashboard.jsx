import styles from './Dashboard.module.css'
import Button from "../Button"
function Dashboard() {
    return (
        <div className={styles.container}>
          <div className={styles.box}>
            <div>
             <h1>19000 دالر</h1>
             <h1>Cridet</h1>
            </div>
           <span>➕</span>
             <Button type="boxBtn">more info❓</Button>
          </div>
          <div className={styles.box}>
            <div>
             <h1>19000 دالر</h1>
             <h1>Debit</h1>
            </div>
           <span>➖</span>
             <Button type="boxBtn">more info❓</Button>
          </div>
          <div className={styles.box}>
            <div>
             <h1>19000 دالر</h1>
             <h1>Not Received</h1>
            </div>
           <span>💶</span>
             <Button type="boxBtn">more info❓</Button>
          </div>
          <div className={styles.box}>
            <div>
             <h1>19000 دالر</h1>
             <h1>Cash</h1>
            </div>
           <span>💸</span>
             <Button type="boxBtn">more info❓</Button>
          </div>
        </div>
    )
}

export default Dashboard
