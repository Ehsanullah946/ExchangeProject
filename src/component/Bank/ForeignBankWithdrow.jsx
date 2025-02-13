import Button from "../Button";
import styles from './Bank.module.css'  
function ForeignBankWithdrow() {
    const date=new Date();
    return (
        <div className={styles.container}>
        <form action="" className={styles.formContainer}>
           <div className={styles.labelPart1}>
             <label>No:</label>
             <div>
             <input type="radio" name="CustomerSender" id="" />
             <label>Customer:</label>
             </div>
             <div>
             <input type="radio" name="CustomerSender" id="" />
             <label>Sender:</label>
             </div>
             <label>Reciever:</label>
             <label>BankAccount:</label>
             <label>Serial:</label>
             <label>Branch Code:</label>
             <label>Account name:</label>
             <label>to Account No:</label>
           </div>
           <div className={styles.inputPart1}>
            <input type="text" name='number' />
            <select name="Customer" id="">
                <option value="">Ehsan</option>
                <option value="">Ali</option>
            </select>
            <select name="Sender" id="">
                <option value="">Ehsan</option>
                <option value="">Ali</option>
            </select>
            <select name="Reciever" id="">
                <option value="">Ehsan</option>
                <option value="">Ali</option>
            </select>
            <select name="BankAccout" id="">
                <option value="">Ehsan</option>
                <option value="">Ali</option>
            </select>
            <input type="text" name='Serial' />
            <input type="text" name='Branchcode' />
            <input type="text" name='toAccountName' />
            <input type="text" name='toAccountNo' />
           </div>
           <div className={styles.labelPart2}>
             <label htmlFor="">withdrow Date:</label>
             <label htmlFor="">Amount:</label>
             <label htmlFor="">Received Money:</label>
             <label htmlFor="">Charges:</label>
             <label htmlFor="">Discription:</label>
           </div>
           <div className={styles.inputPart2}>
            <input type="text" value={date} />
            <input type="text" name="amount" />
            <input type="text" name="ReceivedMoney" />
            <input type="text" name="ChargesAMount" />
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

export default ForeignBankWithdrow
