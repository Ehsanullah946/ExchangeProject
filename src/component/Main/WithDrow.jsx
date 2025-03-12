import { useState } from 'react';
import Button from '../Button';
import styles from './AddMoney.module.css'
import { useContexts } from '../../contexs/AppContexts';
function WithDrow() {
  const {withDrow,updateWithDrow,isActive,withDrowMoney,setIsActive,setIsOpen}=useContexts();
  const [formData,setFormData]=useState({
    id:"",
    account:"",
    amount:"",
    date:`${new Date()}`,
    description:"",
  })
  const [lastSavedData,setLastSavedData]=useState({...formData})

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      if(isActive && formData.id){
        updateWithDrow(formData)
      }else{
        withDrowMoney(formData);
      }
      setLastSavedData(formData);
      setFormData({
        id:"",
        account:"",
        amount:"",
        date:`${new Date()}`,
        description:"",
      })
     
  }
  function cancel(e){
    e.preventDefault();
    setIsActive(false);
    setFormData(lastSavedData);
  }
  function active(e){
    e.preventDefault();
    setIsActive(true);
     setFormData({
      id:"",
      account:"",
      amount:"",
      date:`${new Date()}`,
      description:"",
     })
  }
   function handleEdit(e){
    e.preventDefault();
    setIsActive(true);
    const withDrowToEdit=withDrow.find(cust=> cust.id===formData.id);
    if(withDrowToEdit){
      setFormData(withDrowToEdit);
    }
   }
   function openSearch(e) {
    e.preventDefault();
    setIsOpen(true);
  }
    return (
      <>
        <div className={styles.container}>
          <form action='POST' onSubmit={handleSubmit} >
          <div className={styles.formContainer}>
          <div className={styles.labelPart1}>
           <label>Account No</label>
          <label>Account</label>
          <label>Amount</label>
        <label htmlFor="">Date</label>
         <label>description</label>
        </div>
        <div className={styles.inputPart1}>
           <input type="text" required value={formData.id} name='id' onChange={handleChange} disabled={!isActive}/>
          <select name="account" required value={formData.account} id="" onChange={handleChange} disabled={!isActive}>
            <option value={"Ehsanullah"}> Ehsanullah</option>
            <option value={"Ali"}>Ali</option>
            <option value={"Mahmod"}>Mahmod</option>
          </select>
         <input type="text" className={styles.withdrow} required value={formData.amount} name="amount" onChange={handleChange} disabled={!isActive}/>
         <input type="text" name='date' value={formData.date} onChange={handleChange} disabled={!isActive}/>
         <textarea name='description' value={formData.description} onChange={handleChange} disabled={!isActive}/>
        </div>
        <div className={styles.picture}>
            <img src="/about.jpg" alt="not found" />
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
        {withDrow.map((withDrow, index) => (
          <tr key={withDrow.id}>
            <td>{withDrow.id}</td>
            <td>{withDrow.account}</td>
            <td>{withDrow.amount}</td>
            <td>{withDrow.currency}</td>
            <td>{withDrow.description}</td>
            <td>{withDrow.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
      </>
    )
}

export default WithDrow
