import React from 'react';

import { Container } from 'components/Container/Container';
import { H2, MainWrap } from './Create_css';
import { Navigate } from 'components/Navigate/Navigate';
import { EventForm } from 'components/Form/Form';

export function Create({ onSubmit }) {
  return (
    <MainWrap>
      <Container>
        <Navigate to="/" title="Back" />
        <section>
          <H2>Create new event</H2>
          <EventForm onSubmitNewEvent={onSubmit} />
        </section>
      </Container>
    </MainWrap>
  );
}
