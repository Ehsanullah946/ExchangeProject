import { useState } from 'react';
import { useContexts } from '../../contexs/AppContexts';
import Button from '../Button';
import styles from './DayBook.module.css'
import DailySearch from './SearchingPopup/DailySearch';
const data={
  date: new Date().toISOString().split('T')[0], 
  id:"",
  customer:"",
  rate:"",
  description:"",
}
function DayBook() {
  const {dayBook,addDayBook,updateDayBook,isActive,setIsActive,setIsOpen,isOpen}=useContexts();
  const[formData,setFormData]=useState(data)
  const [lastSavedData,setLastSavedData]=useState({...formData})
   function handleChange(e){
    e.preventDefault();
    const {name,value}=e.target;
    if (name === 'rate' || name === 'id') {
      if (value === '' || !isNaN(value)) { // Allow empty string and numbers
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      }
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    } 
   }
 
   function handleSubmit(e){
    e.preventDefault();
    if(isActive && formData.id){
      updateDayBook(formData)
    }else{
      addDayBook(formData)
    }
    setLastSavedData(formData)
    setFormData(data)
   }
   function active(e){
    e.preventDefault();
    setIsActive(true);
    setFormData(data)
    
   }
   function cancel(e){
    e.preventDefault();
    setIsActive(false)
    setFormData(lastSavedData);
   }

   function handleEdit(e){
    e.preventDefault();
    const dayBookToEdit= dayBook.find(curs=> curs.id=== formData.id);
    if(dayBookToEdit){
      setFormData(dayBookToEdit);
    }
   }
   function OpenSearch(e){
    e.preventDefault();
    setIsOpen(true);
   }
    return (
        <>
        {isOpen ? <DailySearch/>:
      <div className={styles.container}>
        <form action='POST' onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
             <div className={styles.labelPart1}>    
                <label>Date</label>
                <label>number</label>
                <label>Customer</label>
                <label>Rate</label>
                <label>Description</label>
                </div>
                <div className={styles.inputPart1}>
                <input type="date" name='date' value={formData.date} onChange={handleChange} disabled={!isActive}/>
                <input type="text" value={formData.id} name='id' onChange={handleChange} disabled={!isActive}/>
                <select name='customer' onChange={handleChange} value={formData.customer} disabled={!isActive}>
                    <option>Ehsan</option>
                    <option>Ali</option>
                    <option>Mahmod</option>
                </select>
                <input type="text" name='rate' value={formData.rate}  onChange={handleChange} disabled={!isActive} />
               <textarea name="description" value={formData.description}  onChange={handleChange} disabled={!isActive}/>
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
          </div>
          {isActive ? (
          <>
            <Button tip="primary" htmlType="submit" >
              Save
            </Button>
            <Button tip="primary" type="reset" onClick={cancel}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button tip="primary" onClick={active}>
              New
            </Button>
            <Button tip="primary" onClick={handleEdit}>
              Edit
            </Button>
            <Button tip="primary">Delete</Button>
            <Button tip="primary" onClick={OpenSearch}>
              Search
            </Button>
          </>
        )} 
        </form>
      </div>
      }
      <div className='table'>
    <table border="1">
      <thead>
          <tr>
            <th>No.</th>
            <th>Customer</th>
            <th>Deposit</th>
            <th>WithDrow</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Transaction</th>
          </tr>
      </thead>
      <tbody>
      {dayBook.map((dayBook,index)=>(
          <tr key={dayBook.id}>
            <td>{dayBook.id}</td>
            <td>{dayBook.customer}</td>
            <td>{dayBook.rate}</td>
            <td>{dayBook.amount}</td>
            <td>{dayBook.date}</td>
            <td>{dayBook.description}</td>
          </tr>
      ))}
      </tbody>
        </table>
    </div>
        </>
    )
}

export default DayBook
