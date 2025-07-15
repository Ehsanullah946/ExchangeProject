import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Language() {
  const { i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.body.dir = lang === 'fa' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    document.body.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('fa')}>فارسی</button>
    </div>
  );
}

export default Language;
