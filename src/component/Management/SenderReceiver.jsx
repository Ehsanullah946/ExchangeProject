import { useState } from 'react';
import { useContexts } from '../../contexs/AppContexts';
import Button from '../Button';
import styles from './Manage.module.css'
function SenderReceiver() {
  const { addReceiver,receiver,setIsActive,setIsOpen,isActive,isOpen,updateReceiver } = useContexts();  
  const [formData,setFormData]=useState({
    id: "",
    firstName: "",
    lastName: "",
    fatherName: "",
    maritalStatus: "",
    job: "",
    phoneNumber:"",
    nationalCode:"",
    premenentAddress:"",
    currentAddress:"",
  });
  const [lastSavedData,setlastSavedData]=useState({...formData})
  function handleChange(e){
    const{name,value}=e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
  function openSearch(e) {
    e.preventDefault();
    setIsOpen(true);
  }
  function cancel(e) {
    e.preventDefault();
    setIsActive(false);
    setFormData(lastSavedData); 
  } 
  
  function handleSubmit(e){
    e.preventDefault();
  if(isActive && formData.id){
    updateReceiver(formData);
  }else{
    addReceiver(formData)
  }
  setlastSavedData(formData)
  setFormData({
    id: "",
    firstName: "",
    lastName: "",
    fatherName: "",
    maritalStatus: "",
    job: "",
    phoneNumber:"",
    nationalCode:"",
    premenentAddress:"",
    currentAddress:"",
  })
 }

 function handleEdit(e) {
   setIsActive(true);
   e.preventDefault();
   const receiverToEdit = receiver.find(cust => cust.id === formData.id);
   if (receiverToEdit) {
     setFormData(receiverToEdit);
    }
  }
  
  function active(e){
      setIsActive(true)
      setFormData({
      id: "",
      firstName: "",
      lastName: "",
      fatherName: "",
      maritalStatus: "",
      job: "",
      phoneNumber:"",
      nationalCode:"",
      premenentAddress:"",
      currentAddress:"",
    })
        e.preventDefault();
  }
    return (
      <>
        <div className={styles.container}>
        <form action="POST" onSubmit={handleSubmit} >
          <div className={styles.formContainer}>
           <div className={styles.labelPart1}>
             <label>ID:</label>
             <label>First Name:</label>
             <label>Last Name:</label>
             <label>Father Name:</label>
             <label>Marital:</label>
             <label>Job:</label>
           </div>
           <div className={styles.inputPart1}>
            <input type="text" name='id' value={formData.id} onChange={handleChange} disabled={!isActive} required  />
            <input type="text" name='firstName' value={formData.firstName} onChange={handleChange} disabled={!isActive} required />
            <input type="text" name='lastName' value={formData.lastName}  onChange={handleChange} disabled={!isActive} />
            <input type="text" name='fatherName' value={formData.fatherName} onChange={handleChange} disabled={!isActive} />
            <select name="maritalStatus" id="" value={formData.maritalStatus} onChange={handleChange} disabled={!isActive}>
                <option value="single">single</option>
                <option value="marid">Marid</option>
            </select>
            <input type="text" name='job' onChange={handleChange} value={formData.job} disabled={!isActive} />
           </div>
           <div className={styles.labelPart2}>
             <label htmlFor="">PhoneN</label>
             <label htmlFor="">natinal code:</label>
             <label htmlFor="">Permenent Address:</label>
             <label htmlFor="">Current Address:</label>
           </div>
           <div className={styles.inputPart2}>
            <input type="text" name='phoneNumber' onChange={handleChange} value={formData.phoneNumber} disabled={!isActive} />
            <input type="text" name='nationalCode' value={formData.nationalCode} onChange={handleChange} disabled={!isActive} />
            <textarea name='premenentAddress' value={formData.premenentAddress} onChange={handleChange} disabled={!isActive}/>
            <textarea name='currentAddress' value={formData.currentAddress} onChange={handleChange} disabled={!isActive}/>    
           </div>
           <div className={styles.picture}>
            <img src="/about.jpg" alt="not found" />
            <Button type="primary">Take Picture</Button>
           </div>
              </div>
           {isActive ? (
          <>
            <Button tip="primary" htmlType="submit">
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
          <th>First Name</th>
          <th>Last Name</th>
          <th>Father Name</th>
          <th>Gender</th>
          <th>Job</th>
          <th>National code</th>
          <th>phone Number</th>
        </tr>
      </thead>
      <tbody>
        {receiver.map((receiver, index) => (
          <tr key={receiver.id}>
            <td>{receiver.id}</td>
            <td>{receiver.firstName}</td>
            <td>{receiver.lastName}</td>
            <td>{receiver.fatherName}</td>
            <td>{receiver.maritalStatus}</td>
            <td>{receiver.job}</td>
            <td>{receiver.nationalCode}</td>
            <td>{receiver.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
        </table>
      </div>
      </>
    )
}

export default SenderReceiver
