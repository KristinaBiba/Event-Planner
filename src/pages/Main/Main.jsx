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

import { ButtonWrap, CreateButton, H2, Span, TitleWrap } from './Main_css';

function Main({ data, onMoreInfoClick }) {
  const [categoryFiltredData, setCategoryFiltredData] = useState(data);
  const [sortedData, setSortedData] = useState(categoryFiltredData);

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

  const handleSort = useCallback(
    ({ name, up }) => {
      console.log(name + up);
      switch (name + up) {
        case 'by nametrue':
          console.log('by nametrue');
          setSortedData(
            categoryFiltredData.sort((a, b) => a.title.localeCompare(b.title))
          );
          break;
        case 'by namefalse':
          console.log('by namefalse');

          setSortedData(
            categoryFiltredData.sort((a, b) => b.title.localeCompare(a.title))
          );
          break;
        case 'by datatrue':
          setSortedData(categoryFiltredData.sort((a, b) => a.data - b.data));
          break;
        case 'by datafalse':
          setSortedData(categoryFiltredData.sort((a, b) => b.data - a.data));
          break;
        case 'by prioritytrue':
          setSortedData([...categoryFiltredData.filter(
            item => item.priority === 'Low'
          ), ...categoryFiltredData.filter(
            item => item.priority === 'Medium'
          ), ...categoryFiltredData.filter(
            item => item.priority === 'High'
          )]);
          break;
        case 'by priorityfalse':
          setSortedData([...categoryFiltredData.filter(
            item => item.priority === 'High'
          ), ...categoryFiltredData.filter(
            item => item.priority === 'Medium'
          ), ...categoryFiltredData.filter(
            item => item.priority === 'Low'
          )]);;
          break;
        default:
          setSortedData(categoryFiltredData);
          return;
      }
    },
    [categoryFiltredData]
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
                icon=<Filters3 />
                aria-label="Filter events by category"
              />

              <DropDownMenu
                title="Sort by"
                dropDownList={sortList}
                onSort={handleSort}
                icon=<Filters2 />
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
            data={sortedData}
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
