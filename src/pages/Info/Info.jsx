import { Container } from 'components/Container/Container';
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

// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/Auth/authOperations';

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import { Container } from '@mui/material';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

function Info() {
  //   const [userEmail, setUserEmail] = useState('');
  //   const [userPassword, setUserPassword] = useState('');

  //   const dispatch = useDispatch();

  //   const handleChange = e => {
  //     const { name, value } = e.target;
  //     switch (name) {
  //       case 'userEmail':
  //         setUserEmail(value);
  //         break;
  //       case 'userPassword':
  //         setUserPassword(value);
  //         break;
  //       default:
  //         setUserEmail('');
  //         setUserPassword('');
  //         break;
  //     }
  //   };

  //   const handleLogIn = e => {
  //     e.preventDefault();

  //     const { userEmail, userPassword } = e.currentTarget.elements;

  //     dispatch(logIn({ email: userEmail.value, password: userPassword.value }));

  //     setUserEmail('');
  //     setUserPassword('');
  //   };

  return (
    <MainWrap>
        
      <Container>
      <Navigate to="/" title="Back"/>
        <Section>
            <H2>Create new event</H2>
            <Card>
        <Image src={img} alt="event" />
          <Wrap>
          <P>
            Unlock the secrets of effective leadership at our transformative
            Success Leadership Conference.
          </P>
        <TimePlaceWrap>
          <TimeEvent>Business</TimeEvent>
          <TimeEvent>Medium</TimeEvent>
          <TimeEvent>Kyiv</TimeEvent>
          <TimeEvent>12.07 at 12:00</TimeEvent>
        </TimePlaceWrap>
        
          <ButtonWrap>
            <Button type="button" >
            Edit
            </Button>
            <DeleteButton type="DeleteButton" >
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
