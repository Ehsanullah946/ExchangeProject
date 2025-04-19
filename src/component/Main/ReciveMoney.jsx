import { useState } from 'react';
import { useContexts } from '../../contexs/AppContexts';
import Button from '../Button';
import Select from 'react-select';
import styles from './SAR.module.css'
import ReceiveMoneySearch from './SearchingPopup/ReceiveMoneySearch';
const data={
  branch:"",
  id:"",  
  transfer:"",
  receiver:"",
  amount:"",
  currency:"",
  charge:"",
  chargeType:"",
  passCharge:"",
  date: new Date().toISOString().split('T')[0], 
  customer:"",
  passTo:"",
  passNumber:"",
  guarantor:"",
  description:""
}
function ReciveMoney() {
    const{receiveMoney,updateReceiveMoney,addReceiveMoney,isActive,setIsActive,branch,isOpen,setIsOpen,guarantor,customer}=useContexts();
    const [formData,setFormData]=useState(data);

    const [lastSavedData,setLastSavedData]=useState({...formData});
    const handleChange=(e)=>{
         e.preventDefault();
         const {name,value}=e.target;
         if (name === 'amount' || name === 'id' || name==="charge" || name==="passCharge" || name==="passNumber") {
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
            updateReceiveMoney(formData)

        }else{
            addReceiveMoney(formData)
        }
        setLastSavedData(formData)
        setFormData(data)
    }
    function handleEdit(e){
        e.preventDefault();
        setIsActive(true)
        const receiveMoneyToEdit=receiveMoney.find(curs=> curs.id===formData.id);
        if(receiveMoneyToEdit){
            setFormData(receiveMoneyToEdit);
        }
    }
    function active(e){
        e.preventDefault();
        setIsActive(true)
        setFormData(data)
        
    }
    const handleSelectBranch = (selectedOption) => {
      setFormData((prevState) => ({
        ...prevState,
        branch: selectedOption ? selectedOption.value : '',
      }));
    };
    const handleSelectCustomer = (selectedOption) => {
      setFormData((prevState) => ({
        ...prevState,
        customer: selectedOption ? selectedOption.value : '',
      }));
    };
    const handleSelectGuarantor = (selectedOption) => {
      setFormData((prevState) => ({
        ...prevState,
        guarantor: selectedOption ? selectedOption.value : '',
      }));
    };
    const handleSelectPassTo = (selectedOption) => {
      setFormData((prevState) => ({
        ...prevState,
        branch: selectedOption ? selectedOption.value : '',
      }));
    };
    function cancel(e){
        e.preventDefault();
        setIsActive(false)
        setFormData(lastSavedData);
    }
    function openSearch(e){
      setIsOpen(true);
      e.preventDefault();
    }
    return (
        <>
      {isOpen ? <ReceiveMoneySearch/>:
 <div className={styles.container}>
    <form action='POST' onSubmit={handleSubmit} >
      <div className={styles.formContainer}>
        <div className={styles.labelPart1}>
            <label>Guarantor:</label>
            <label>Number:</label>
            <label>Transfer</label>
            <label>Reciver:</label>
            <label>Amount:</label>
            <label>Currency:</label>
            <label>charges:</label>
            <label>pass charge:</label>
        </div>
      <div className={styles.inputPart1}>
        {/* <select name='branch' required value={formData.branch} onChange={handleChange} disabled={!isActive}>
            <option value="">select</option>
            {branch.map((item,index)=>
            <option key={index} value={item.firstName}>{item.firstName}</option>  
            )}       
        </select>                                  */}
              <Select className={styles.selectOption}
                name="branch"
                value={{ label: formData.branch, value: formData.branch }}
                onChange={handleSelectBranch}
                options={branch.map((item) => ({
                  label: item.firstName,
                  value: item.firstName,
                }))}
                isSearchable 
                isDisabled={!isActive} 
              />
        <input type="text"  required name="id" value={formData.id} onChange={handleChange} disabled={!isActive}/>
        <input type="text" required name="transfer" value={formData.transfer} onChange={handleChange} disabled={!isActive}/>
        <input type='text'  required name='receiver' value={formData.receiver}  onChange={handleChange} disabled={!isActive}/>
        <input type="text"  required name='amount' value={formData.amount} onChange={handleChange} disabled={!isActive}/>
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
        <input type="text" name='passCharge' value={formData.passCharge} onChange={handleChange} disabled={!isActive}/>
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
            <input type="checkbox" />
            </div>
            <div>
            <label>pass to</label>
            <input type="checkbox" />
            </div>
            <label>passing number</label>
            <label>Guarantor</label>
            <label>Description</label>
        </div>
        <div className={styles.inputPart2}>
        <input type="text" name='date' onChange={handleChange} disabled={!isActive} value={formData.date}/>
        <div>
        <Select className={styles.selectOption}
                name="customer"
                value={{ label: formData.customer, value: formData.customer }}
                onChange={handleSelectCustomer}
                options={customer.map((item) => ({
                  label: item.firstName,
                  value: item.firstName,
                }))}
                isSearchable 
                isDisabled={!isActive} 
         />
        </div>
        <Select className={styles.selectOption}
                name="branch"
                value={{ label: formData.branch, value: formData.branch }}
                onChange={handleSelectPassTo}
                options={branch.map((item) => ({
                  label: item.firstName,
                  value: item.firstName,
                }))}
                isSearchable 
                isDisabled={!isActive} 
              />
        <input type="text" name='passNumber' value={formData.passNumber} onChange={handleChange} disabled={!isActive} />
        <div>
        <Select className={styles.selectOption}
                name="guarantor"
                value={{ label: formData.guarantor, value: formData.guarantor}}
                onChange={handleSelectGuarantor}
                options={guarantor.map((item) => ({
                  label: item.firstName,
                  value: item.firstName,
                }))}
                isSearchable 
                isDisabled={!isActive} 
              />
        </div>
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
        <th>Receive NO</th>
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
     {receiveMoney.map((receiveMoney, index) => (
        <tr key={receiveMoney.id}>
        <td>{receiveMoney.id}</td>
        <td>{receiveMoney.transfer}</td>
        <td>{receiveMoney.receiver}</td>
        <td>{receiveMoney.amount}</td>
        <td>{receiveMoney.currency}</td>
        <td>{receiveMoney.charge}</td>
        <td>{receiveMoney.chargeType}</td>
        <td>{receiveMoney.description}</td>
        </tr>
        ))}
      </tbody>
        </table>
    </div>
   </>
    )
}

export default ReciveMoney
