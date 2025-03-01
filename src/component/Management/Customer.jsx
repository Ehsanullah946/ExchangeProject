import { useContext, useState } from 'react';
import Button from '../Button';
import styles from './Manage.module.css'
import {useContexts} from "../../contexs/AppContexts"
import SearchingPopup from './SearchingPopup';
// function Customer() {
//       const [isOpen,setIsOpen]=useState(false);
//       const {addCustomer,customer} = useContexts();
//       const [isActive, setIsActive]=useState(false);

//       function openSearch(e){
//       e.preventDefault();
//         setIsOpen(true);
//       }
//       function active(e){
//         setIsActive(true)
//         e.preventDefault();
//       }
//       function cancle(e){
//         e.preventDefault();
//         setIsActive(false)
//       }
//       const [formData,setFormData]=useState({
//         id:"",
//         firstName:"",
//         lastName:'',
//         fatherName:'',
//         maritalStatus:"",
//         job:"",
//         loanLimit:"",
//         nationalCard:'',
//         language:"",
//         permenentAddress:"",
//         currentAddress:"",
//         phoneNumber:"",
//         whatsapp:"",
//         email:"",
//         botChatId:''
//       });
//       function handleChage(e){
//        const {name,value}=e.target;
//        setFormData({...formData,[name]:value});
//       }
//      async function  handleSubmit(e){
//         e.preventDefault();
//         addCustomer(formData);
//         setFormData(formData[formData.length - 1] || {
//           id:"",
//           firstName:"",
//           lastName:'',
//           fatherName:'',
//           maritalStatus:"",
//           job:"",
//           loanLimit:"",
//           nationalCard:'',
//           language:"",
//           permenentAddress:"",
//           currentAddress:"",
//           phoneNumber:"",
//           whatsapp:"",
//           email:"",
//           botChatId:''
//         })
//       }
//     return (   
//       <>
//       {isOpen ? <SearchingPopup/>:
//          <div className={styles.container}>
//          <form action="POST" onSubmit={handleSubmit} >
//            <div className={styles.formContainer}>
//             <div className={styles.labelPart1}>
//               <label>ID:</label>
//               <label>First Name:</label>
//               <label>Last Name:</label>
//               <label>Father Name:</label>
//               <label>Marital:</label>
//               <label>Job:</label>
//               <label>Loan Limit:</label>
//             </div>
//             <div className={styles.inputPart1}>
//              <input type="text" required onChange={handleChage} value={formData.id} name='id' disabled={!isActive} />
//              <input type="text" required onChange={handleChage} value={formData.firstName} name='firstName'  disabled={!isActive}   />
//              <input type="text" onChange={handleChage} value={formData.lastName} name='lastName'  disabled={!isActive}  />
//              <input type="text" onChange={handleChage} value={formData.fatherName} name='fatherName'  disabled={!isActive}  />
//              <select name="maritalStatus" value={formData.maritalStatus} id="" onChange={handleChage}  disabled={!isActive} >
//                  <option value="">select</option>
//                  <option value="single">single</option>
//                  <option value="marid">Marid</option>
//              </select>
//              <input type="text" name='job' onChange={handleChage}  value={formData.job}  disabled={!isActive} />
//              <input type="text" name='loanLimit' onChange={handleChage}  value={formData.loanLimit}  disabled={!isActive}  />
//             </div>
//             <div className={styles.labelPart2}>
//               <label htmlFor="">Natinal card:</label>
//               <label htmlFor="">Language</label>
//               <label htmlFor="">Permenent Address:</label>
//               <label htmlFor="">Current Address:</label>
//             </div>
//             <div className={styles.inputPart2}>
//              <input type="text" name='nationalCard' onChange={handleChage} value={formData.nationalCard}  disabled={!isActive}/>
//                <select name="language" value={formData.language} onChange={handleChage} id=""  disabled={!isActive} >
//                   <option value="english">English</option>
//                   <option value="dari">دری</option>
//                   <option value="pashto">پشتو</option>
//                </select>
//              <textarea name='permenentAddress'  onChange={handleChage} value={formData.permenentAddress}  disabled={!isActive} />
//              <textarea name='currentAddress'  onChange={handleChage} value={formData.currentAddress}  disabled={!isActive} />    
//             </div>
//             <div className={styles.labelPart3}>
//              <label>PhoneN.</label>
//              <label htmlFor="">WhatsApp</label>
//              <label htmlFor="">Email Adress</label>
//              <label htmlFor="">Bot Chat ID</label>
//             </div> 
//             <div className={styles.inputPart3}>
//              <input type="text" name='phoneNumber'  onChange={handleChage} value={formData.phoneNumber}  disabled={!isActive}  />
//              <input type="text" name='whatsapp'  onChange={handleChage} value={formData.whatsapp}  disabled={!isActive}  />
//              <input type="text" name='email'  onChange={handleChage} value={formData.email}  disabled={!isActive}  />
//              <input type="text" name='botChatId'  onChange={handleChage} value={formData.botChatId}  disabled={!isActive}  />
//             </div>
//             <div className={styles.picture}>
//              <img src="/about.jpg" alt="not found" />
//              <Button type="primary">Take Picture</Button>
//             </div>
//            </div>
//          {isActive ? <> 
//              <Button tip="primary" type="submit">save</Button>
//              <Button tip="primary" onClick={cancle} type="reset">Cancle</Button>
//          </>
//          :  
//          <>
//          <Button tip="primary" onClick={active}>New</Button>
//          <Button tip="primary">Edit</Button>
//          <Button tip="primary">Delete</Button>
//          <Button tip="primary" onClick={openSearch}>Search</Button>
//          </>
//          }
//          </form>
//        </div>
//       }
        
//       <div className='table'>
//         <table border="1">
//           <thead>
//           <tr>
//             <th>ID</th>
//             <th>ّFirst Name</th>
//             <th>Last Name</th>
//             <th>Father Name</th>
//             <th>Gender</th>
//             <th>job</th>
//             <th>Phone No</th>
//             <th>WhatsApp</th>
//             <th>Email</th>
//             <th>Telegram ID</th>
//           </tr>
//           </thead>
//           <tbody>
//           {customer.map((customer,index)=>
//           <tr key={index}>
//             <td>{customer.id}</td>
//             <td>{customer.firstName}</td>
//             <td>{customer.lastName}</td>
//             <td>{customer.fatherName}</td>
//             <td>{customer.maritalStatus}</td>
//             <td>{customer.job}</td>
//             <td>{customer.phoneNumber}</td>
//             <td>{customer.whatsapp}</td>
//             <td>{customer.email}</td>
//             <td>{customer.botChatId}</td>
//           </tr>
//           )}
//         </tbody>
//         </table>
//       </div>
//       </>
      
//     )
// }
// function Customer() {       
//     const [isOpen, setIsOpen] = useState(false);       
//     const { addCustomer, customer } = useContexts();       
//     const [isActive, setIsActive] = useState(false);        
//     const [formData, setFormData] = useState({         
//         id: "",         
//         firstName: "",         
//         lastName: "",         
//         fatherName: "",         
//         maritalStatus: "",         
//         job: "",         
//         loanLimit: "",         
//         nationalCard: "",         
//         language: "",         
//         permenentAddress: "",         
//         currentAddress: "",         
//         phoneNumber: "",         
//         whatsapp: "",         
//         email: "",         
//         botChatId: ''       
//     });

//     function openSearch(e) {       
//         e.preventDefault();         
//         setIsOpen(true);       
//     }

//     function active(e) {         
//         setIsActive(true)         
//         e.preventDefault();     
//     }       

//     function cancel(e) {         
//         e.preventDefault();         
//         setIsActive(false);     
//     }       

//     function handleChange(e) {         
//         const { name, value } = e.target;         
//         setFormData({ ...formData, [name]: value });     
//     }       

//     async function handleSubmit(e) {         
//         e.preventDefault();         
//         addCustomer(formData);         
//         setFormData({           
//             id: "",           
//             firstName: "",           
//             lastName: "",           
//             fatherName: "",           
//             maritalStatus: "",           
//             job: "",           
//             loanLimit: "",           
//             nationalCard: "",           
//             language: "",           
//             permenentAddress: "",           
//             currentAddress: "",           
//             phoneNumber: "",           
//             whatsapp: "",           
//             email: "",           
//             botChatId: ''         
//         });       
//     }

//     return (         
//         <>         
//         {isOpen ? <SearchingPopup /> :          
//         <div className={styles.container}>             
//             <form action="POST" onSubmit={handleSubmit}>                 
//                 <div className={styles.formContainer}>                     
//                     <div className={styles.labelPart1}>                         
//                         <label>ID:</label>                         
//                         <label>First Name:</label>                         
//                         <label>Last Name:</label>                         
//                         <label>Father Name:</label>                         
//                         <label>Marital:</label>                         
//                         <label>Job:</label>                         
//                         <label>Loan Limit:</label>                     
//                     </div>                     
//                     <div className={styles.inputPart1}>                         
//                         <input type="text" required onChange={handleChange} value={formData.id} name='id' disabled={!isActive} />                         
//                         <input type="text" required onChange={handleChange} value={formData.firstName} name='firstName'  disabled={!isActive} />                         
//                         <input type="text" onChange={handleChange} value={formData.lastName} name='lastName'  disabled={!isActive} />                         
//                         <input type="text" onChange={handleChange} value={formData.fatherName} name='fatherName'  disabled={!isActive} />                         
//                         <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} disabled={!isActive} >                             
//                             <option value="">select</option>                             
//                             <option value="single">single</option>                             
//                             <option value="married">Married</option>                         
//                         </select>                         
//                         <input type="text" name='job' onChange={handleChange} value={formData.job} disabled={!isActive} />                         
//                         <input type="text" name='loanLimit' onChange={handleChange} value={formData.loanLimit} disabled={!isActive} />                     
//                     </div>                     
//                     <div className={styles.labelPart2}>                         
//                         <label htmlFor="">National card:</label>                         
//                         <label htmlFor="">Language</label>                         
//                         <label htmlFor="">Permanent Address:</label>                         
//                         <label htmlFor="">Current Address:</label>                     
//                     </div>                     
//                     <div className={styles.inputPart2}>                         
//                         <input type="text" name='nationalCard' onChange={handleChange} value={formData.nationalCard} disabled={!isActive} />                         
//                         <select name="language" value={formData.language} onChange={handleChange} disabled={!isActive} >                             
//                             <option value="english">English</option>                             
//                             <option value="dari">دری</option>                             
//                             <option value="pashto">پشتو</option>                         
//                         </select>                         
//                         <textarea name='permenentAddress' onChange={handleChange} value={formData.permenentAddress} disabled={!isActive} />                         
//                         <textarea name='currentAddress' onChange={handleChange} value={formData.currentAddress} disabled={!isActive} />                     
//                     </div>                     
//                     <div className={styles.labelPart3}>                         
//                         <label>PhoneN.</label>                         
//                         <label htmlFor="">WhatsApp</label>                         
//                         <label htmlFor="">Email Address</label>                         
//                         <label htmlFor="">Bot Chat ID</label>                     
//                     </div>                     
//                     <div className={styles.inputPart3}>                         
//                         <input type="text" name='phoneNumber' onChange={handleChange} value={formData.phoneNumber} disabled={!isActive} />                         
//                         <input type="text" name='whatsapp' onChange={handleChange} value={formData.whatsapp} disabled={!isActive} />                         
//                         <input type="text" name='email' onChange={handleChange} value={formData.email} disabled={!isActive} />                         
//                         <input type="text" name='botChatId' onChange={handleChange} value={formData.botChatId} disabled={!isActive} />                     
//                     </div>                     
//                     <div className={styles.picture}>                         
//                         <img src="/about.jpg" alt="not found" />                         
//                         <Button type="primary">Take Picture</Button>                     
//                     </div>                 
//                 </div>                 
//                 {isActive ? <>                         
//                     <Button tip="primary" type="submit">Save</Button>                         
//                     <Button tip="primary" onClick={cancel} type="reset">Cancel</Button>                     
//                 </> : <>                         
//                     <Button tip="primary" onClick={active}>New</Button>                         
//                     <Button tip="primary">Edit</Button>                         
//                     <Button tip="primary">Delete</Button>                         
//                     <Button tip="primary" onClick={openSearch}>Search</Button>                     
//                 </>}                 
//             </form>         
//         </div>       
//         }         
//         <div className='table'>             
//             <table border="1">                 
//                 <thead>                     
//                     <tr>                         
//                         <th>ID</th>                         
//                         <th>First Name</th>                         
//                         <th>Last Name</th>                         
//                         <th>Father Name</th>                         
//                         <th>Gender</th>                         
//                         <th>Job</th>                         
//                         <th>Phone No</th>                         
//                         <th>WhatsApp</th>                         
//                         <th>Email</th>                         
//                         <th>Telegram ID</th>                     
//                     </tr>                 
//                 </thead>                 
//                 <tbody>                     
//                     {customer.map((customer, index) =>                         
//                         <tr key={index}>                             
//                             <td>{customer.id}</td>                             
//                             <td>{customer.firstName}</td>                             
//                             <td>{customer.lastName}</td>                             
//                             <td>{customer.fatherName}</td>                             
//                             <td>{customer.maritalStatus}</td>                             
//                             <td>{customer.job}</td>                             
//                             <td>{customer.phoneNumber}</td>                             
//                             <td>{customer.whatsapp}</td>                             
//                             <td>{customer.email}</td>                             
//                             <td>{customer.botChatId}</td>                         
//                         </tr>                     
//                     )}                 
//                 </tbody>             
//             </table>         
//         </div>         
//         </>         
//     ); 
// }

function Customer() {  
  const [isOpen, setIsOpen] = useState(false);  
  const { addCustomer, customer,updateCustomer } = useContexts();  
  const [isActive, setIsActive] = useState(false);  
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    fatherName: "",
    maritalStatus: "",
    job: "",
    loanLimit: "",
    nationalCard: "",
    language: "",
    permenentAddress: "",
    currentAddress: "",
    phoneNumber: "",
    whatsapp: "",
    email: "",
    botChatId: ''
  });

  const [lastSavedData, setLastSavedData] = useState({ ...formData });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   addCustomer(formData); 
  //   setLastSavedData(formData); 
  //   setFormData({
  //     id: "",
  //     firstName: "",
  //     lastName: "",
  //     fatherName: "",
  //     maritalStatus: "",
  //     job: "",
  //     loanLimit: "",
  //     nationalCard: "",
  //     language: "",
  //     permenentAddress: "",
  //     currentAddress: "",
  //     phoneNumber: "",
  //     whatsapp: "",
  //     email: "",
  //     botChatId: ''
  //   }); // Reset form after submission
  // }
  async function handleSubmit(e) {
    e.preventDefault();
    if (isActive && formData.id) {
      updateCustomer(formData); 
    } else {
      addCustomer(formData);
    }  
    setLastSavedData(formData);
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      fatherName: "",
      maritalStatus: "",
      job: "",
      loanLimit: "",
      nationalCard: "",
      language: "",
      permenentAddress: "",
      currentAddress: "",
      phoneNumber: "",
      whatsapp: "",
      email: "",
      botChatId: ""
    });
  }

  function openSearch(e) {
    e.preventDefault();
    setIsOpen(true);
  }


  function handleEdit(e) {
    setIsActive(true);
    e.preventDefault();
    const customerToEdit = customer.find(cust => cust.id === formData.id);
    if (customerToEdit) {
      setFormData(customerToEdit);
    }
  }

  function active(e) {
    setIsActive(true);
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      fatherName: "",
      maritalStatus: "",
      job: "",
      loanLimit: "",
      nationalCard: "",
      language: "",
      permenentAddress: "",
      currentAddress: "",
      phoneNumber: "",
      whatsapp: "",
      email: "",
      botChatId: ''
    });
    e.preventDefault();
  }

  function cancel(e) {
    e.preventDefault();
    setIsActive(false);
    setFormData(lastSavedData); 
  }

  return (
    <>
  {isOpen ? (
    <SearchingPopup />
  ) : (
    <div className={styles.container}>
      <form action="POST" onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <div className={styles.labelPart1}>
            <label>ID:</label>
            <label>First Name:</label>
            <label>Last Name:</label>
            <label>Father Name:</label>
            <label>Marital Status:</label>
            <label>Job:</label>
            <label>Loan Limit:</label>
          </div>

          <div className={styles.inputPart1}>
          
            <input
              type="text"
              required
              name="id"
              value={formData.id}
              onChange={handleChange}
              disabled={!isActive}
            />
            <input
              type="text"
              required
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              disabled={!isActive}
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              disabled={!isActive}
            />
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              disabled={!isActive}
            />
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              disabled={!isActive}
            >
              <option value="">Select</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
            <input
              type="text"
              name="job"
              value={formData.job}
              onChange={handleChange}
              disabled={!isActive}
            />
            <input
              type="text"
              name="loanLimit"
              value={formData.loanLimit}
              onChange={handleChange}
              disabled={!isActive}
            />
          </div>

          <div className={styles.labelPart2}>
            <label>National Card:</label>
            <label>Language:</label>
            <label>Permanent Address:</label>
            <label>Current Address:</label>
          </div>

          <div className={styles.inputPart2}>
            <input
              type="text"
              name="nationalCard"
              value={formData.nationalCard}
              onChange={handleChange}
              disabled={!isActive}
            />
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              disabled={!isActive}
            >
              <option value="english">English</option>
              <option value="dari">دری</option>
              <option value="pashto">پشتو</option>
            </select>
            <textarea
              name="permenentAddress"
              value={formData.permenentAddress}
              onChange={handleChange}
              disabled={!isActive}
            />
            <textarea
              name="currentAddress"
              value={formData.currentAddress}
              onChange={handleChange}
              disabled={!isActive}
            />
          </div>

          <div className={styles.labelPart3}>
            <label>Phone Number:</label>
            <label>WhatsApp:</label>
            <label>Email Address:</label>
            <label>Bot Chat ID:</label>
          </div>

          <div className={styles.inputPart3}>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              disabled={!isActive}
            />
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              disabled={!isActive}
            />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isActive}
            />
            <input
              type="text"
              name="botChatId"
              value={formData.botChatId}
              onChange={handleChange}
              disabled={!isActive}
            />
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
  )}

  <div className="table">
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Father Name</th>
          <th>Gender</th>
          <th>Job</th>
          <th>Phone No</th>
          <th>WhatsApp</th>
          <th>Email</th>
          <th>Telegram ID</th>
        </tr>
      </thead>
      <tbody>
        {customer.map((customer, index) => (
          <tr key={customer.id}>
            <td>{customer.id}</td>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.fatherName}</td>
            <td>{customer.maritalStatus}</td>
            <td>{customer.job}</td>
            <td>{customer.phoneNumber}</td>
            <td>{customer.whatsapp}</td>
            <td>{customer.email}</td>
            <td>{customer.botChatId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</>
  );
}

export default Customer;



