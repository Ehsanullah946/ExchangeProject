import { useState } from 'react';
import Button from '../Button';
import styles from './Manage.module.css'
import { useContexts } from '../../contexs/AppContexts';
const data={
  id: "",
  firstName: "",
  lastName: "",
  fatherName: "",
  phoneNumber:"",
  nationalCode:""
}
function Exchanger() {
  const { addChanger,changer,setIsActive,setIsOpen,isActive,updateChanger } = useContexts();  
  const [formData,setFormData]=useState(data);
  const [lastSavedData,setlastSavedData]=useState({...formData})
  function handleChange(e){
    const{name,value}=e.target;
    if (name === 'id' || name === 'phoneNumber' || name==="nationalCode") {
      if (value === '' || !isNaN(value)) { // Allow empty string and numbers
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      }
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
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
    updateChanger(formData);
  }else{
    addChanger(formData)
  }
  setlastSavedData(formData)
  setFormData(data)
 }

 function handleEdit(e) {
   setIsActive(true);
   e.preventDefault();
   const changerToEdit = changer.find(cust => cust.id === formData.id);
   if (changerToEdit) {
     setFormData(changerToEdit);
    }
  }
  
  function active(e){
      setIsActive(true)
      setFormData(data)
        e.preventDefault();
  }
  return (
      <>
        <div className={styles.container}>
        <form action="POST" onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
           <div className={styles.labelPart1}>
             <label>ID:</label>
             <label>First Name:</label>
             <label>Last Name:</label>
             <label>Father Name:</label>
             <label>PhoneNo.:</label>
             <label>National code:</label>
           </div>
           <div className={styles.inputPart1}>
            <input type="text" name='id' onChange={handleChange} value={formData.id} disabled={!isActive} />
            <input type="text" name='firstName' onChange={handleChange} value={formData.firstName} disabled={!isActive}/>   
            <input type="text" name='lastName' onChange={handleChange} value={formData.lastName} disabled={!isActive}/>
            <input type="text" name="fatherName" onChange={handleChange} value={formData.fatherName} disabled={!isActive}/>
            <input type="text" name='phoneNumber.' onChange={handleChange} value={formData.phoneNumber} disabled={!isActive}/>
            <input type="text" name='nationalCode' onChange={handleChange} value={formData.nationalCode} disabled={!isActive}/>
           </div>
           <div className={styles.picture}>
            <img src="/about.jpg" alt="not found"/>
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
        {changer.map((changer, index) => (
          <tr key={changer.id}>
            <td>{changer.id}</td>
            <td>{changer.firstName}</td>
            <td>{changer.lastName}</td>
            <td>{changer.fatherName}</td>
            <td>{changer.maritalStatus}</td>
            <td>{changer.job}</td>
            <td>{changer.nationalCode}</td>
            <td>{changer.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
        </table>
      </div>
    </>
    )
}

export default Exchanger
