// import Button from '../Button';
import styles from './Manage.module.css'
function CreateUser() {
    return (
      <>
        <div className={styles.container}>
        <form action="" className={styles.formContainer}>
           <div className={styles.labelPart1}>
             <label>ID:</label>
             <label>UserName:</label>
             <label>Password:</label>
             <label>Email:</label>
             <label>WhatsApp.:</label>
             <label>User Type:</label>
             <label>Employee:</label>
             <label>Privilages:</label>
           </div>
           <div className={styles.inputPart1}>
            <input type="text" name='number'/>
            <input type="text" name='Name'/>   
            <input type="password" name='password'/>
            <input type="email" name='email'/>
            <input type="text" name='whatsApp.'/>
            <select name="" id="">
                <option value="">administrator</option>
            </select>
            <select name="" id="">
                <option value="">Ehsanullah</option>
                <option value="">Ali</option>
            </select>
            <input type="text" name='prevelages'/>
           </div>
        </form>
      </div>
      <div className='table'>
      <table border="1">
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Email</th>
            <th>WhatsApp</th>
            <th>User Type</th>
            <th>Employee</th>
            <th>Prevelages</th>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
      </>
    )
}

export default CreateUser
