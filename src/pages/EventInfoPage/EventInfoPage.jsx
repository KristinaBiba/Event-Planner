import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Container } from 'components/UI/Container/Container';
import { Navigate } from 'components/UI/Navigate/Navigate';
import { Priority } from 'components/UI/Priority/Priority';
import { Section } from 'components/UI/Section/Section';
import { Loader } from 'components/Loader/Loader';
import { H2 } from '../../components/UI/H2/H2';

import {
  PageLink,
  Card,
  Image,
  P,
  Property,
  PropertyWrap,
  ButtonWrap,
  Wrap,
  DeleteButton,
  SectionWrap,
} from './EventInfoPage_css';

export function EventInfoPage({ onDelite, events }) {
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
            <Loader />
          ) : (
            <SectionWrap>
              <H2 title={infoCard.title} eventInfo />
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
                  <PropertyWrap>
                    <Property>{infoCard.category}</Property>
                    <Property>
                      <Priority value={infoCard.priority}>
                        {infoCard.priority}
                      </Priority>
                    </Property>
                    <Property>{infoCard.location}</Property>
                    <Property>
                      {infoCard.date} at {infoCard.time}
                    </Property>
                  </PropertyWrap>

                  <ButtonWrap>
                    <PageLink to={`/events/${infoCard.id}/edit`}>Edit</PageLink>
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

EventInfoPage.propTypes = {
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
export default EventInfoPage;