import { Container } from 'components/UI/Container/Container';
import { Section } from 'components/UI/Section/Section';
import { H2 } from '../../components/UI/H2/H2';

import {
  PageLink,
  Wrap,
} from './NotFound_css';

export function NotFound() {
  return (
    <main>
      <Section>
        <Container>
          <Wrap>
            <H2 title="Sorry, this page is not found" />
            <PageLink to="/">Return to the main page</PageLink>
          </Wrap>
        </Container>
      </Section>
    </main>
  );
}

export default NotFound;
