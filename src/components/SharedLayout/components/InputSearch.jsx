import PropTypes from 'prop-types';

import { ReactComponent as Search } from '../../../images/svg/search.svg';
import { ReactComponent as CrossSmall } from '../../../images/svg/cross-small.svg';

import {
  FilterInput,
  InputDiv,
  SvgButtonCrossSmall,
  SvgDivSearch,
} from './InputSearch_css';

export const InputSearch = ({ value, onChange, onInputClean }) => {
  return (
    <InputDiv>
      <SvgDivSearch>
        <Search aria-label="Enter characters to search for" />
      </SvgDivSearch>

      <FilterInput
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Search by keywords"
      />

      {value && (
        <SvgButtonCrossSmall
          type="button"
          onClick={onInputClean}
          style={{ stroke: 'var(--primary-text-color)' }}
        >
          <CrossSmall aria-label="Clear recent searches" />
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
