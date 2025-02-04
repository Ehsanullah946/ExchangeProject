import styles from './AddMoney.module.css'
function WithDrow() {
    const date=new Date();
    return (
             <div>
                <h2 className={styles.title}>Withdrow Money</h2>
              <form className={styles.addContainer}>
                        <div className={styles.addSection}>
                         <label>Account No.</label>
                         <input type="text" value={10} name='customer' disabled/>
                        <label>Account</label>
                        <select name="acount" id="">
                          <option value={"Ehsanullah"}> Ehsanullah</option>
                          <option value={"Ali"}>Ali</option>
                          <option value={"Mahmod"}>Mahmod</option>
                        </select>
                        <label>Amount</label>
                       <input type="text"/>
                       <label>description</label>
                       <textarea/>
                       <input type="text" value={date}/>
                        </div>
                        <div className={styles.imageSection}>
                          <img src="/about.jpg" alt='not found'/>
                           <div className={styles.btn}>
                            <button>Select</button>
                            <button>Taking picture</button>
                           </div>
                          <img src="/about.jpg" alt='not found'/>  
                        </div>
                        <div className={styles.Sbtn}>
                        <input type='submit' name='submit'/>
                        <input type='reset' name='reset'/>
                        </div>
                        </form>
                <table border="1">
            <tr>
              <th>No</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Ehsanullah</td>
              <td>2000</td>
              <td>AFG</td>
              <td>Naqd</td>
              <td>2025/02/02</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ali</td>
              <td>7000</td>
              <td>AFG</td>
              <td>Naqd</td>
              <td>2025/02/02</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mohmod</td>
              <td>5000</td>
              <td>AFG</td>
              <td>Naqd</td>
              <td>2025/02/02</td>
            </tr>
          </table>
         </div>
     
    )
}

export default WithDrow
