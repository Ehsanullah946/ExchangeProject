import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
function Connecting() {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang); // 'en' or 'fa'
  };
  useEffect(() => {
    document.body.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
  }, [i18n.language]);
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>

      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('fa')}>فارسی</button>
    </div>
  );
}

export default Connecting;
