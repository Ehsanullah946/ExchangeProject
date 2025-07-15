import { useContexts } from '../../contexs/AppContexts';
import Button from '../Button';
import styles from './AddMoney.module.css';
import { useState } from 'react';
import AccountToAccountSearch from './SearchingPopup/AccountToAccountSearch';
import { useTranslation } from 'react-i18next';
const data = {
  id: '',
  fromAccount: '',
  toAccount: '',
  amount: '',
  date: new Date().toISOString().split('T')[0],
  description: '',
};
function AcountToAcount() {
  const { t } = useTranslation();
  const {
    updateAccountToAccount,
    accountToAccount,
    isActive,
    setIsActive,
    isOpen,
    setIsOpen,
    accountToAccountMoney,
  } = useContexts();
  const [formData, setFormData] = useState(data);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === 'amount' || name === 'id') {
      if (value === '' || !isNaN(value)) {
        // Allow empty string and numbers
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      }
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const [lastSavedData, setLastSavedData] = useState({ ...formData });

  function handleSubmit(e) {
    e.preventDefault();
    if (isActive && formData.id) {
      updateAccountToAccount(formData);
    } else {
      accountToAccountMoney(formData);
    }
    setLastSavedData(formData);
    setFormData(data);
  }
  function active(e) {
    e.preventDefault();
    setIsActive(true);
    setFormData(data);
  }
  function cancel(e) {
    e.preventDefault();
    setIsActive(false);
    setFormData(lastSavedData);
  }
  function openSearch(e) {
    e.preventDefault();
    setIsOpen(true);
  }
  function handleEdit(e) {
    e.preventDefault();
    setIsActive(true);
    const accountToAccountToEdit = accountToAccount.find(
      (curs) => curs.id === formData.id
    );
    if (accountToAccountToEdit) {
      setFormData(accountToAccountToEdit);
    }
  }
  return (
    <>
      {isOpen ? (
        <AccountToAccountSearch />
      ) : (
        <div className={styles.container}>
          <form action="POST" onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
              <div className={styles.labelPart1}>
                <label>{t('Account No')}</label>
                <label>{t('From Account')}</label>
                <label>{t('To Account')}</label>
                <label>{t('Amount')}</label>
                <label htmlFor="">{t('Date')}</label>
                <label>{t('Description')}</label>
              </div>
              <div className={styles.inputPart1}>
                <input
                  type="text"
                  value={formData.id}
                  required
                  name="id"
                  onChange={handleChange}
                  disabled={!isActive}
                />
                <select
                  name="fromAccount"
                  required
                  id=""
                  value={formData.fromAccount}
                  onChange={handleChange}
                  disabled={!isActive}
                >
                  <option value=""> select</option>
                  <option value={'Ehsanullah'}> Ehsanullah</option>
                  <option value={'Ali'}>Ali</option>
                  <option value={'Mahmod'}>Mahmod</option>
                </select>
                <select
                  name="toAccount"
                  required
                  id=""
                  value={formData.toAccount}
                  onChange={handleChange}
                  disabled={!isActive}
                >
                  <option value="">select</option>
                  <option value={'Ehsanullah'}> Ehsanullah</option>
                  <option value={'Ali'}>Ali</option>
                  <option value={'Mahmod'}>Mahmod</option>
                </select>
                <input
                  type="text"
                  name="amount"
                  required
                  value={formData.amount}
                  onChange={handleChange}
                  disabled={!isActive}
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  disabled={!isActive}
                />
                <textarea
                  value={formData.description}
                  name="description"
                  onChange={handleChange}
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
                <Button tip="primary" onClick={openSearch}>
                  {t('Search')}
                </Button>
              </>
            )}
          </form>
        </div>
      )}
      <div className="table">
        <table border="1">
          <tr>
            <th>No</th>
            <th>ّFrom Account</th>
            <th>To Account</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
          {accountToAccount.map((accountToAccount) => (
            <tr key={accountToAccount.id}>
              <td>{accountToAccount.id}</td>
              <td>{accountToAccount.fromAccount}</td>
              <td>{accountToAccount.toAccount}</td>
              <td>{accountToAccount.amount}</td>
              <td>{accountToAccount.date}</td>
              <td>{accountToAccount.description}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default AcountToAcount;
