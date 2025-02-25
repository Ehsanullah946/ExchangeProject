// import { useContext } from 'react';
import Button from '../Button';
import styles from './Manage.module.css'
import {useContexts} from "../../contexs/AppContexts"
import { useState } from 'react';
function Branch() {
     const{addBranch,branch}=useContexts();
     const [formData,setFormData]=useState({
             id:"",
             firstName:"",
             lastName:'',
             fatherName:'',
             maritalStatus:"",
             job:"",
             loanLimit:"",
             customerType:"",
             charge:'',
             nationalCard:'',
             language:"",
             permenentAddress:"",
             currentAddress:"",
             phoneNumber:"",
             whatsapp:"",
             email:"",
             botChatId:''
           });
           function handleChage(e){
            const {name,value}=e.target;
            setFormData({...formData,[name]:value});
           }
          async function  handleSubmit(e){
             e.preventDefault();
             addBranch(formData);
             setFormData({
               id:"",
               firstName:"",
               lastName:'',
               fatherName:'',
               maritalStatus:"",
               job:"",
               loanLimit:"",
               customerType:"",
               charge:'',
               nationalCard:'',
               language:"",
               permenentAddress:"",
               currentAddress:"",
               phoneNumber:"",
               whatsapp:"",
               email:"",
               botChatId:''
             })
           }
    return (
      <>
        <div className={styles.container}>
        <form action="POST" onSubmit={handleSubmit} className={styles.formContainer}>
           <div className={styles.labelPart1}>
             <label>ID:</label>
             <label>First Name:</label>
             <label>Last Name:</label>
             <label>Father Name:</label>
             <label>Marital:</label>
             <label>Job:</label>
             <label>Loan Limit:</label>
             <label>Customer Type:</label>  
             <label>charge:</label>  
           </div>
           <div className={styles.inputPart1}>
            <input type="text" required name='id' onChange={handleChage} value={formData.id}/>
            <input type="text" required onChange={handleChage} value={formData.firstName} name='firstName'/>
            <input type="text" onChange={handleChage} value={formData.lastName} name='lastName'/>
            <input type="text" onChange={handleChage} value={formData.fatherName} name='fatherName'/>
            <select name="maritalStatus" value={formData.maritalStatus} id="" onChange={handleChage}>
                <option value="">select</option>
                <option value="single">single</option>
                <option value="marid">Marid</option>
            </select>
            <input type="text" name='job' onChange={handleChage}  value={formData.job}/>
            <input type="text" name='loanLimit' onChange={handleChage}  value={formData.loanLimit} />
            <select name="customerType" value={formData.customerType} id="" handleChage={handleChage} >
               <option value="permenent">Permenent</option>
               <option value="temporay">temporary</option>
            </select>
            <select name="charge" value={formData.charge} onChange={handleChage} id="">
               <option value="Ehsan">Ehsan</option>
               <option value="Ali">Ali</option>
            </select>
           </div>
           <div className={styles.labelPart2}>
             <label htmlFor="">National card:</label>
             <label htmlFor="">Language</label>
             <label htmlFor="">Permenent Address:</label>
             <label htmlFor="">Current Address:</label>
           </div>
           <div className={styles.inputPart2}>
           <input type="text" name='nationalCard' onChange={handleChage} value={formData.nationalCard} />
              <select name="language" value={formData.language} onChange={handleChage} id="">
                 <option value="english">English</option>
                 <option value="dari">دری</option>
                 <option value="pashto">پشتو</option>
              </select>
              <textarea name='permenentAddress'  onChange={handleChage} value={formData.permenentAddress}/>
              <textarea name='currentAddress'  onChange={handleChage} value={formData.currentAddress}/>      
           </div>
           <div className={styles.labelPart3}>
            <label>PhoneN.</label>
            <label htmlFor="">WhatsApp</label>
            <label htmlFor="">Email Adress</label>
            <label htmlFor="">Telegram</label>
           </div> 
           <div className={styles.inputPart3}>
           <input type="text" name='phoneNumber'  onChange={handleChage} value={formData.phoneNumber} />
            <input type="text" name='whatsapp'  onChange={handleChage} value={formData.whatsapp} />
            <input type="text" name='email'  onChange={handleChage} value={formData.email} />
            <input type="text" name='botChatId'  onChange={handleChage} value={formData.botChatId} />
           </div>
           <button type='submit'>submit</button>
           <div className={styles.picture}>
            <img src="/about.jpg" alt="not found" />
            <Button type="primary">Take Picture</Button>
           </div>
        </form>
      </div>
      <div className='table'>  
      <table border="1">
      <thead>
          <tr>
            <th>ID</th>
            <th>ّFirst Name</th>
            <th>Last Name</th>
            <th>Father Name</th>
            <th>Gender</th>
            <th>job</th>
            <th>Phone No</th>
            <th>WhatsApp</th>
            <th>Email</th>
            <th>Telegram ID</th>
          </tr>
          </thead>
          <tbody>
          {branch.map((branch,index)=>
          <tr key={index}>
            <td>{branch.id}</td>
            <td>{branch.firstName}</td>
            <td>{branch.lastName}</td>
            <td>{branch.fatherName}</td>
            <td>{branch.maritalStatus}</td>
            <td>{branch.job}</td>
            <td>{branch.phoneNumber}</td>
            <td>{branch.whatsapp}</td>
            <td>{branch.email}</td>
            <td>{branch.botChatId}</td>
          </tr>
          )}
        </tbody>
        </table>
      </div>
      </>
    )
}

export default Branch
