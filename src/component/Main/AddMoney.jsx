import { useState } from 'react';
import { useContexts } from '../../contexs/AppContexts';
import Button from '../Button';
import styles from './AddMoney.module.css'
import AddMoneySearch from './SearchingPopup/AddMoneySearch';
const data={
  id:"",
  account:"",
  amount:"",
  currency:"",
  date: new Date().toISOString().split('T')[0], 
  description:"",
}
function AddMoney() {
  const {deposit,updateDeposit,isActive,depositMoney,setIsActive,setIsOpen,isOpen}=useContexts();
  const [formData,setFormData]=useState(data)
  const [lastSavedData,setLastSavedData]=useState({...formData})
  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'amount' || name === 'id') {
      if (value === '' || !isNaN(value)) { // Allow empty string and numbers
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      }
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    } 
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      if(isActive && formData.id){
        updateDeposit(formData)
      }else{
        depositMoney(formData);
      }
      setLastSavedData(formData);
      setFormData(data)  
  }
  function cancel(e){
    e.preventDefault();
    setIsActive(false);
    setFormData(lastSavedData);
  }
  function active(e){
    e.preventDefault();
    setIsActive(true);
     setFormData(data)
  }
   function handleEdit(e){
    e.preventDefault();
    setIsActive(true)
    const DepositToEdit=deposit.find(cust=> cust.id===formData.id);
    if(DepositToEdit){
      setFormData(DepositToEdit);
    }
   }
   function openSearch(e) {
    e.preventDefault();
    setIsOpen(true);
  }
    return (
      <>
      {isOpen ? <AddMoneySearch/>:
        <div className={styles.container}>
          <form action='POST' onSubmit={handleSubmit} >
          <div className={styles.formContainer}>
          <div className={styles.labelPart1}>
           <label>Account No</label>
          <label>Account</label>
          <label>Amount</label>
          <label>Currency</label>
        <label htmlFor="">Date</label>
         <label>description</label>
        </div>
        <div className={styles.inputPart1}>
           <input type="text" required value={formData.id} name='id' onChange={handleChange} disabled={!isActive}/>
          <select name="account" required value={formData.account} id="" onChange={handleChange} disabled={!isActive}>
            <option value="">select</option>
            <option value={"Ehsanullah"}>Ehsanullah</option>
            <option value={"Ali"}>Ali</option>
            <option value={"Mahmod"}>Mahmod</option>
          </select>
         <input type="text" required value={formData.amount} name="amount" onChange={handleChange} disabled={!isActive}/>
         <select name="currency" required value={formData.currency} id="" onChange={handleChange} disabled={!isActive}>
            <option value="">select</option>
            <option >AFG</option>
            <option >USA</option>
            <option >KD</option>
          </select>
         <input type="date" name='date' value={formData.date} onChange={handleChange} disabled={!isActive}/>
         <textarea name='description' value={formData.description} onChange={handleChange} disabled={!isActive}/>
        </div>
        <div className={styles.picture}>
            <img src="/about.jpg" alt="not found"/>
            <Button type="primary">Take Picture</Button>
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
            <Button tip="primary" onClick={openSearch}>
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
        <th>ID</th>
        <th>Customer</th>
        <th>Amount</th>
        <th>Currency</th>
        <th>Description</th>
        <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {deposit.map((deposit, index) => (
          <tr key={deposit.id}>
            <td>{deposit.id}</td>
            <td>{deposit.account}</td>
            <td>{deposit.amount}</td>
            <td>{deposit.currency}</td>
            <td>{deposit.description}</td>
            <td>{deposit.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
   </div>
  </>
    )
}

export default AddMoney

     