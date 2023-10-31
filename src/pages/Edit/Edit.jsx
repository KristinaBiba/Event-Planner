import React from 'react';

import PropTypes from 'prop-types';

import { EventForm } from 'components/Form/Form';
import { Container } from 'components/UI/Container/Container';
import { Navigate } from 'components/UI/Navigate/Navigate';
import { Section } from 'components/UI/Section/Section';

import { H2 } from '../Create/Create_css';

export function Edit({ eventData, onSubmit, onMoreInfoClick }) {
    
  return (
    <main>
      <Section>
        <Container>
          <Navigate to="/" title="Back" />
          <H2>Edit event</H2>
          <EventForm onSubmit={onSubmit} eventData={eventData} onMoreInfoClick={onMoreInfoClick}/>
        </Container>
      </Section>
    </main>
  );
}

Edit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Edit;
