import Button from '../Button';
import styles from './Manage.module.css'
function Branch() {
    return (
      <>
        <div className={styles.container}>
        <form action="" className={styles.formContainer}>
           <div className={styles.labelPart1}>
             <label>ID:</label>
             <label>First Name:</label>
             <label>Last Name:</label>
             <label>Father Name:</label>
             <label>Marital:</label>
             <label>Job:</label>
             <label>Loan Limit:</label>
             <label>Customer Type:</label>  
             <label>charge:</label>  
           </div>
           <div className={styles.inputPart1}>
            <input type="text" name='number'/>
            <input type="text" name='Name'/>
            <input type="text" name='LastName'/>
            <input type="text" name='Father'/>
            <select name="" id="">
                <option value="">single</option>
                <option value="">Marid</option>
            </select>
            <input type="text" name='job'/>
            <input type="text" name='loan limit'/>
            <select name="" id="">
               <option value="">Permenent</option>
               <option value="">temporary</option>
            </select>
            <select name="" id="">
               <option value="">Ehsan</option>
               <option value="">Ali</option>
            </select>
           </div>
           <div className={styles.labelPart2}>
             <label htmlFor="">Natinal card:</label>
             <label htmlFor="">Language</label>
             <label htmlFor="">Permenent Address:</label>
             <label htmlFor="">Current Address:</label>
           </div>
           <div className={styles.inputPart2}>
            <input type="text" />
              <select name="" id="">
                 <option value="">English</option>
                 <option value="">دری</option>
                 <option value="">پشتو</option>
              </select>
            <textarea/>
            <textarea/>    
           </div>
           <div className={styles.labelPart3}>
            <label>PhoneN.</label>
            <label htmlFor="">WhatsApp</label>
            <label htmlFor="">Email Adress</label>
            <label htmlFor="">Telegram</label>
           </div> 
           <div className={styles.inputPart3}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
           </div>
           <div className={styles.picture}>
            <img src="/about.jpg" alt="not found" />
            <Button type="primary">Take Picture</Button>
           </div>
        </form>
      </div>
      <div className='table'>  
      <table border="1">
          <tr>
            <th>ID</th>
            <th>ّFirst Name</th>
            <th>Last Name</th>
            <th>Father Name</th>
            <th>Gender</th>
            <th>job</th>
            <th>Natianal code</th>
            <th>Phone No</th>
            <th>Contract type</th>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
      </>
    )
}

export default Branch
