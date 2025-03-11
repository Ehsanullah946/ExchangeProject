import Button from '../Button';
import styles from './AddMoney.module.css'
function AddMoney() {
  const date=new Date();
    return (
      <>
        <div className={styles.container}>
          <form action='' >
          <div className={styles.formContainer}>
          <div className={styles.labelPart1}>
           <label>Account No.</label>
          <label>Account</label>
          <label>Amount</label>
        <label htmlFor="">Date</label>
         <label>description</label>
        </div>
        <div className={styles.inputPart1}>
           <input type="text" value={10} name='customer' disabled/>
          <select name="acount" id="">
            <option value={"Ehsanullah"}> Ehsanullah</option>
            <option value={"Ali"}>Ali</option>
            <option value={"Mahmod"}>Mahmod</option>
          </select>
         <input type="text"/>
         <input type="text" value={date}/>
         <textarea/>
        </div>
        <div className={styles.picture}>
            <img src="/about.jpg" alt="not found" />
            <Button type="primary">Take Picture</Button>
          </div>
        </div>
       </form>
        </div>
      <div className='table'>
      <table border="1">
      <tr>
        <th>No</th>
        <th>Customer</th>
        <th>Amount</th>
        <th>Currency</th>
        <th>Description</th>
        <th>Date</th>
      </tr>
    </table>
      </div>
      </>
    )
}

export default AddMoney
