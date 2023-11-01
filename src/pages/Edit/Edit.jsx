import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Watch } from 'react-loader-spinner';

import { EventForm } from 'components/Form/Form';
import { Container } from 'components/UI/Container/Container';
import { Navigate } from 'components/UI/Navigate/Navigate';
import { Section } from 'components/UI/Section/Section';

import { H2 } from '../Create/Create_css';
import { LoaderWrap } from 'components/SharedLayout/SharedLayout_css';

export function Edit({ events, onSubmit }) {

  const { eventId } = useParams();

  const [eventData, setEventData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setEventData(events.filter(event => event.id === eventId)[0]);
    setIsLoading(false);
  }, [eventId, events]);
    
  return (
    <main>
      <Section>
        <Container>
          <Navigate to="/" title="Back" />
          <H2>Edit event</H2>
          {isLoading ? (
            <LoaderWrap>
              <Watch
                height="80"
                width="80"
                radius="48"
                color="var(--primary-text-color)"
                ariaLabel="Loading"
                visible={true}
              />
            </LoaderWrap>
          ) : 
          <EventForm onSubmit={onSubmit} eventData={eventData}/>}
        </Container>
      </Section>
    </main>
  );
}

Edit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      addPicture: PropTypes.string,
      priority: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Edit;
