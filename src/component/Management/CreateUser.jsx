import { useState } from 'react';
import styles from './Manage.module.css'
import { useContexts } from '../../contexs/AppContexts';
import Button from '../Button';
function CreateUser() {
  const { addCreateUser,createUser,setIsActive,setIsOpen,isActive,updateCreateUser } = useContexts();  
  const [formData,setFormData]=useState({
    id: "",
    userName: "",
    password: "",
    email: "",
    whatsapp:"",
    userType:"",
    employee:"",
    privilages:""
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
    updateCreateUser(formData);
  }else{
    addCreateUser(formData)
  }
  setlastSavedData(formData)
  setFormData({
    id: "",
    userName: "",
    password: "",
    email: "",
    whatsapp:"",
    userType:"",
    employee:"",
    privilages:""
  })
 }

 function handleEdit(e) {
   setIsActive(true);
   e.preventDefault();
   const changerToEdit = createUser.find(cust => cust.id === formData.id);
   if (changerToEdit) {
     setFormData(changerToEdit);
    }
  }
  
  function active(e){
      setIsActive(true)
      setFormData({
    id: "",
    userName: "",
    password: "",
    email: "",
    whatsapp:"",
    userType:"",
    employee:"",
    privilages:""
    })
        e.preventDefault();
  }
    return (
      <>
        <div className={styles.container}>
        <form action="" onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
           <div className={styles.labelPart1}>
             <label>ID:</label>
             <label>UserName:</label>
             <label>Password:</label>
             <label>Email:</label>
           </div>
           <div className={styles.inputPart1}>
            <input type="text" name='id' onChange={handleChange} disabled={!isActive} value={formData.id}/>
            <input type="text" name='userName' onChange={handleChange} disabled={!isActive} value={formData.userName}/>   
            <input type="password" name='password' onChange={handleChange} disabled={!isActive} value={FormData.password}/>
            <input type="email" name='email' onChange={handleChange} disabled={!isActive} value={formData.email}/>
           </div>
           <div className={styles.labelPart2}>
           <label>WhatsApp.:</label>
             <label>User Type:</label>
             <label>Employee:</label>
             <label>Privilages:</label>
           </div>
           <div className={styles.inputPart2}>
           <input type="text" name='whatsapp' onChange={handleChange} disabled={!isActive} value={formData.whatsapp}/>
            <select name="userType" id="" onChange={handleChange} disabled={!isActive} value={formData.userType}>
                <option value="administrator">administrator</option>
                <option value="emplyee">emplyee</option>
            </select>
            <select name="employee" id="" onChange={handleChange} disabled={!isActive} value={formData.employee} >
                <option value="Ehsanullah">Ehsanullah</option>
                <option value="Ali">Ali</option>
            </select>
            <input type="text" name='privilages' value={formData.privilages} onChange={handleChange} disabled={!isActive}/>
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
          <th>user Name</th>
          <th>Email</th>
          <th>Whats App</th>
          <th>user Type</th>
          <th>Employee</th>
          <th>Privilages</th>
        </tr>
      </thead>
      <tbody>
        {createUser.map((createUser, index) => (
          <tr key={createUser.id}>
            <td>{createUser.id}</td>
            <td>{createUser.userName}</td>
            <td>{createUser.email}</td>
            <td>{createUser.whatsapp}</td>
            <td>{createUser.userType}</td>
            <td>{createUser.employee}</td>
            <td>{createUser.privilages}</td>
          </tr>
        ))}
      </tbody>
        </table>
      </div>
      </>
    )
}

export default CreateUser
