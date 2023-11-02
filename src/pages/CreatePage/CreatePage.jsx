import React from 'react';

import PropTypes from 'prop-types';

import { EventForm } from 'components/Form/Form';
import { Container } from 'components/UI/Container/Container';
import { Navigate } from 'components/UI/Navigate/Navigate';
import { Section } from 'components/UI/Section/Section';
import { H2 } from '../../components/UI/H2/H2';


export function CreatePage({ onSubmit }) {
  return (
    <main>
      <Section>
        <Container>
          <Navigate to="/" title="Back" />
          <H2 title='Create new event'/>
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
