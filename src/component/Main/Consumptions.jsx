import styles from './SAR.module.css'
function Consumptions() {
    const date=new Date();
    return (
         <div className={styles.container}>
             <form className={styles.formContainer}>
         <div className={styles.labelPart2}>    
                       <label>Date</label>
                       <label>number</label>
                       <label>Amount</label>
                       <label>Money Type</label>
                       <label>Expence Type</label>
                       <label>Description</label>
                     </div>
                     <div className={styles.inputPart2}>
                     <input type="text" value={date}/>
                     <input type="text" name='number' />
                     <input type="text" name='amount' />
                     <select>
                         <option>AFG</option>
                         <option>USA</option>
                         <option>KA</option>
                     </select>
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
                </form>
             </div>
    )
}

export default Consumptions
