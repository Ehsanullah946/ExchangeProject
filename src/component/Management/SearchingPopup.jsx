import styles from './SearchingPopup.module.css'
import Button from '../Button';
function SearchingPopup() {
    return (
        <div className={styles.searchContainer}>
            <form action="" >
            <div className={styles.formContain}>
              <div className={styles.labelPart}>
                <label>ID:</label>  
                <label>Name:</label>
                <label>ID Card:</label>
                <label>Phone Number:</label>
              </div>
                <div className={styles.inputPart}>
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
