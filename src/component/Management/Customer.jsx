import { useContext, useState } from 'react';
import Button from '../Button';
import styles from './Manage.module.css'
import {useContexts} from "../../contexs/AppContexts"
import CustomerSearch from './SearchingPopup/CustomerSearch';
const data={
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
}
function Customer() {  
  const { addCustomer, customer,updateCustomer,setIsActive,setIsOpen,isActive,isOpen } = useContexts();  
  const [formData, setFormData] = useState(data);
  const [lastSavedData, setLastSavedData] = useState({ ...formData });
  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'loanLimit' || name === 'id' || name === 'nationalCard' || name === 'phoneNumber' || name === 'whatsapp') {
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
      updateCustomer(formData); 
    }else {
      addCustomer(formData);
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
    const customerToEdit = customer.find(cust => cust.id === formData.id);
    if (customerToEdit) {
      setFormData(customerToEdit);
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
      {isOpen ?
    <CustomerSearch/>
      :
      <>
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
            <Button tip="pic">Take Picture</Button>
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
}
</>
  );
}

export default Customer;



