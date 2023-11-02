// import PropTypes from 'prop-types';

import { ReactComponent as ChevronDownSmall } from '../../../images/svg/chevron-down-small.svg';

import { LanguageButton } from './LanguageSwitcher_css';

export const LanguageSwitcher = () => {
  return (
    <LanguageButton
      type="button"
      style={{ stroke: 'var(--secondary-text-color)' }}
    >
      UK
      <ChevronDownSmall aria-label="Сhoose a language of the site" />
    </LanguageButton>
  );
};
