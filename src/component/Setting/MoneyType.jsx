import styles from './MoneyType.module.css'
import Button from "../Button"
import { useContexts } from '../../contexs/AppContexts'
const  data= {
    id:"",
    type:"",  
}
function MoneyType() {
    const {moneyType,updateMoneyType,addMoneyType,isActive,setIsActive,formData,setFormData}=useContexts();
    function handleChange(e){
        e.preventDefault();
        const{name,value}=e.target;
        setFormData(prevState=>({...prevState,[name]:value}))
    }
    function handleSubmit(e){
        e.preventDefault();
        if(isActive && formData.id){
            updateMoneyType(formData)
        }else{
            addMoneyType(formData)
        }
        setFormData(data);
    }
    function active(e){
        e.preventDefault();
        setIsActive(true)
        setFormData(data);
    }
    function cancel(e){
        e.preventDefault();
        setIsActive(false);
        setFormData({})
    }
    return (
        <>
        <div className={styles.container}>
        <form action='POST' onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
          <div className={styles.labelPart2}>    
          <label>number</label>
          <label>Money Type</label>
          </div>
          <div className={styles.inputPart2}>
          <input type="text" name='id' required value={formData.id} onChange={handleChange} disabled={!isActive}/>
          <input type="text" name='type' required value={formData.type} onChange={handleChange} disabled={!isActive}/>
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
          <Button tip="primary">Delete</Button>
        </>
      )} 
      </div>
           </form>
           </div>
           <div className='table'>
      <table border="1">
        <thead>
            <tr>
              <th>No</th>
              <th>Type</th>
            </tr>
        </thead>
        <tbody>
        {moneyType.map((moneyType,index)=>(
              <tr key={moneyType.id}>
              <td>{moneyType.id}</td>
              <td>{moneyType.type}</td>
            </tr>
           ))}
        </tbody>
          </table>
      </div>
          </>
    )
}

export default MoneyType
