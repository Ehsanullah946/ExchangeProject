import styles from './Accounts.module.css'
function Acounts() {
    const date=new Date();
    
        return (
          <>
        <div className={styles.container}>
          <form className={styles.formContainer}>
           <div className={styles.labelPart1}>
            <label>Account No.</label>
            <label>Customer:</label>
            <label>Date of Creation:</label>
           </div>
           <div className={styles.inputPart1}>
            <input type="text" name='Number' />
            <input type="text" name='customer' />
            <input type="text" value={date} />
           </div>
          </form>
          <div className={styles.Accounts}>
            <div className={styles.labelPart2}>
                <label>افغانی</label>
                <label>دالر</label>
                <label>کلدار</label>
                <label>تومن</label>
                <label>Totale:</label>
            </div>
            <div className={styles.inputPart2}>
                <input type="text" name='USA'/>
                <input type="text" name='AFG' />
                <input type="text" name='KA'/>
                <input type="text" name='To'/>
                 <h1>300 دالر</h1>
            </div>
          </div>  
        </div>
        <div className='table'>
        <table border="1">
          <tr>
            <th>Account No</th>
            <th>ّCustomer</th>
            <th>Currency</th>
            <th>Balance</th>
            <th>Date of Creation</th>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
        </div>
       </>
    )
}

export default Acounts
