import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Container } from 'components/UI/Container/Container';
import { Navigate } from 'components/UI/Navigate/Navigate';
import { Priority } from 'components/UI/Priority/Priority';
import { Section } from 'components/UI/Section/Section';

import {
  PageLink,
  Card,
  H2,
  Image,
  P,
  TimeEvent,
  TimePlaceWrap,
  ButtonWrap,
  Wrap,
  DeleteButton,
  SectionWrap,
} from './EventInfo_css';
import { LoaderWrap } from 'components/SharedLayout/SharedLayout_css';
import { Watch } from 'react-loader-spinner';

export function EventInfo({ onDelite, events }) {
  const { eventId } = useParams();

  const [infoCard, setInfoCard] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInfoCard(events.filter(event => event.id === eventId)[0]);
    setIsLoading(false);
  }, [eventId, events]);

  const navigate = useNavigate();
  return (
    <main>
      <Section>
        <Container>
          <Navigate to="/" title="Back" />
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
          ) : (
            <SectionWrap>
              <H2>{infoCard.title}</H2>
              <Card>
                <Image
                  src={require('../../images/event-images/' +
                    infoCard.category +
                    '.jpg')}
                  alt="A picture of the event"
                  loading="lazy"
                />
                <Wrap>
                  <P>{infoCard.description}</P>
                  <TimePlaceWrap>
                    <TimeEvent>{infoCard.category}</TimeEvent>
                    <TimeEvent>
                      <Priority value={infoCard.priority}>
                        {infoCard.priority}
                      </Priority>
                    </TimeEvent>
                    <TimeEvent>{infoCard.location}</TimeEvent>
                    <TimeEvent>
                      {infoCard.date} at {infoCard.time}
                    </TimeEvent>
                  </TimePlaceWrap>

                  <ButtonWrap>
                    <PageLink
                      to={`/events/${infoCard.id}/edit`}
                      onClick={() => {
                        navigate('/edit', { replace: true });
                      }}
                    >
                      Edit
                    </PageLink>
                    <DeleteButton
                      type="button"
                      onClick={() => {
                        onDelite(infoCard.id);
                        navigate('/', { replace: true });
                      }}
                    >
                      Delete event
                    </DeleteButton>
                  </ButtonWrap>
                </Wrap>
              </Card>
            </SectionWrap>
          )}
        </Container>
      </Section>
    </main>
  );
}

EventInfo.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelite: PropTypes.func.isRequired,
};
export default EventInfo;
