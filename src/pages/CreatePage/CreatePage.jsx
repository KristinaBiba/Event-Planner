import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { EventForm } from 'components/EventForm/EventForm';
import { Container } from 'components/UI/Container/Container';
import { Navigate } from 'components/UI/Navigate/Navigate';
import { Section } from 'components/UI/Section/Section';
import { H2 } from '../../components/UI/H2/H2';


export function CreatePage({ onSubmit }) {

  const location = useLocation();

  const {t} = useTranslation();

  return (
    <main>
      <Section>
        <Container>
          <Navigate to={location.state?.from ?? "/"} title={t('BackLink')} />
          <H2 title={t('title.create')}/>
          <EventForm onSubmit={onSubmit} />
        </Container>
      </Section>
    </main>
  );
}

CreatePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default CreatePage;
