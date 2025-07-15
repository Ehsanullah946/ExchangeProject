import { useState } from 'react';
import Button from '../Button';
import styles from './AddMoney.module.css';
import { useContexts } from '../../contexs/AppContexts';
import WithdrowSearch from './SearchingPopup/WithdrowSearch';
import MainNav from './MainNav';
import { useTranslation } from 'react-i18next';
const data = {
  id: '',
  account: '',
  amount: '',
  currency: '',
  date: new Date().toISOString().split('T')[0],
  description: '',
};
function WithDrow() {
  const { t } = useTranslation();
  const {
    withDrow,
    updateWithDrow,
    isActive,
    withDrowMoney,
    setIsActive,
    setIsOpen,
    isOpen,
  } = useContexts();
  const [formData, setFormData] = useState(data);
  const [lastSavedData, setLastSavedData] = useState({ ...formData });

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'amount' || name === 'id') {
      if (value === '' || !isNaN(value)) {
        // Allow empty string and numbers
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      }
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isActive && formData.id) {
      updateWithDrow(formData);
    } else {
      withDrowMoney(formData);
    }
    setLastSavedData(formData);
    setFormData(data);
  };

  function cancel(e) {
    e.preventDefault();
    setIsActive(false);
    setFormData(lastSavedData);
  }
  function active(e) {
    e.preventDefault();
    setIsActive(true);
    setFormData(data);
  }
  function handleEdit(e) {
    e.preventDefault();
    setIsActive(true);
    const withDrowToEdit = withDrow.find((cust) => cust.id === formData.id);
    if (withDrowToEdit) {
      setFormData(withDrowToEdit);
    }
  }
  function openSearch(e) {
    e.preventDefault();
    setIsOpen(true);
  }
  return (
    <>
      {isOpen ? (
        <WithdrowSearch />
      ) : (
        <div className={styles.container}>
          <form action="POST" onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
              <div className={styles.labelPart1}>
                <label>{t('Account No')}</label>
                <label>{t('Account')}</label>
                <label>{t('Amount')}</label>
                <label>{t('Currency')}</label>
                <label htmlFor="">{t('Date')}</label>
                <label>{t('Description')}</label>
              </div>
              <div className={styles.inputPart1}>
                <input
                  type="text"
                  required
                  value={formData.id}
                  name="id"
                  onChange={handleChange}
                  disabled={!isActive}
                />
                <select
                  name="account"
                  required
                  value={formData.account}
                  id=""
                  onChange={handleChange}
                  disabled={!isActive}
                >
                  <option value={'Ehsanullah'}>Ehsanullah</option>
                  <option value={'Ali'}>Ali</option>
                  <option value={'Mahmod'}>Mahmod</option>
                </select>
                <input
                  type="text"
                  className={styles.withdrow}
                  required
                  value={formData.amount}
                  name="amount"
                  onChange={handleChange}
                  disabled={!isActive}
                />
                <select
                  name="currency"
                  required
                  value={formData.currency}
                  id=""
                  onChange={handleChange}
                  disabled={!isActive}
                >
                  <option value="">select</option>
                  <option>AFG</option>
                  <option>USA</option>
                  <option>KD</option>
                </select>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  disabled={!isActive}
                />
                <textarea
                  name="description"
                  value={formData.description}
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
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {withDrow.map((withDrow, index) => (
              <tr key={withDrow.id}>
                <td>{withDrow.id}</td>
                <td>{withDrow.account}</td>
                <td>{withDrow.amount}</td>
                <td>{withDrow.currency}</td>
                <td>{withDrow.description}</td>
                <td>{withDrow.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WithDrow;
