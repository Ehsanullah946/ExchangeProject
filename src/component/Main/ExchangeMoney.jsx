import styles from './SAR.module.css'
function ExchangeMoney() {
    const date=new Date();
    return (
        <>
           <div className={styles.container}>
              <form className={styles.formContainer}>
              <div className={styles.labelPart1}>
                  <label>Number:</label>
                  <label>Sel Currency</label>
                  <label>Purches Currency:</label>
                  <label>Rate:</label>
                  <div>  
                  <label>Sel Amount:</label>
                   <input type="checkbox" />
                  </div>
                  <label>Purchase Amount:</label>
              </div>
              <div className={styles.inputPart1}>
                  <input type="text" name="number"/>
                  <select>
                      <option>AFG</option>
                      <option>USA</option>
                      <option>KA</option>
                  </select> 
                  <select>
                      <option>AFG</option>
                      <option>USA</option>
                      <option>KA</option>
                  </select> 
                  <input type="text" name="Rate"/>  
                  <input type='text' name='SAmount'/>
                  <input type="text" name='PAmount'/>
                  <div className={styles.charge} >
                  </div>
              </div>
              <div className={styles.labelPart2}>
                  <label>Date</label>
                  <div>
                  <label>Exchager</label>
                  <input type="checkbox" />
                  </div>
                  <div>
                  <label>customer</label>
                  <input type="checkbox" />
                  </div>
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
              <select>
              <option>Ehsan</option>
              <option>Ali</option>
              <option>Mohmod</option>
              </select>
              <button>➕</button>
              </div>
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
            <th>No.</th>
            <th>ّRate</th>
            <th>Sale Amount</th>
            <th>Sale Currency</th>
            <th>Purchase Amount</th>
            <th>Purchase Currency</th>
            <th>Exchanger</th>
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

export default ExchangeMoney
