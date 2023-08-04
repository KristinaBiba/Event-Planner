import { Container } from 'components/Container/Container';
import React from 'react';
import {

  H2,
  MainWrap,
  Section,


} from './Create_css';
import { Navigate } from 'components/Navigate/Navigate';
import { Form } from 'components/Form/Form';

// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/Auth/authOperations';

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import { Container } from '@mui/material';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

function Create() {
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
            
          
          <Form/>
        </Section>
      </Container>

    </MainWrap>
  );
}

export default Create;
