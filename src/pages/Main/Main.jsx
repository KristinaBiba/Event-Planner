import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Container } from 'components/UI/Container/Container';
import { Section } from 'components/UI/Section/Section';
import { Paginate } from 'components/Paginate/Paginate';
import { DropDownMenu } from 'components/DropDownMenu/DropDownMenu';
import { category } from 'helpers/variables';

import { ReactComponent as Filters2 } from '../../images/svg/filters-2.svg';
import { ReactComponent as Plus } from '../../images/svg/plus.svg';

import {
  Button,
  ButtonWrap,
  CreateButton,
  H2,
  Span,
  TitleWrap,
  Icon,
} from './Main_css';

function Main({ data, func }) {
  const [categoryFiltredData, setCategoryFiltredData] = useState(data);

  const navigate = useNavigate();

  const screenWidth = window.screen.width;

  const handleAdd = e => {
    e.preventDefault();
    navigate('/create', { replace: true });
  };

  const handleCategoryFiltred = useCallback(
    category => {
      if (category === 'Category') {
        setCategoryFiltredData(data);
        return;
      }
      setCategoryFiltredData(
        data.filter(item => item.category.includes(category))
      );
      return;
    },
    [data]
  );

  return (
    <main>
      <Section>
        <Container>
          <TitleWrap>
            <H2>My events</H2>
            <ButtonWrap>
              <DropDownMenu
                title="Category"
                dropDownList={category}
                filtredFunc={handleCategoryFiltred}
              />

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
          <Paginate
            itemsPerPage={screenWidth > 768 ? 8 : 6}
            data={categoryFiltredData}
            func={func}
          />
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
