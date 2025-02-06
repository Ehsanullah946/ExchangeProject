import styles from './DayBook.module.css'
function DayBook() {
    const date=new Date();
    return (
      <div className={styles.container}>
        <form className={styles.formContainer}>
             <div className={styles.labelPart1}>    
                <label>Date</label>
                <label>Customer</label>
                <label>Rate</label>
                <label>Description</label>
                </div>
                <div className={styles.inputPart1}>
                <input type="text" value={date}/>
                <select>
                    <option>AFG</option>
                    <option>USA</option>
                    <option>KA</option>
                </select>
                <input type="text" name='number' />
               <textarea/>
               </div>
               <div className={styles.inputPart2}>
                <div className={styles.Currency1}>
                    

                </div>
                </div>     
        </form>
      </div>
    )
}

export default DayBook
