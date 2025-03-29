import Button from "../Button";
import styles from './Reports.module.css'
function WealthReport() {
    const date=new Date();
    return (
        <div className={styles.container}>
        <form action="" className={styles.formContainer}>
           <div className={styles.labelPart1}>
             <label htmlFor="">Start Date:</label>
             <label htmlFor="">End Date:</label>
           </div>
           <div className={styles.inputPart1}>
             <input type="text" value={date} />
             <input type="text" value={date} />
           </div>
           <div className={styles.labelPart2}>
             <div>
                 <input type="checkbox" name="week" id="" />
                 <label htmlFor="week">show Day of week</label>
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

export default WealthReport
