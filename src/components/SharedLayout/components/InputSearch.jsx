import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { ReactComponent as Search } from '../../../images/svg/search.svg';
import { ReactComponent as CrossSmall } from '../../../images/svg/cross-small.svg';

import {
  FilterInput,
  InputDiv,
  SvgButtonCrossSmall,
  SvgDivSearch,
} from './InputSearch_css';

export const InputSearch = ({ value, onChange, onInputClean }) => {
  
  const { t } = useTranslation();

  return (
    <InputDiv>
      <SvgDivSearch>
        <Search aria-label={t('eventsPage.ariaLabel1')} />
      </SvgDivSearch>

      <FilterInput
        name="filter"
        value={value}
        onChange={onChange}
        placeholder={t('eventsPage.placeholder')}
      />

      {value && (
        <SvgButtonCrossSmall
          type="button"
          onClick={onInputClean}
          style={{ stroke: 'var(--primary-text-color)' }}
        >
          <CrossSmall aria-label={t('eventsPage.ariaLabel2')} />
        </SvgButtonCrossSmall>
      )}
    </InputDiv>
  );
};

InputSearch.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onInputClean: PropTypes.func.isRequired,
};
