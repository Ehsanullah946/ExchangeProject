import Button from "../Button";
import styles from './Bank.module.css'  
function AfghanBankWithdrow() {
    const date=new Date();
    return (
        <div className={styles.container}>
        <form action="" className={styles.formContainer}>
           <div className={styles.labelPart1}>
             <label>No:</label>
             <label>BankAccount:</label>
             <label>Amount:</label>
             <label>By whome:</label>
             <label>Date:</label>
           </div>
           <div className={styles.inputPart1}>
            <input type="text" name='number' />
            <select name="bankAccount" id="">
                <option value="">single</option>
                <option value="">Marid</option>
            </select>
            <input type="text" name='account' />
            <input type="text" name='by whome' />
            <input type="text" name='date' value={date} />
           </div>
           <div className={styles.labelPart2}>
             <label htmlFor="">Branch Name:</label>
             <label htmlFor="">Branch code</label>
             <label htmlFor="">Discription:</label>
           </div>
           <div className={styles.inputPart2}>
            <input type="text" />
            <input type="text" />
            <textarea/>   
           </div>
           <div className={styles.picture}>
            <img src="/about.jpg" alt="not found" />
            <Button type="primary">Take Picture</Button>
           </div>
        </form>
      </div>
    )
}

export default AfghanBankWithdrow
