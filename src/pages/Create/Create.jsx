import React from 'react';

import { Container } from 'components/Container/Container';
import { H2 } from './Create_css';
import { Navigate } from 'components/Navigate/Navigate';
import { EventForm } from 'components/Form/Form';
import { Section } from 'components/Section/Section';

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

export default Create;
