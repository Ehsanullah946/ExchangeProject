import { useTranslation } from 'react-i18next';

function Database() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}

export default Database;
