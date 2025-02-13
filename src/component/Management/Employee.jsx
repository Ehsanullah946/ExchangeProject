import Button from '../Button';
import styles from './Manage.module.css'
function Employee() {
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
           </div>
           <div className={styles.inputPart1}>
            <input type="text" name='number' />
            <input type="text" name='Name' />
            <input type="text" name='LastName' />
            <input type="text" name='Father' />
            <select name="" id="">
                <option value="">single</option>
                <option value="">Marid</option>
            </select>
            <input type="text" name='job' />
           </div>
           <div className={styles.labelPart2}>
             <label htmlFor="">PhoneN</label>
             <label htmlFor="">natinal code:</label>
             <label htmlFor="">Permenent Address:</label>
             <label htmlFor="">Current Address:</label>
           </div>
           <div className={styles.inputPart2}>
            <input type="text" />
            <input type="text" />
            <textarea/>
            <textarea/>    
           </div>
           <div className={styles.labelPart3}>
            <label>Grpss Salary</label>
            <label htmlFor="">tax</label>
            <label htmlFor="">Net Salary</label>
            <label htmlFor="">Money Type</label>
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
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>

      </>
    )
}

export default Employee
