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

function Main ({data, func}) {

const navigate = useNavigate();

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
          <CardWrap data={data} onMoreInfoClick={func}/>
        </Section>
      </Container>

    </MainWrap>
  );
}

export default Main;
