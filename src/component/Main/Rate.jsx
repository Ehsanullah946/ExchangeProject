import { useState } from 'react';
import { useContexts } from '../../contexs/AppContexts'
import Button from '../Button'
import styles from './Rate.module.css'
function Rate() {
  const {rate,addRate,updateRate,isActive,setIsActive}=useContexts();

  const [formData,setFormData]=useState({
    date:`${new Date()}`, 
  });
    function handleChange(e){
      e.preventDefault();
      const{name,value}=e.target;
      setFormData(prevState=>({...prevState,[name]:value}))
    }
    const [savedLastData,setLastSavedData]=useState();

    function handleSubmit(e){
      e.preventDefault();
      if(isActive && formData){
        updateRate(formData)    
      }else{
        addRate(formData)
      }
    
    }
    return (
        <div className={styles.container}>
           <form action="" className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.date}>
             <label>Set date:</label>
             <input type="text" value="" />
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
              {isActive ? (
          <>
            <Button tip="primary" htmlType="submit" >
              Save
            </Button>
            <Button tip="primary" type="reset" >
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button tip="primary" >
              New
            </Button>
            <Button tip="primary">
              Edit
            </Button>
            <Button tip="primary">Delete</Button>
          </>
        )} 

           </form>
        </div>
    )
}

export default Rate
