import { useState } from 'react';
import { useContexts } from '../../contexs/AppContexts';
import styles from './SAR.module.css'
import Button from '../Button';
import ExchangeMoneySearch from './SearchingPopup/ExchangeMoneySearch';
import Select from 'react-select';
const data={
  id:"",
  selCurrency:"",
  purchesCurrency:"",
  rate:"",
  selAmount:"",
  purchesAmount:"",
  date: new Date().toISOString().split('T')[0], 
  changer:"",
  customer:"",
  description:""
}
function ExchangeMoney() {
    const{exchangeMoney,updateExchangeMoney,addExchangeMoney,isActive,setIsActive,isOpen,setIsOpen,customer,changer}=useContexts();
    const [formData,setFormData]=useState(data)
    const [lastSavedData,setLastSavedData]=useState({...formData});
    function handleChange(e){
        e.preventDefault();
        const {name,value}= e.target;
        if (name === 'amount' || name === 'id' || name==="rate" || name==="selAmount" || name==="purchesAmount") {
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
            updateExchangeMoney(formData)
        }else{
            addExchangeMoney(formData)
        }
        setLastSavedData(formData);
        setFormData(data)
    }
    function cancel(e){
     e.preventDefault();
     setIsActive(false)
     setFormData(lastSavedData);
    }
    function handleEdit(e){
        e.preventDefault();
        setIsActive(true);
        const ExchangeMoneyToEdit=exchangeMoney.find((curs)=> curs.id===formData.id);
        if(ExchangeMoneyToEdit){
            setFormData(ExchangeMoneyToEdit);
        }
    }

    const handleSelectCustomer = (selectedOption) => {
      setFormData((prevState) => ({
        ...prevState,
        customer: selectedOption ? selectedOption.value : '',
      }));
    };
    const handleSelectExchanger = (selectedOption) => {
      setFormData((prevState) => ({
        ...prevState,
        changer: selectedOption ? selectedOption.value : '',
      }));
    };
    
    function active(e){
        e.preventDefault();
        setIsActive(true);
        setFormData(data)
    }
    function openSearch(e){
       e.preventDefault();
       setIsOpen(true);
    
    }

    return (
        <>
        {isOpen ? <ExchangeMoneySearch/>:
           <div className={styles.container}>
              <form  action='POST' onSubmit={handleSubmit}>
                <div className={styles.formContainer}>
              <div className={styles.labelPart1}>
                  <label>Number:</label>
                  <label>Sel Currency</label>
                  <label>Purches Currency:</label>
                  <label>Rate:</label>
                  <div>  
                  <label>Sel Amount:</label>
                   <input type="checkbox" />
                  </div>
                  <label>Purchase Amount:</label>
              </div>
              <div className={styles.inputPart1}>
                  <input type="text" name="id" value={formData.id} disabled={!isActive} onChange={handleChange}/>
                  <select name='selCurrency' value={formData.selCurrency} disabled={!isActive} onChange={handleChange}>
                      <option>AFG</option>
                      <option>USA</option>
                      <option>KA</option>
                  </select> 
                  <select name='purchesCurrency' value={formData.purchesCurrency} disabled={!isActive} onChange={handleChange}>
                      <option>AFG</option>
                      <option>USA</option>
                      <option>KA</option>
                  </select> 
                  <input type="text" name="rate" value={formData.rate} disabled={!isActive} onChange={handleChange} />  
                  <input type='text' name='selAmount' value={formData.selAmount} disabled={!isActive} onChange={handleChange}/>
                  <input type="text" name='purchesAmount' value={formData.purchesAmount} disabled={!isActive} onChange={handleChange}/>
                  <div className={styles.charge} >
                  </div>
              </div>
              <div className={styles.labelPart2}>
                  <label>Date</label>
                  <div>
                  <label>Exchager</label>
                  <input type="checkbox" />
                  </div>
                  <div>
                  <label>customer</label>
                  <input type="checkbox" />
                  </div>
                  <label>Description</label>
              </div>
              <div className={styles.inputPart2}>
              <input type="date" name='date' value={formData.date} disabled={!isActive} onChange={handleChange}/>
              <div>
              <Select className={styles.selectOption}
                name="changer"
                value={{ label: formData.changer, value: formData.changer }}
                onChange={handleSelectExchanger}
                options={changer.map((item) => ({
                  label: item.firstName,
                  value: item.firstName,
                }))}
                isSearchable 
                isDisabled={!isActive} 
             /> 
              </div>
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
              <textarea value={formData.description} name='description' disabled={!isActive} onChange={handleChange}/>  
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
            <th>No.</th>
            <th>ّRate</th>
            <th>Sale Amount</th>
            <th>Sale Currency</th>
            <th>Purchase Amount</th>
            <th>Purchase Currency</th>
            <th>Exchanger</th>
            <th>customer</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
            {exchangeMoney.map((exchangeMoney,index)=>(
            <tr key={exchangeMoney.id}>
            <td>{exchangeMoney.id}</td>
            <td>{exchangeMoney.rate}</td>
            <td>{exchangeMoney.selAmount}</td>
            <td>{exchangeMoney.selCurrency}</td>
            <td>{exchangeMoney.purchesAmount}</td>
            <td>{exchangeMoney.purchesCurrency}</td>
            <td>{exchangeMoney.exchanger}</td>
            <td>{exchangeMoney.customer}</td>
            <td>{exchangeMoney.date}</td>
            <td>{exchangeMoney.description}</td>
          </tr>
         ))}
        </tbody>
        </table>
    </div>
        </>
    )
}

export default ExchangeMoney
