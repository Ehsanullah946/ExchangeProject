import styles from './SAR.module.css'
function SendMoney() {
    const date=new Date();
    return (
        <div className={styles.container}>
            <form className={styles.formContainer}>
              <div className={styles.leftSection}>
                <select>
                    <option>Ehsan</option>
                    <option>Ali</option>
                    <option>Mohmod</option>
                </select>   
                <input type="text" name="number"/>
                <div className={styles.sender}>
                <label>sender:</label>
                <input type="text" name="SName"/>
                 <button>Details</button>
                </div> 
              <div className={styles.reciever}>
               <label>Reciver:</label>
               <input type='text' name='Rname'/>
               <button>Details</button>
              </div>
              <div className={styles.amount}>
                <label>Amount:</label>
                <input type="text" name='amount'/>
              </div>
              <div className={styles.currency}>
                <label>Currency:</label>
                <input type="text" name='currency'/>
              </div>
              <div className={styles.kamition}>
                <label>Kamition:</label>
                <input type="text" name='kamition'/>
                <select>
                    <option>AFG</option>
                    <option>KD</option>
                    <option>USD</option>
                </select>
              </div>
              <div className={styles.kamition}>
                <label>passing Kamition:</label>
                <input type="text" name='kamition'/>
                <select>
                    <option>AFG</option>
                    <option>KD</option>
                    <option>USD</option>
                </select>
              </div>
              <div>
                <label>Date</label>
                <input type="text" value={date}/>
              </div>
             </div>
             <div className={styles.meddleSection}>
                <div>
                    
                </div>
             </div>
             <div className={styles.rightSection}>
                
             </div>
            </form>
        </div>
    )
}

export default SendMoney
