import styles from './SAR.module.css'
function SendMoney() {
    const date=new Date();
    return (
        <>
      <div className={styles.container}>
        <form className={styles.formContainer}>
            <div className={styles.labelPart}>
                <label>Guarantor:</label>
                <label>Number:</label>
                <label>Transfer</label>
                <label>Reciver:</label>
                <label>Amount:</label>
                <label>Currency:</label>
                <label>charges:</label>
                <label>place charge:</label>
            </div>
            <div className={styles.inputPart}>
            <select>
                <option>Ehsan</option>
                <option>Ali</option>
                <option>Mohmod</option>
            </select> 
            <input type="text" name="number"/>
            <input type="text" name="SName"/>
            <input type='text' name='Rname'/>
            <input type="text" name='amount'/>
            <input type="text" name='currency'/>
            <div className={styles.charge} >
            <input type="text" name='charge'/>
            <select>
                <option>AFG</option>
                <option>KD</option>
                <option>USD</option>
            </select>
            </div>
            <div className={styles.charge} >
            <input type="text" name='placeCharge'/>
            <select>
                <option>AFG</option>
                <option>KD</option>
                <option>USD</option>
            </select>
            </div>
            </div>
            <div className={styles.labelPart2}>
            <label>Date</label>
            <div>
            <label>customer</label>
            <input type="checkbox" />
            </div>
            <label>Exchange Money</label>
            <label>Guarantor</label>
            <label>Description</label>
            </div>
            <div className={styles.inputPart2}>
            <input type="text" value={date}/>
            <div>
            <select>
                <option>Ehsan</option>
                <option>Ali</option>
                <option>Mohmod</option>
            </select>
            <button>➕</button>
            </div>
            <div>
            <input type="text" />
            <button>➕</button>
            </div>
            <select>
            <option>Ehsan</option>
            <option>Ali</option>
            <option>Mohmod</option>
            </select>
            <textarea/>  
            </div>
            <div className={styles.rightSection}>
            <img src="/about.jpg" alt="not found" />
                <div>
                <button>take picture</button>
                <button>select</button>
                </div>
            </div> 
        </form>
    </div>
    <div className='table'>
    <table border="1">
          <tr>
            <th>Transfer NO</th>
            <th>ّAmount</th>
            <th>Money type</th>
            <th>Charges Amount</th>
            <th>Charges Type</th>
            <th>Transfer To</th>
            <th>Date</th>
            <th>Description</th>
            <th>Sender</th>
            <th>Reciever</th>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
    </div>
  </>
    )
}

export default SendMoney
