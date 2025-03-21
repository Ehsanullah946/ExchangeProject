import { useContexts } from '../../contexs/AppContexts'
import Button from '../Button';
import styles from './SAR.module.css'
import { useState } from 'react';
const data={
  branch:"",
  id:"",  
  transfer:"",
  receiver:"",
  amount:"",
  currency:"",
  charge:"",
  chargeType:"",
  placeCharge:"",
  date: new Date().toISOString().split('T')[0], 
  customer:"",
  exchageMoney:"",
  guarantor:"",
  description:""
}
function SendMoney() {
    const{sendMoney,updateSendMoney,addSendMoney,isActive,setIsActive}=useContexts();
    const [formData,setFormData]=useState(data);
    const [lastSavedData,setLastSavedData]=useState({...formData});
    const handleChange=(e)=>{
         e.preventDefault();
         const {name,value}=e.target;
         if (name === 'amount' || name === 'id' || name==="charge" || name==="placeCharge" || name==="passNumber") {
          if (value === '' || !isNaN(value)) {
            setFormData((prevState) => ({ ...prevState, [name]: value }));
          }
        } else {
          setFormData((prevState) => ({ ...prevState, [name]: value }));
        } 
    }
    function handleSubmit(e){
        e.preventDefault();
        if(isActive && formData.id){
            updateSendMoney(formData)

        }else{
            addSendMoney(formData)
        }
        setLastSavedData(formData)
        setFormData(data)
    }
    function handleEdit(e){
        e.preventDefault();
        setIsActive(true)
        const sendMoneyToEdit=sendMoney.find(curs=> curs.id===formData.id);
        if(sendMoneyToEdit){
            setFormData(sendMoneyToEdit);
        }
    }
    function active(e){
        e.preventDefault();
        setIsActive(true)
        setFormData(data)    
    }
    function cancel(e){
        e.preventDefault();
        setIsActive(false)
        setFormData(lastSavedData);
    }
    return (
        <>
      <div className={styles.container}>
        <form action='POST' onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
            <div className={styles.labelPart1}>
                <label>Branch:</label>
                <label>Number:</label>
                <label>Transfer</label>
                <label>Receiver:</label>
                <label>Amount:</label>
                <label>Currency:</label>
                <label>charges:</label>
                <label>place charge:</label>
            </div>
            <div className={styles.inputPart1}>
            <select name='branch' required value={formData.branch} onChange={handleChange} disabled={!isActive}>
                <option value="">select</option>
                <option value={'Ehsan'}>Ehsan</option>
                <option value={'Ali'}>Ali</option>
                <option value={'Mahmod'}>Mohmod</option>
            </select>                                        
            <input type="text" required name="id" value={formData.id} onChange={handleChange} disabled={!isActive}/>
            <input type="text" required name="transfer" value={formData.transfer} onChange={handleChange} disabled={!isActive}/>
            <input type='text' required name='receiver' value={formData.receiver}  onChange={handleChange} disabled={!isActive}/>
            <input type="text" required name='amount' value={formData.amount} onChange={handleChange} disabled={!isActive}/>
            <select name='currency' required value={formData.currency} onChange={handleChange} disabled={!isActive}>
                <option value="">Cur</option>
                <option value={"AFG"}>AFG</option>
                <option value={"KD"}>KD</option>
                <option value={"USD"}>USD</option>
            </select>
            <div className={styles.charge} >
            <input type="text" name='charge' value={formData.charge} onChange={handleChange} disabled={!isActive}/>
            <select name='chargeType'  onChange={handleChange} disabled={!isActive}>
                <option>Cur</option>
                <option value={"AFG"}>AFG</option>
                <option value={"KD"}>KD</option>
                <option value={"USD"}>USD</option>
            </select>
            </div>
            <div className={styles.charge} >
            <input type="text" name='placeCharge' value={formData.placeCharge} onChange={handleChange} disabled={!isActive}/>
            <select  onChange={handleChange} disabled={!isActive}>
                <option value="">Cur</option>
                <option  value={"AFG"}>AFG</option>
                <option value={"KD"}>KD</option>
                <option value={"USD"}>USD</option>
            </select>
            </div>
            </div>
            <div className={styles.labelPart2}>
            <label>Date</label>
            <div>
            <label>customer</label>
            <input type="checkbox" onChange={handleChange} disabled={!isActive}/>
            </div>
            <label>Exchange Money</label>
            <label>Guarantor</label>
            <label>Description</label>
            </div>
            <div className={styles.inputPart2}>
            <input type="date" name='date' value={formData.date} onChange={handleChange} disabled={!isActive}/>
            <div>
            <select name='customer' value={formData.customer} onChange={handleChange} disabled={!isActive}>
                <option>Ehsan</option>
                <option>Ali</option>
                <option>Mohmod</option>
            </select>
            <button>➕</button>
            </div>
            <div>
            <input type="text" name='exchageMoney' value={formData.exchageMoney} onChange={handleChange} disabled={!isActive}/>
            <button>➕</button>
            </div>
            <select name='guarantor' value={formData.guarantor} onChange={handleChange} disabled={!isActive}>
            <option>Ehsan</option>
            <option>Ali</option>
            <option>Mohmod</option>
            </select>
            <textarea value={formData.description} name='description' onChange={handleChange} disabled={!isActive}/>  
            </div>
            <div className={styles.rightSection}>
            <img src="/about.jpg" alt="not found" />
                <div>
                <button>take picture</button>
                <button>select</button>
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
            <Button tip="primary">
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
        <th>Transfer NO</th>
        <th>sender</th>
        <th>Receiver</th>
        <th>Amount</th>
        <th>Amount Type</th>
        <th>Charge</th>
        <th>charge Type</th>
        <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {sendMoney.map((sendMoney, index) => (
          <tr key={sendMoney.id}>
            <td>{sendMoney.id}</td>
            <td>{sendMoney.transfer}</td>
            <td>{sendMoney.receiver}</td>
            <td>{sendMoney.amount}</td>
            <td>{sendMoney.currency}</td>
            <td>{sendMoney.charge}</td>
            <td>{sendMoney.chargeType}</td>
            <td>{sendMoney.description}</td>
          </tr>
        ))}
      </tbody>
        </table>
    </div>
  </>
    )
}

export default SendMoney
