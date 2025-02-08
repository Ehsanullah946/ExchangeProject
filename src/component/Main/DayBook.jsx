import Button from '../Button';
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
                    <option>Ehsan</option>
                    <option>Ali</option>
                    <option>Mahmod</option>
                </select>
                <input type="text" name='number' />
               <textarea/>
               <div>
               <Button type="primary">save</Button>  
               <Button type="position">cancel</Button>  
               </div>
               </div>
                <div className={styles.labelPart2}>
                    <label>افغانی</label>
                    <label>دالر</label>
                    <label>تومن</label>
                </div>
               <div className={styles.inputPart2}>
                <div className={styles.currency}>
                    <input type="text" name='Deposit'/>
                    <input type="text" name='withdrow' />
                </div>
                <div className={styles.currency}>
                <input type="text" name='Deposit'/>
                <input type="text" name='withdrow' />
                </div>
                <div className={styles.currency}>
                    <input type="text" name='Deposit'/>
                    <input type="text" name='withdrow' />
                </div>
             </div> 
            
        </form>
      </div>
    )
}

export default DayBook
