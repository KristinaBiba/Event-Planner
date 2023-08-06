import { Container } from 'components/Container/Container';
import React from 'react';

import { H2, MainWrap, Section } from './Create_css';
import { Navigate } from 'components/Navigate/Navigate';
import { EventForm } from 'components/Form/Form';

// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/Auth/authOperations';

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import { Container } from '@mui/material';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

function Create({onSubmit}) {

  return (
    <MainWrap>
      <Container>
        <Navigate to="/" title="Back" />
        <Section>
          <H2>Create new event</H2>
          <EventForm onSubmitNewEvent={onSubmit}/>  
        </Section>
      </Container>
    </MainWrap>
  );
}

export default Create;
