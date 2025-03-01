import styles from './Manage.module.css'
import Button from '../Button';
function SearchingPopup() {
    return (
        <div className={styles.container}>
            <form action="" >
            <div className={styles.formContainer}>
              <div className={styles.labelPart1}>
                <label>ID:</label>  
                <label>Name:</label>
                <label>ID Card:</label>
                <label>Phone Number:</label>
              </div>
                <div className={styles.inputPart1}>
                <input type="text" name="id" />
                <select name="name">
                    <option value="">select</option>
                </select>
                <input type="text"  name="idCardNumber"/>
                <input type="text" name="phoneNumber"/>
              </div>
            </div> 
            <Button tip="primary">Search</Button>
            <Button tip="primary">Cancle</Button>
            </form>
        </div>
    )
}

export default SearchingPopup
