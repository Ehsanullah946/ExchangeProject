// import { useContext } from 'react';
import Button from '../Button';
import styles from './Manage.module.css';
import { useContexts } from '../../contexs/AppContexts';
import { useState } from 'react';
import BranchSearch from './SearchingPopup/BranchSearch';
import { useTranslation } from 'react-i18next';
const data = {
  id: '',
  firstName: '',
  lastName: '',
  fatherName: '',
  maritalStatus: '',
  job: '',
  loanLimit: '',
  charge: '',
  nationalCard: '',
  language: '',
  permenentAddress: '',
  currentAddress: '',
  phoneNumber: '',
  whatsapp: '',
  email: '',
  botChatId: '',
};
function Branch() {
  const { t } = useTranslation();
  const {
    addBranch,
    branch,
    isActive,
    setIsActive,
    isOpen,
    setIsOpen,
    updateBranch,
  } = useContexts();
  function openSearch(e) {
    e.preventDefault();
    setIsOpen(true);
  }
  const [formData, setFormData] = useState(data);
  const [lastSavedData, setLastSavedData] = useState({ ...formData });
  function handleChage(e) {
    const { name, value } = e.target;
    if (
      name === 'loanLimit' ||
      name === 'id' ||
      name === 'nationalCard' ||
      name === 'phoneNumber' ||
      name === 'whatsapp'
    ) {
      if (value === '' || !isNaN(value)) {
        // Allow empty string and numbers
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      }
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (isActive && formData.id) {
      updateBranch(formData);
    } else {
      addBranch(formData);
    }
    setLastSavedData(formData);
    setFormData(data);
  }
  function cancel(e) {
    e.preventDefault();
    setIsActive(false);
    setFormData(lastSavedData);
  }
  function active(e) {
    setIsActive(true);
    setFormData(data);
    e.preventDefault();
  }
  function handleEdit(e) {
    setIsActive(true);
    e.preventDefault();
    const branchToEdit = branch.find((cust) => cust.id === formData.id);
    if (branchToEdit) {
      setFormData(branchToEdit);
    }
  }
  return (
    <>
      {isOpen ? (
        <BranchSearch />
      ) : (
        <div className={styles.container}>
          <form action="POST" onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
              <div className={styles.labelPart1}>
                <label>{t('ID')}:</label>
                <label>{t('First Name')}:</label>
                <label>{t('Last Name')}:</label>
                <label>{t('Father Name')}:</label>
                <label>{t('Marital')}:</label>
                <label>{t('Job')}:</label>
                <label>{t('Loan Limit')}:</label>
                <label>{t('charge')}:</label>
              </div>
              <div className={styles.inputPart1}>
                <input
                  type="text"
                  required
                  name="id"
                  onChange={handleChage}
                  value={formData.id}
                  disabled={!isActive}
                />
                <input
                  type="text"
                  required
                  onChange={handleChage}
                  value={formData.firstName}
                  name="firstName"
                  disabled={!isActive}
                />
                <input
                  type="text"
                  onChange={handleChage}
                  value={formData.lastName}
                  name="lastName"
                  disabled={!isActive}
                />
                <input
                  type="text"
                  onChange={handleChage}
                  value={formData.fatherName}
                  name="fatherName"
                  disabled={!isActive}
                />
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  id=""
                  onChange={handleChage}
                  disabled={!isActive}
                >
                  <option value="">select</option>
                  <option value="single">single</option>
                  <option value="marid">Marid</option>
                </select>
                <input
                  type="text"
                  name="job"
                  onChange={handleChage}
                  value={formData.job}
                  disabled={!isActive}
                />
                <input
                  type="text"
                  name="loanLimit"
                  onChange={handleChage}
                  value={formData.loanLimit}
                  disabled={!isActive}
                />
                <select
                  name="charge"
                  value={formData.charge}
                  onChange={handleChage}
                  id=""
                  disabled={!isActive}
                >
                  <option value="Ehsan">Ehsan</option>
                  <option value="Ali">Ali</option>
                </select>
              </div>
              <div className={styles.labelPart2}>
                <label htmlFor="">{t('National card')}:</label>
                <label htmlFor="">{t('Language')}</label>
                <label htmlFor="">{t('Permenent Address')}:</label>
                <label htmlFor="">{t('Current Address')}:</label>
              </div>
              <div className={styles.inputPart2}>
                <input
                  type="text"
                  name="nationalCard"
                  onChange={handleChage}
                  value={formData.nationalCard}
                  disabled={!isActive}
                />
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChage}
                  id=""
                  disabled={!isActive}
                >
                  <option value="english">English</option>
                  <option value="dari">دری</option>
                  <option value="pashto">پشتو</option>
                </select>
                <textarea
                  name="permenentAddress"
                  onChange={handleChage}
                  value={formData.permenentAddress}
                  disabled={!isActive}
                />
                <textarea
                  name="currentAddress"
                  onChange={handleChage}
                  value={formData.currentAddress}
                  disabled={!isActive}
                />
              </div>
              <div className={styles.labelPart3}>
                <label>{t('PhoneN')}.</label>
                <label htmlFor="">{t('WhatsApp')}</label>
                <label htmlFor="">{t('Email Address')}</label>
                <label htmlFor="">{t('Telegram')}</label>
              </div>
              <div className={styles.inputPart3}>
                <input
                  type="text"
                  name="phoneNumber"
                  onChange={handleChage}
                  value={formData.phoneNumber}
                  disabled={!isActive}
                />
                <input
                  type="text"
                  name="whatsapp"
                  onChange={handleChage}
                  value={formData.whatsapp}
                  disabled={!isActive}
                />
                <input
                  type="text"
                  name="email"
                  onChange={handleChage}
                  value={formData.email}
                  disabled={!isActive}
                />
                <input
                  type="text"
                  name="botChatId"
                  onChange={handleChage}
                  value={formData.botChatId}
                  disabled={!isActive}
                />
              </div>
              <div className={styles.picture}>
                <img src="/about.jpg" alt="not found" />
                <Button tip="pic">{t('Take Picture')}</Button>
              </div>
            </div>
            {isActive ? (
              <>
                <Button tip="primary" htmlType="submit">
                  {t('Save')}
                </Button>
                <Button tip="primary" type="reset" onClick={cancel}>
                  {t('Cancel')}
                </Button>
              </>
            ) : (
              <>
                <Button tip="primary" onClick={active}>
                  {t('New')}
                </Button>
                <Button tip="primary" onClick={handleEdit}>
                  {t('Edit')}
                </Button>
                <Button tip="primary">{t('Delete')}</Button>
                <Button tip="primary">{t('Search')}</Button>
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
            {branch.map((branch, index) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Branch;
