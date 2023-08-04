import { Container } from 'components/Container/Container';
import {
  Div,
  FilterInput,
  Header,
  LanguageSwitcher,
  Title,
  Wrap,
} from './SharedLayout_css';
import { Outlet } from 'react-router-dom';

export function SharedLayout() {
  return (
    <>
      <Header>
        <Container>
          <Wrap>
            <Title>Event Planner</Title>
            <Div>
              <FilterInput></FilterInput>
              <LanguageSwitcher>UK</LanguageSwitcher>
            </Div>
          </Wrap>
        </Container>
      </Header>
      <Outlet />
    </>
  );
}
