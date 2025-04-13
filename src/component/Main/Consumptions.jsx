import { useState } from 'react';
import { useContexts } from '../../contexs/AppContexts';
import styles from './SAR.module.css'
import Button from '../Button';
import ConsumSearching from './SearchingPopup/ConsumSearching';
const data={
  date: new Date().toISOString().split('T')[0], 
  id:"",
  amount:"",
  currency:"",
  expenceType:"",
  description:""
}
function Consumptions() {
  const{expence,updateExpence,addExpence,isActive,setIsActive,isOpen,setIsOpen}=useContexts();
   const [formData,setFormData]=useState(data);
   const [lastSavedData,setLastSavedData]=useState({...formData})
   function handleChange(e){
    e.preventDefault();
    const {name,value}=e.target;
    if (name === 'amount' || name === 'id') {
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
      updateExpence(formData);
    }else{
      addExpence(formData)
    }
    setLastSavedData(formData)
    setFormData(data)
   }
   function cancel(e){
    e.preventDefault();
    setIsActive(false)
    setFormData(lastSavedData)
   }
   function active(e){
    e.preventDefault();
    setIsActive(true)
    setFormData(data)
   }
   function handleEdit(e){
    setIsActive(true)
    e.preventDefault();
    const expenceToEdit=expence.find(curs=> curs.id===formData.id);
    if(expenceToEdit){
      setFormData(expenceToEdit);
    }
   }
   function openSearch(e) {
    e.preventDefault();
    setIsOpen(true);
   }
    return (
    <>
    {isOpen ? <ConsumSearching/>:
      <div className={styles.container}>
      <form action='POST' onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
        <div className={styles.labelPart2}>    
        <label>Date</label>
        <label>number</label>
        <label>Amount</label>
        <label>Money Type</label>
        <label>Expence Type</label>
        <label>Description</label>
        </div>
        <div className={styles.inputPart2}>
        <input type="date" name='date' value={formData.date} onChange={handleChange} disabled={!isActive}/>
        <input type="text" name='id' required value={formData.id} onChange={handleChange} disabled={!isActive}/>
        <input type="text" name='amount' required value={formData.amount}  onChange={handleChange} disabled={!isActive}/>
        <select name='currency' required value={formData.currency} onChange={handleChange} disabled={!isActive}>
            <option>AFG</option>
            <option>USA</option>
            <option>KA</option>
        </select>
        <div>
        <select name='expenceType' value={formData.expenceType} onChange={handleChange} disabled={!isActive}>
        <option>Ehsan</option>
        <option>Ali</option>
        <option>Mohmod</option>
        </select>
        <button>➕</button>
        </div>
        <textarea name='description'value={formData.description} onChange={handleChange} disabled={!isActive}/>  
        </div>
        </div>
        <div className={styles.btn}>

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
        <Button tip="primary" onClick={openSearch}>
          Search
        </Button>
      </>
    )} 
    </div>
         </form>
         </div>
        }
         <div className='table'>
    <table border="1">
      <thead>
          <tr>
            <th>No</th>
            <th>ّAmount</th>
            <th>Currency</th>
            <th>Expence type</th>
            <th>Description</th>
          </tr>
      </thead>
      <tbody>
      {expence.map((expence,index)=>(
            <tr key={expence.id}>
            <td>{expence.id}</td>
            <td>{expence.amount}</td>
            <td>{expence.currency}</td>
            <td>{expence.expenceType}</td>
            <td>{expence.description}</td>
          </tr>
         ))}
      </tbody>
        </table>
    </div>

        </>
    )
}

export default Consumptions
