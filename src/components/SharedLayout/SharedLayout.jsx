import { Container } from 'components/Container/Container';
import {
  Div,
  FilterInput,
  Header,
  InputDiv,
  LanguageSwitcher,
  SvgButtonCrossSmall,
  SvgDivSearch,
  Title,
  Wrap,
} from './SharedLayout_css';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Search } from '../../images/svg/search.svg';
import { ReactComponent as CrossSmall } from '../../images/svg/cross-small.svg';
import { ReactComponent as ChevronDownSmall } from '../../images/svg/chevron-down-small.svg';

export function SharedLayout({ value, onChange, onInputClean }) {
  return (
    <>
      <Header>
        <Container>
          <Wrap>
            <Title>Event Planner</Title>
            <Div>
              <InputDiv>
                <SvgDivSearch>
                  <Search />
                </SvgDivSearch>

                <FilterInput
                  name="filter"
                  value={value}
                  onChange={onChange}
                  placeholder="Search by keywords"
                />

                {value && (
                  <SvgButtonCrossSmall type="button" onClick={onInputClean}>
                    <CrossSmall />
                  </SvgButtonCrossSmall>
                )}
              </InputDiv>

              <LanguageSwitcher>
                UK
                <ChevronDownSmall />
              </LanguageSwitcher>
            </Div>
          </Wrap>
        </Container>
      </Header>
      <Outlet />
    </>
  );
}
