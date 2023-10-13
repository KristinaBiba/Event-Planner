import React from 'react';

import PropTypes from 'prop-types';

import { EventForm } from 'components/Form/Form';
import { Container } from 'components/UI/Container/Container';
import { Navigate } from 'components/UI/Navigate/Navigate';
import { Section } from 'components/UI/Section/Section';

import { H2 } from './Create_css';

export function Create({ onSubmit }) {
  return (
    <main>
      <Section>
        <Container>
          <Navigate to="/" title="Back" />
          <H2>Create new event</H2>
          <EventForm onSubmitNewEvent={onSubmit} />
        </Container>
      </Section>
    </main>
  );
}

Create.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Create;
