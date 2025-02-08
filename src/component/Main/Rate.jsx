import styles from './Rate.module.css'
function Rate() {
    const date=new Date();
    return (
        <div className={styles.container}>
           <form action="" className={styles.form}>
            <div className={styles.date}>
             <label>Set date:</label>
             <input type="text" value={date} />
            </div>
            <div className={styles.formContainer}>
              <div className={styles.labelPart1}>
                <label>افغانی</label>
                <label>کلدار</label>
                <label>تومن</label>  
              </div>
              <div className={styles.inputPart1}>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              </div>
              <div className={styles.labelPart2}>
                <label>دالر</label>
                <label>دالر</label>
                <label>دالر</label>
              </div>
              <div className={styles.inputPart2}>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              </div>
              </div> 
           </form>
        </div>
    )
}

export default Rate
