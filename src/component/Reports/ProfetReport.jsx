import Button from "../Button";
import styles from './Reports.module.css'
function ProfetReport() {
    const date=new Date();
    return (
        <div className={styles.container}>
           <form action="" className={styles.formContainer}>
              <div className={styles.labelPart1}>
                <label htmlFor="">Start Date:</label>
                <label htmlFor="">End Date:</label>
                <label htmlFor="">Currency:</label>
              </div>
              <div className={styles.inputPart1}>
                <input type="text" value={date} />
                <input type="text" value={date} />
                 <select name="" id="">
                    <option value="">افغانی</option>
                    <option value="">دالر</option>
                 </select>
              </div>
              <div className={styles.labelPart2}>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">All types</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Convert to one currency</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">show Day of week</label>
                </div>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">chart view</label>
              </div>
              <div className={styles.btn}>
              <Button tip="primary">draw Report</Button>
              </div>
           </form>
        </div>
    )
}

export default ProfetReport
