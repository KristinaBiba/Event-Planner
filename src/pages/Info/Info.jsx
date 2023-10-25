import React from 'react';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Container } from 'components/UI/Container/Container';
import { Navigate } from 'components/UI/Navigate/Navigate';
import { Priority } from 'components/UI/Priority/Priority';
import { Section } from 'components/UI/Section/Section';

import img from '../../images/event-images/Rectangle 347.jpg';

import {
  Button,
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
} from './Info_css';

export function Info({ eventData, onDelite }) {
  const { id, title, description, date, time, location, category, priority } =
    eventData;
  const navigate = useNavigate();
  return (
    <main>
      <Section>
        <Container>
          <Navigate to="/" title="Back" />
          <SectionWrap>
            <H2>{title}</H2>
            <Card>
              <Image src={img} alt="A picture of the meeting" loading="lazy" />
              <Wrap>
                <P>{description}</P>
                <TimePlaceWrap>
                  <TimeEvent>{category}</TimeEvent>
                  <TimeEvent>
                    <Priority value={priority}>{priority}</Priority>
                  </TimeEvent>
                  <TimeEvent>{location}</TimeEvent>
                  <TimeEvent>
                    {date} at {time}
                  </TimeEvent>
                </TimePlaceWrap>

                <ButtonWrap>
                  <Button type="button" disabled>Edit</Button>
                  <DeleteButton
                    type="button"
                    onClick={() => {
                      onDelite(id);
                      navigate('/', { replace: true });
                    }}
                  >
                    Delete event
                  </DeleteButton>
                </ButtonWrap>
              </Wrap>
            </Card>
          </SectionWrap>
        </Container>
      </Section>
    </main>
  );
}

Info.propTypes = {
  eventData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  }).isRequired,
  onDelite: PropTypes.func.isRequired,
};
export default Info;
