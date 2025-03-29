import Button from "../Button";
import styles from './Reports.module.css'
function RecievingReport() {
    const date=new Date();
    return (
        <div className={styles.container}>
           <form action="" className={styles.formContainer}>
              <div className={styles.labelPart1}>
                <label htmlFor="">Start Date:</label>
                <label htmlFor="">End Date:</label>
                <label htmlFor="">Branch:</label>
              </div>
              <div className={styles.inputPart1}>
                <input type="text" value={date} />
                <input type="text" value={date} />
                 <select name="" id="">
                    <option value="">Ehsan</option>
                    <option value="">Ali</option>
                 </select>
              </div>
              <div className={styles.labelPart2}>
                <div>
                    <label htmlFor="">currency</label>
                    <select name="" id="">
                        <option value="">افغانی</option>
                        <option value="">کلدار</option>
                        <option value="">دالر</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Passd to</label>
                    <select name="" id="">
                        <option value="">Ehsan</option>
                        <option value="">Ali</option>
                        <option value="">Mahmod</option>
                    </select>
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

export default RecievingReport
