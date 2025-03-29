
import Button from "../Button";
import styles from './Reports.module.css'
function DaybookReport() {
    const date=new Date();
    return (
        <div className={styles.container}>
           <form action="" className={styles.formContainer}>
              <div className={styles.labelPart1}>
                <label htmlFor="">Date:</label>
                <label htmlFor="">Money type:</label>
                <label htmlFor="">User:</label>
              </div>
              <div className={styles.inputPart1}>
                <input type="text" value={date} />
                 <select name="" id="">
                    <option value="">افغانی</option>
                    <option value="">دالر</option>
                 </select>
                 <select name="" id="">
                    <option value="">admin</option>
                    <option value="">Ali</option>
                 </select>
              </div>
              <div className={styles.labelPart2}>
                <div>
                    <input type="radio" name="transaction" id="" />
                    <label htmlFor="">All transaction</label>
                </div>
                <div>
                    <input type="radio" name="transaction" id="" />
                    <label htmlFor="">only cash transaction</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">only cash transaction</label>
                </div>
              </div>
              <div>
                <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">chart view</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">include till</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">till Ok</label>
                </div>
              </div>
              <div className={styles.btn}>
              <Button tip="">checkable</Button>
              <Button tip="primary">draw Report</Button>
              </div>
           </form>
        </div>
    )
}

export default DaybookReport
