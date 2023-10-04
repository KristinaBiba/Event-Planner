import React from 'react';
import { Container } from 'components/Container/Container';
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
  Icon,
  Icon2,
} from './Main_css';
import { CardWrap } from 'components/CardWrap/CardWrap';
import { ReactComponent as Filters2 } from '../../images/svg/filters-2.svg';
import { ReactComponent as Filters3 } from '../../images/svg/filters-3.svg';
import { ReactComponent as Plus } from '../../images/svg/plus.svg';

export function Main({ data, func }) {
  const navigate = useNavigate();

  const handleAdd = e => {
    e.preventDefault();
    navigate('/create', { replace: true });
  };

  return (
    <MainWrap>
      <Container>
        <Section>
          <TitleWrap>
            <H2>My events</H2>
            <ButtonWrap>
              <Button type="button">
                <Span>Category</Span>
                <Icon2>
                  <Filters3 />
                </Icon2>
              </Button>
              <Button type="button">
                <Span>Sort by</Span>
                <Icon>
                  <Filters2 />
                </Icon>
              </Button>
              <CreateButton type="button" onClick={handleAdd}>
                <Plus />
                <Span>Add new event</Span>
              </CreateButton>
            </ButtonWrap>
          </TitleWrap>
          <CardWrap data={data} onMoreInfoClick={func} />
        </Section>
      </Container>
    </MainWrap>
  );
}
