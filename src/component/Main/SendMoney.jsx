import { useContexts } from '../../contexs/AppContexts';
import Button from '../Button';
import Select from 'react-select';
import styles from './SAR.module.css';
import { useState } from 'react';
import SendMoneySearch from './SearchingPopup/SendMoneySearch';
import { useTranslation } from 'react-i18next';
const data = {
  branch: '',
  id: '',
  transfer: '',
  receiver: '',
  amount: '',
  currency: '',
  charge: '',
  chargeType: '',
  placeCharge: '',
  date: new Date().toISOString().split('T')[0],
  customer: '',
  exchageMoney: '',
  guarantor: '',
  description: '',
};
function SendMoney() {
  const { t } = useTranslation();
  const {
    sendMoney,
    updateSendMoney,
    addSendMoney,
    isActive,
    setIsActive,
    isOpen,
    setIsOpen,
    branch,
    customer,
    guarantor,
  } = useContexts();
  const [isEnable, setIsEnable] = useState(false);
  const [formData, setFormData] = useState(data);
  const [lastSavedData, setLastSavedData] = useState({ ...formData });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (
      name === 'amount' ||
      name === 'id' ||
      name === 'charge' ||
      name === 'placeCharge' ||
      name === 'passNumber'
    ) {
      if (value === '' || !isNaN(value)) {
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      }
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (isActive && formData.id) {
      updateSendMoney(formData);
    } else {
      addSendMoney(formData);
    }
    setLastSavedData(formData);
    setFormData(data);
  }
  function handleEdit(e) {
    e.preventDefault();
    setIsActive(true);
    const sendMoneyToEdit = sendMoney.find((curs) => curs.id === formData.id);
    if (sendMoneyToEdit) {
      setFormData(sendMoneyToEdit);
    }
  }

  function handleEnable(e) {
    setIsEnable(e.target.value ? true : false);
  }

  const handleSelectChange = (selectedOption) => {
    setFormData((prevState) => ({
      ...prevState,
      branch: selectedOption ? selectedOption.value : '',
    }));
  };

  const handleSelectGuarantor = (selectedOption) => {
    setFormData((prevState) => ({
      ...prevState,
      guarantor: selectedOption ? selectedOption : '',
    }));
  };
  const handleSelectCustomer = (selectedOption) => {
    setFormData((prevState) => ({
      ...prevState,
      customer: selectedOption ? selectedOption : '',
    }));
  };

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
  function OpenSearch(e) {
    e.preventDefault();
    setIsOpen(true);
  }
  return (
    <>
      {isOpen ? (
        <SendMoneySearch />
      ) : (
        <div className={styles.container}>
          <form action="POST" onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
              <div className={styles.labelPart1}>
                <label>{t('Branch')}:</label>
                <label>{t('Number')}:</label>
                <label>{t('Transfer')}</label>
                <label>{t('Receiver')}:</label>
                <label>{t('Amount')}:</label>
                <label>{t('Currency')}:</label>
                <label>{t('charges')}:</label>
                <label>{t('place charge')}:</label>
              </div>
              <div className={styles.inputPart1}>
                <Select
                  className={styles.selectOption}
                  name="branch"
                  value={{ label: formData.branch, value: formData.branch }}
                  onChange={handleSelectChange}
                  options={branch.map((item) => ({
                    label: item.firstName,
                    value: item.firstName,
                  }))}
                  isSearchable
                  isDisabled={!isActive}
                />
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
                  name="transfer"
                  value={formData.transfer}
                  onChange={handleChange}
                  disabled={!isActive}
                />
                <input
                  type="text"
                  required
                  name="receiver"
                  value={formData.receiver}
                  onChange={handleChange}
                  disabled={!isActive}
                />
                <input
                  type="text"
                  required
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  disabled={!isActive}
                />
                <select
                  name="currency"
                  required
                  value={formData.currency}
                  onChange={handleChange}
                  disabled={!isActive}
                >
                  <option value="">Cur</option>
                  <option value={'AFG'}>AFG</option>
                  <option value={'KD'}>KD</option>
                  <option value={'USD'}>USD</option>
                </select>
                <div className={styles.charge}>
                  <input
                    type="text"
                    name="charge"
                    value={formData.charge}
                    onChange={handleChange}
                    disabled={!isActive}
                  />
                  <select
                    name="chargeType"
                    onChange={handleChange}
                    disabled={!isActive}
                  >
                    <option>Cur</option>
                    <option value={'AFG'}>AFG</option>
                    <option value={'KD'}>KD</option>
                    <option value={'USD'}>USD</option>
                  </select>
                </div>
                <div className={styles.charge}>
                  <input
                    type="text"
                    name="placeCharge"
                    value={formData.placeCharge}
                    onChange={handleChange}
                    disabled={!isActive}
                  />
                  <select onChange={handleChange} disabled={!isActive}>
                    <option value="">Cur</option>
                    <option value={'AFG'}>AFG</option>
                    <option value={'KD'}>KD</option>
                    <option value={'USD'}>USD</option>
                  </select>
                </div>
              </div>
              <div className={styles.labelPart2}>
                <label>{t('Date')}</label>
                <div>
                  <label>{t('Customer')}</label>
                  <input
                    type="checkbox"
                    onChange={handleEnable}
                    disabled={!isActive}
                  />
                </div>
                <label>{t('Exchange Money')}</label>
                <label>{t('Guarantor')}</label>
                <label>{t('Description')}</label>
              </div>
              <div className={styles.inputPart2}>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  disabled={!isActive}
                />
                <div>
                  <Select
                    className={styles.selectOption}
                    name="customer"
                    value={{
                      label: formData.customer,
                      value: formData.customer,
                    }}
                    onChange={handleSelectCustomer}
                    options={customer.map((item) => ({
                      label: item.firstName,
                      value: item.firstName,
                    }))}
                    isSearchable
                    isDisabled={!isActive}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="exchageMoney"
                    value={formData.exchageMoney}
                    onChange={handleChange}
                    disabled={!isActive}
                  />
                  <button>➕</button>
                </div>
                <Select
                  className={styles.selectOption}
                  name="guarantor"
                  value={{
                    label: formData.guarantor,
                    value: formData.guarantor,
                  }}
                  onChange={handleSelectGuarantor}
                  options={guarantor.map((item) => ({
                    label: item.firstName,
                    value: item.firstName,
                  }))}
                  isSearchable
                  isDisabled={!isActive}
                />
                <textarea
                  value={formData.description}
                  name="description"
                  onChange={handleChange}
                  disabled={!isActive}
                />
              </div>
              <div className={styles.rightSection}>
                <img src="/about.jpg" alt="not found" />
                <div>
                  <button>{'take picture'}</button>
                  <button>{t('select')}</button>
                </div>
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
  );
}

export default SendMoney;
