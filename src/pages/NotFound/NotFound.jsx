import { useTranslation } from 'react-i18next';

import { Container } from 'components/UI/Container/Container';
import { Section } from 'components/UI/Section/Section';
import { H2 } from '../../components/UI/H2/H2';

import {
  PageLink,
  Wrap,
} from './NotFound_css';

export function NotFound() {

  const {t} = useTranslation(); 

  return (
    <main>
      <Section>
        <Container>
          <Wrap>
            <H2 title={t('NotFound.title')} />
            <PageLink to="/">{t('NotFound.link')}</PageLink>
          </Wrap>
        </Container>
      </Section>
    </main>
  );
}

export default NotFound;
