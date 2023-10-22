import React from 'react';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Container } from 'components/UI/Container/Container';
import { Section } from 'components/UI/Section/Section';

import { ReactComponent as Filters2 } from '../../images/svg/filters-2.svg';
import { ReactComponent as Filters3 } from '../../images/svg/filters-3.svg';
import { ReactComponent as Plus } from '../../images/svg/plus.svg';

import {
  Button,
  ButtonWrap,
  CreateButton,
  H2,
  Span,
  TitleWrap,
  Icon,
  Icon2,
} from './Main_css';
import { Paginate } from 'components/Paginate/Paginate';

function Main({ data, func }) {
  const navigate = useNavigate();

  const handleAdd = e => {
    e.preventDefault();
    navigate('/create', { replace: true });
  };
  return (
    <main>
      <Section>
        <Container>
          <TitleWrap>
            <H2>My events</H2>
            <ButtonWrap>
              <Button type="button" disabled>
                <Span>Category</Span>
                <Icon2>
                  <Filters3 aria-label="Filter events by category" />
                </Icon2>
              </Button>
              <Button type="button" disabled>
                <Span>Sort by</Span>
                <Icon>
                  <Filters2 aria-label="Choose the type of sorting" />
                </Icon>
              </Button>
              <CreateButton type="button" onClick={handleAdd}>
                <Plus aria-label="Add new event" />
                <Span>Add new event</Span>
              </CreateButton>
            </ButtonWrap>
          </TitleWrap>
          <Paginate itemsPerPage={1} data={data} func={func}/>
        </Container>
      </Section>
    </main>
  );
}

Main.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      addPicture: PropTypes.string,
      priority: PropTypes.string.isRequired,
    })
  ).isRequired,
  func: PropTypes.func.isRequired,
};

export default Main;
