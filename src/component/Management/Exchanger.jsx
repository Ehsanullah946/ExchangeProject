import Button from '../Button';
import styles from './Manage.module.css'
function Exchanger() {
  return (
      <>
        <div className={styles.container}>
        <form action="" className={styles.formContainer}>
           <div className={styles.labelPart1}>
             <label>ID:</label>
             <label>First Name:</label>
             <label>Last Name:</label>
             <label>Father Name:</label>
             <label>PhoneNo.:</label>
             <label>National code:</label>
           </div>
           <div className={styles.inputPart1}>
            <input type="text" name='number'/>
            <input type="text" name='Name'/>   
            <input type="text" name='LastName'/>
            <input type="text" name='Father'/>
            <input type="text" name='PhoneN.'/>
            <input type="text" name='nationalCode'/>
           </div>
           <div className={styles.picture}>
            <img src="/about.jpg" alt="not found"/>
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

export default Exchanger
