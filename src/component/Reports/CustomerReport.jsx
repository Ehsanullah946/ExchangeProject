import Button from "../Button";
import styles from './Reports.module.css'
function CustomerReport() {
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
                <input type="radio" name="customer"/>
                 <label htmlFor="">Accounts</label>
                 <select name="" id="">
                     <option value=""> احسان-افغانی </option>
                     <option value="">علی-دالر</option>
                     <option value="">دالر</option>
                 </select>
             </div>
             <div>
                <input type="radio" name="customer" />
                 <label htmlFor="">Customer</label>
                 <select name="" id="">
                     <option value="">Ehsan</option>
                     <option value="">Ali</option>
                     <option value="">Mahmod</option>
                 </select>
             </div>
             <div>
                 <input type="checkbox" name="" id="" />
                 <label htmlFor="">All Report</label>  
             </div>
           </div>
           <div className={styles.radioBtn}>
           <div>
             <input type="radio" name="transaction" id="" />
             <label htmlFor="">only check transaction</label>
           </div>
           <div>
             <input type="radio" name="transaction" id="" />
             <label htmlFor="">only other transaction</label>
           </div>
           <div>
             <input type="radio" name="transaction" id="" />
             <label htmlFor="">All transaction</label>
           </div>
           </div>
           <div className={styles.btn}>     
           <Button tip="primary">checkable</Button>
           <Button tip="primary">draw Report</Button>
           </div>
        </form>
     </div>
    )
}

export default CustomerReport
