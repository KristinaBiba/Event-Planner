import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from 'components/Container/Container';
import {
  Div,
  FilterInput,
  Header,
  InputDiv,
  LanguageSwitcher,
  SvgButtonCrossSmall,
  SvgDivSearch,
  Link,
  Wrap,
} from './SharedLayout_css';
import { ReactComponent as Search } from '../../images/svg/search.svg';
import { ReactComponent as CrossSmall } from '../../images/svg/cross-small.svg';
import { ReactComponent as ChevronDownSmall } from '../../images/svg/chevron-down-small.svg';

export function SharedLayout({ value, onChange, onInputClean }) {
  return (
    <>
      <Header>
        <Container>
          <Wrap>
            <Link to="/" aria-label="Go to the main page">Event Planner</Link>
            <Div>
              <InputDiv>
                <SvgDivSearch >
                  <Search aria-label="Enter characters to search for"/>
                </SvgDivSearch>

                <FilterInput
                  name="filter"
                  value={value}
                  onChange={onChange}
                  placeholder="Search by keywords"
                />

                {value && (
                  <SvgButtonCrossSmall type="button" onClick={onInputClean} style={{stroke: "var(--primary-text-color)"}}>
                    <CrossSmall aria-label="Clear recent searches"/>
                  </SvgButtonCrossSmall>
                )}
              </InputDiv>

              <LanguageSwitcher type="button" style={{stroke: 'var(--secondary-text-color)'}}>
                UK
                <ChevronDownSmall aria-label="Сhoose a language of the site"/>
              </LanguageSwitcher>
            </Div>
          </Wrap>
        </Container>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
      <Outlet />
      </Suspense>
    </>
  );
}
