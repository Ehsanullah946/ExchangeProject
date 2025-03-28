import { useState } from 'react';
import { useContexts } from '../../contexs/AppContexts';
import Button from '../Button';
import styles from './Manage.module.css'
import EmployeeSearch from './SearchingPopup/EmployeeSearch';
const data={
  id:"",
  firstName:"",
  lastName:"",  
  fatherName:"",
  maritalStatus:"",
  job:"",
  phoneNumber:"",
  nationalCode:"",
  permenentAddress:"",
  currentAddress:"",
  GrapsSalary:"",
  tax:"",
  netSalary:"",
  moneyType:''
}
function Employee() {
  const{addEmployee,employee,isActive,setIsActive,updateEmployee,setIsOpen,isOpen} = useContexts();
  const [formData, setFormData] = useState(data);
  const [lastSavedData, setLastSavedData] = useState({...formData });
  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'tax' || name === 'id' || name === 'nationalCode' || name === 'GrapsSalary' || name === 'netSalary') {
      if (value === '' || !isNaN(value)) { // Allow empty string and numbers
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      }
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (isActive && formData.id) {
      updateEmployee(formData); 
    } else {
      addEmployee(formData);
    }  
    setLastSavedData(formData);
    setFormData(data);
  }

  function openSearch(e) {
    e.preventDefault();
    setIsOpen(true);
  }
  function handleEdit(e) {
    setIsActive(true);
    e.preventDefault();
    const employeetoEdit = employee.find(cust => cust.id === formData.id);
    if (employeetoEdit) {
      setFormData(employeetoEdit);
    }
  }
  function active(e) {
    setIsActive(true);
    setFormData(data);
    e.preventDefault();
  }

  function cancel(e) {
    e.preventDefault();
    setIsActive(false);
    setFormData(lastSavedData); 
  }                

    return (
      <>
         {isOpen ? <EmployeeSearch/> : 
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
          </div>
          <div className={styles.labelPart2}>
            <label>PhoneN:</label>
            <label>National code:</label>
            <label>Permanent Address:</label>
            <label>Current Address:</label>
          </div>

          <div className={styles.inputPart2}>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              disabled={!isActive}
            />
            <input type="text" 
              name="nationalCode"
              value={formData.nationalCode}
              onChange={handleChange}
              disabled={!isActive} />
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
            <label>Grapss Salary:</label>
            <label>tax:</label>
            <label>net Salary:</label>
            <label>Money type:</label>
          </div>
          <div className={styles.inputPart3}>
            <input
              type="text"
              name="GrapsSalary"
              value={formData.GrapsSalary}
              onChange={handleChange}
              disabled={!isActive}
            />
            <input
              type="text"
              name="tax"
              value={formData.tax}
              onChange={handleChange}
              disabled={!isActive}
            />
            <input
              type="text"
              name="netSalary"
              value={formData.netSalary}
              onChange={handleChange}
              disabled={!isActive}
            />
            <input
              type="text"
              name="moneyType"
              value={formData.moneyType}
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
          <th>National code</th>
          <th>phone Number</th>
          <th>net salary</th>
          <th>Money type</th>
        </tr>
      </thead>
      <tbody>
        {employee.map((employee, index) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.fatherName}</td>
            <td>{employee.maritalStatus}</td>
            <td>{employee.job}</td>
            <td>{employee.nationalCode}</td>
            <td>{employee.phoneNumber}</td>
            <td>{employee.netSalary}</td>
            <td>{employee.moneyType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
      </>
    )
}

export default Employee
