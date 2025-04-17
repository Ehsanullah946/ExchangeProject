import Button from "../Button";
import styles from './Bank.module.css'
function ForeignBankDeposit() {
    const date=new Date();
    return (
        <div className={styles.container}>
        <form action="" className={styles.formContainer}>
           <div className={styles.labelPart1}>
             <label>No:</label>
             <label>BankAccount:</label>
             <label>Amount:</label>
             <div>
             <input type="checkbox" name="" id="" />
             <label>Customer:</label>
             </div>
             <label>Sender:</label>
             <label>Reciever:</label>
             <label>Date:</label>
             <label>Given Amount:</label>
             <label>charges:</label>
           </div>
           <div className={styles.inputPart1}>
            <input type="text" name='number' />
            <select name="bankAccount" id="">
                <option value="">single</option>
                <option value="">Marid</option>
            </select>
            <input type="text" name='amount' />
            <select name="" id="">
                <option value="">Ehsanullah</option>
                <option value="">Ali</option>
            </select>
            <input type="text" name='sender' />
            <input type="text" name='reciever' />
            <input type="text" name='date' value={date} />
            <input type="text" name='Given' />
            <input type="text" name='charges'/>
           </div>
           <div className={styles.labelPart2}>
             <label htmlFor="">Deposit Date:</label>
             <label htmlFor="">card End:</label>
             <label htmlFor="">Serial:</label>
             <label htmlFor="">Branch Code:</label>
             <label htmlFor="">Account Name:</label>
             <label htmlFor="">From Account Number:</label>
             <label htmlFor="">Discription:</label>
           </div>
           <div className={styles.inputPart2}>
            <input type="text" value={date} />
            <input type="text" name="cardEnd" />
            <input type="text" name="serail" />
            <input type="text" name="BrachCode" />
            <input type="text" name="FromAccountName" />
            <input type="text" name="FromAccountNumber" />
            <textarea/>   
           </div>
           <div className={styles.picture}>
            <img src="/about.jpg" alt="not found" />
            <Button tip="newB">Take Picture</Button>
           </div>
        </form>
      </div>
    )
}

export default ForeignBankDeposit
