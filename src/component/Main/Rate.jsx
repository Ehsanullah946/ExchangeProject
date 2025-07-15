import { useState } from 'react';
import { useContexts } from '../../contexs/AppContexts';
import Button from '../Button';
import styles from './Rate.module.css';
import { useTranslation } from 'react-i18next';
function Rate() {
  const { t } = useTranslation();
  const { rate, addRate, updateRate, isActive, setIsActive } = useContexts();

  const [formData, setFormData] = useState({
    date: `${new Date()}`,
  });
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  const [savedLastData, setLastSavedData] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    if (isActive && formData) {
      updateRate(formData);
    } else {
      addRate(formData);
    }
  }
  return (
    <div className={styles.container}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.date}>
          <label>{t('Set Date')}:</label>
          <input type="text" value="" />
        </div>
        <div className={styles.formContainer}>
          <div className={styles.labelPart1}>
            <label>افغانی</label>
            <label>کلدار</label>
            <label>تومن</label>
          </div>
          <div className={styles.inputPart1}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <div className={styles.labelPart2}>
            <label>دالر</label>
            <label>دالر</label>
            <label>دالر</label>
          </div>
          <div className={styles.inputPart2}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </div>
        {isActive ? (
          <>
            <Button tip="primary" htmlType="submit">
              {t('Save')}
            </Button>
            <Button tip="primary" type="reset">
              {t('Cancel')}
            </Button>
          </>
        ) : (
          <>
            <Button tip="primary">{t('New')}</Button>
            <Button tip="primary">{t('Edit')}</Button>
            <Button tip="primary">{t('Delete')}</Button>
            <Button tip="primary">{t('Search')}</Button>
          </>
        )}
      </form>
    </div>
  );
}

export default Rate;
