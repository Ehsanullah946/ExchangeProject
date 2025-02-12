import Button from "../Button";
import styles from './Reports.module.css'
function GuarantorReport() {
    const date=new Date();
    return (
        <div className={styles.container}>
        <form action="" className={styles.formContainer}>
           <div className={styles.labelPart1}>
             <label htmlFor="">Start Date:</label>
             <label htmlFor="">End Date:</label>
             <label htmlFor="">Start No</label>
             <label htmlFor="">End No</label>
           </div>
           <div className={styles.inputPart1}>
             <input type="text" value={date} />   
             <input type="text" value={date} />
             <input type="text"/>
             <input type="text"/>
           </div>
           <div className={styles.labelPart2}>
             <div>
                <input type="radio" name="customer"/>
                 <label htmlFor="">Account:</label>
                 <select name="" id="">
                     <option value=""> احسان-افغانی </option>
                     <option value="">علی-دالر</option>
                     <option value="">دالر</option>
                 </select>
             </div>
             <div>
                <input type="radio" name="customer" />
                 <label htmlFor="">Branch: </label>
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
             <label htmlFor="">only charges</label>
           </div>
           <div>
             <input type="radio" name="transaction" id="" />
             <label htmlFor="">only transaction</label>
           </div>
           <div>
             <input type="radio" name="transaction" id="" />
             <label htmlFor="">Both</label>
           </div>
           </div>
           <div className={styles.btn}>     
           <Button type="">checkable</Button>
           <Button type="primary">draw Report</Button>
           </div>
        </form>
     </div>
            
    )
}

export default GuarantorReport
