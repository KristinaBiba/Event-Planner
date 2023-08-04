import { Container } from 'components/Container/Container';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  ButtonWrap,
  CreateButton,
  H2,
  Section,
  Span,
  TitleWrap,
  MainWrap,

} from './Main_css';
import { CardWrap } from 'components/CardWrap/CardWrap';

// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/Auth/authOperations';

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import { Container } from '@mui/material';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

function Main() {

  //   const [userEmail, setUserEmail] = useState('');
  //   const [userPassword, setUserPassword] = useState('');
const navigate = useNavigate();
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

    const handleAdd = e => {
      e.preventDefault();
      navigate('/create', { replace: true })
    };

  return (
    <MainWrap>
        
      <Container>
        <Section>
          <TitleWrap>
            <H2>My events</H2>
            <ButtonWrap>
              <Button>
                <Span>Category</Span>
              </Button>
              <Button>
                <Span>Sort by</Span>
              </Button>
              <CreateButton type='button' onClick={handleAdd}>
                <Span>Add new event</Span>
              </CreateButton>
            </ButtonWrap>
          </TitleWrap>
          <CardWrap/>
        </Section>
      </Container>

    </MainWrap>
  );
}

export default Main;
