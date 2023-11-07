// import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { ReactComponent as ChevronDownSmall } from '../../../images/svg/chevron-down-small.svg';

import { LanguageButton } from './LanguageSwitcher_css';

export const LanguageSwitcher = () => {
  const {t, i18n} = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
    <LanguageButton
      type="button"
      style={{ stroke: 'var(--secondary-text-color)' }}
      onClick={() => changeLanguage('en')}
    >
      EN
      <ChevronDownSmall aria-label={t('eventsPage.ariaLabel3')} />
    </LanguageButton>
    <LanguageButton
    type="button"
    style={{ stroke: 'var(--secondary-text-color)' }}
    onClick={() => changeLanguage('ua')}
  >
    UA
    <ChevronDownSmall aria-label={t('eventsPage.ariaLabel3')} />
  </LanguageButton>
  </>
  );
};
