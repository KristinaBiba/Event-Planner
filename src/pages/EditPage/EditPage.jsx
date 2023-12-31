import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import NotFound from 'pages/NotFound/NotFound';
import { EventForm } from 'components/EventForm/EventForm';
import { Container } from 'components/UI/Container/Container';
import { Navigate } from 'components/UI/Navigate/Navigate';
import { Section } from 'components/UI/Section/Section';
import { H2 } from '../../components/UI/H2/H2';
import { Loader } from 'components/Loader/Loader';

export function EditPage({ events, onSubmit }) {
  const { eventId } = useParams();

  const [eventData, setEventData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  const {t} = useTranslation();

  useEffect(() => {
    setEventData(events.filter(event => event.id === eventId)[0]);
    setIsLoading(false);
  }, [eventId, events]);

  return (
    <>
    {eventData ? (
    <main>
      <Section>
        <Container>
          <Navigate to={`/events/${eventId}`} state={{from: location.state?.from}} title={t('BackLink')} />
          <H2 title={t('title.edit')} />
          {isLoading ? (
            <Loader />
          ) : (
            <EventForm onSubmit={onSubmit} eventData={eventData} />
          )}
        </Container>
      </Section>
    </main>) : <NotFound/>}
    </>
  );
}

EditPage.propTypes = {
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
};

export default EditPage;
