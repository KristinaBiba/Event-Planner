import PropTypes from 'prop-types';

import { Container } from 'components/UI/Container/Container';
import { InputSearch } from './InputSearch';
import { LanguageSwitcher } from './LanguageSwitcher';

import {
  Div,
  HeaderWrap,
  SiteLink,
  Wrap,
} from './Header_css';

export const Header = ({ value, onChange, onInputClean }) => {
  return (
    <HeaderWrap>
      <Container>
        <Wrap>

          <SiteLink to="/" aria-label="Go to the main page">
            Event Planner
          </SiteLink>

          <Div>

            <InputSearch
              value={value}
              onChange={onChange}
              onInputClean={onInputClean}
            />

            <LanguageSwitcher />

          </Div>
          
        </Wrap>
      </Container>
    </HeaderWrap>
  );
};

Header.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onInputClean: PropTypes.func.isRequired,
};
