import Button from "../Button";
import styles from './Reports.module.css'
function WalletReport() {
    const date=new Date();
    return (
        <div className={styles.container}>
        <form action="" className={styles.formContainer}>
           <div className={styles.labelPart1}>
             <label htmlFor="">Date:</label>
             <label htmlFor="">Currency:</label>
           </div>
           <div className={styles.inputPart1}>
             <input type="text" value={date} />
              <select name="" id="">
                 <option value="">افغانی</option>
                 <option value="">دالر</option>
              </select>
           </div>
           <div className={styles.labelPart2}>
             <div>
                 <input type="checkbox" name="week" id="" />
                 <label htmlFor="week">Current till</label>
             </div>
             <div>
                 <input type="checkbox" name="week" id="" />
                 <label htmlFor="week">one Currency</label>
             </div>
           </div>
           <div>
             <input type="checkbox" name="" id="" />
             <label htmlFor="">chart view</label>
           </div>
           <div className={styles.btn}>
           <Button tip="primary">set till</Button>
           <Button tip="primary">draw Report</Button>
            
           </div>
        </form>
     </div>
    )
}

export default WalletReport
