import { Container } from 'components/Container/Container';
import { useNavigate } from 'react-router-dom';

import img from '../../images/event-images/Rectangle 347.jpg';

import React from 'react';
import {
  Button,
  Card,
  H2,
  Image,
  MainWrap,
  P,
  Section,
  TimeEvent,
  TimePlaceWrap,
  ButtonWrap,
  Wrap,
  DeleteButton,
} from './Info_css';
import { Navigate } from 'components/Navigate/Navigate';

function Info({eventData, onDeliteEvents}) {
 
  const {
    id,
    title,
    description,
    date,
    time,
    location,
    category,
    priority,
  } = eventData;

  const navigate = useNavigate();
  return (
    <MainWrap> 
      <Container>
      <Navigate to="/" title="Back"/>
        <Section>
            <H2>{title}</H2>
            <Card>
        <Image src={img} alt="event" />
          <Wrap>
          <P>
            {description}
          </P>
        <TimePlaceWrap>
          <TimeEvent>{category}</TimeEvent>
          <TimeEvent>{priority}</TimeEvent>
          <TimeEvent>{location}</TimeEvent>
          <TimeEvent>{date} at {time}</TimeEvent>
        </TimePlaceWrap>
        
          <ButtonWrap>
            <Button type="button" >
            Edit
            </Button>
            <DeleteButton type="button" onClick={() => {onDeliteEvents(id); navigate('/', { replace: true })}}>
            Delete event
            </DeleteButton>
          </ButtonWrap>
          </Wrap>
      </Card>
          
        </Section>
      </Container>
    </MainWrap>
  );
}

export default Info;
