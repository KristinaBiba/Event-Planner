import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Container } from 'components/UI/Container/Container';
import { Section } from 'components/UI/Section/Section';
import { Paginate } from 'components/Paginate/Paginate';
import { DropDownMenu } from 'components/DropDownMenu/DropDownMenu';
import { category, sortList } from 'helpers/variables';

import { ReactComponent as Filters2 } from '../../images/svg/filters-2.svg';
import { ReactComponent as Filters3 } from '../../images/svg/filters-3.svg';
import { ReactComponent as Plus } from '../../images/svg/plus.svg';

import {
  ButtonWrap,
  CreateButton,
  H2,
  Span,
  TitleWrap,
} from './Main_css';

function Main({ data, onMoreInfoClick }) {
  const [categoryFiltredData, setCategoryFiltredData] = useState(data);

  const navigate = useNavigate();

  const screenWidth = window.screen.width;

  const handleAdd = e => {
    e.preventDefault();
    navigate('/create', { replace: true });
  };

  const handleCategoryFilter = useCallback(
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
                onCategoryFilter={handleCategoryFilter}
                icon=<Filters3/>
                aria-label="Filter events by category"
              />

              <DropDownMenu
                title="Sort by"
                dropDownList={sortList}
                icon=<Filters2/>
                aria-label="Choose the type of sorting"
              />

              <CreateButton type="button" onClick={handleAdd}>
                <Plus aria-label="Add new event" />
                <Span>Add new event</Span>
              </CreateButton>
            </ButtonWrap>
          </TitleWrap>
          <Paginate
            itemsPerPage={screenWidth > 768 ? 8 : 6}
            data={categoryFiltredData}
            onMoreInfoClick={onMoreInfoClick}
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
  onMoreInfoClick: PropTypes.func.isRequired,
};

export default Main;
