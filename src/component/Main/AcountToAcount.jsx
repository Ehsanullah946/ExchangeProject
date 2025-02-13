import styles from './AddMoney.module.css'
function AcountToAcount() {
    const date=new Date();
    return (
        <>
        <div>
        <h2 className={styles.title}>Account to Account Details</h2>
        <form className={styles.addContainer}>
        <div className={styles.addSection}>
            <label>Account No.</label>
            <input type="text" value={10} name='customer' disabled/>
        <label>From Account*</label>
        <select name="acount" id="">
            <option value={"Ehsanullah"}> Ehsanullah</option>
            <option value={"Ali"}>Ali</option>
            <option value={"Mahmod"}>Mahmod</option>
        </select>
        <label>To Account</label>
        <select name="acount" id="">
            <option value={"Ehsanullah"}> Ehsanullah</option>
            <option value={"Ali"}>Ali</option>
            <option value={"Mahmod"}>Mahmod</option>
        </select>
        <label>Amount</label>
        <input type="text"/>
        </div>
        <div className={styles.imageSection}>
         <div>
        <input type="text" value={date}/>
         <br/>
         <br/>
        <textarea placeholder='Description.....'/>
         </div>
        <img src="/about.jpg" alt='not found'/>  
        </div>
        <div className={styles.Sbtn}>
        <input type='submit' name='submit'/>
        <input type="reset" name='reset'/>
        </div>
      </form>
    </div>
    <div className='table'>
    <table border="1">
          <tr>
            <th>No</th>
            <th>ّFrom Account</th>
            <th>To Account</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
    </div>
  </>
    )
}

export default AcountToAcount
