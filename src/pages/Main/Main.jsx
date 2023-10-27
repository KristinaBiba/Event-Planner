import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Container } from 'components/UI/Container/Container';
import { Section } from 'components/UI/Section/Section';
import { DropDownMenu } from 'components/DropDownMenu/DropDownMenu';
import { CardWrap } from 'components/CardWrap/CardWrap';
import { Paginate } from 'components/Paginate/Paginate';
import { category, sortList } from 'helpers/variables';

import { ReactComponent as Filters2 } from '../../images/svg/filters-2.svg';
import { ReactComponent as Filters3 } from '../../images/svg/filters-3.svg';
import { ReactComponent as Plus } from '../../images/svg/plus.svg';

import { ButtonWrap, CreateButton, H2, Span, TitleWrap } from './Main_css';

function Main({ data, onMoreInfoClick }) {
  const [itemOffset, setItemOffset] = useState(0);
  // const [currentItems, setCurrentItems] = useState([]);
  const [categoryFiltredData, setCategoryFiltredData] = useState(data);
  // const [sortedData, setSortedData] = useState(categoryFiltredData);

  const navigate = useNavigate();

  const screenWidth = window.screen.width;

  const handleAdd = e => {
    e.preventDefault();
    navigate('/create', { replace: true });
  };

  const itemsPerPage=screenWidth > 768 ? 8 : 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  
  const handlePageClick = selected => {
    const newOffset = (selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const handleCategoryFilter = 
    category => {
      if (category === 'Category') {
        setCategoryFiltredData(currentItems);
        return;
      }
      setCategoryFiltredData(
        currentItems.filter(item => item.category.includes(category))
      );
      return;
    };
    

  // const handleSort = useCallback( 
  //   (value) => {
  //     const {name, up} = value;
  //     switch (name + up) {
  //       case 'by nametrue':
  //         setSortedData(
  //           categoryFiltredData.sort((a, b) => a.title.localeCompare(b.title))
  //         );
  //         break;
  //       case 'by namefalse':
  //         setSortedData(
  //           categoryFiltredData.sort((a, b) => b.title.localeCompare(a.title))
  //         );
  //         break;
  //       case 'by datatrue':
  //         setSortedData(categoryFiltredData.sort((a, b) => Number(a.date.split('.').reverse().join(''))-Number(b.date.split('.').reverse().join(''))));
  //         break;
  //       case 'by datafalse':
  //         setSortedData(categoryFiltredData.sort((a, b) => Number(b.date.split('.').reverse().join(''))-Number(a.date.split('.').reverse().join(''))));
  //         break;
  //       case 'by prioritytrue':
  //         setSortedData([...categoryFiltredData.filter(
  //           item => item.priority === 'Low'
  //         ), ...categoryFiltredData.filter(
  //           item => item.priority === 'Medium'
  //         ), ...categoryFiltredData.filter(
  //           item => item.priority === 'High'
  //         )]);
  //         break;
  //       case 'by priorityfalse':
  //         setSortedData([...categoryFiltredData.filter(
  //           item => item.priority === 'High'
  //         ), ...categoryFiltredData.filter(
  //           item => item.priority === 'Medium'
  //         ), ...categoryFiltredData.filter(
  //           item => item.priority === 'Low'
  //         )]);;
  //         break;
  //       default:
  //         setSortedData(categoryFiltredData);
  //         return;
  //     }
  //   },
  //   [categoryFiltredData]
  // );


 

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

              {/* <DropDownMenu
                title="Sort by"
                dropDownList={sortList}
                onSort={handleSort}
                icon=<Filters2 />
                aria-label="Choose the type of sorting"
              /> */}

              <CreateButton type="button" onClick={handleAdd}>
                <Plus aria-label="Add new event" />
                <Span>Add new event</Span>
              </CreateButton>
            </ButtonWrap>
          </TitleWrap>
          <CardWrap data={categoryFiltredData} onMoreInfoClick={onMoreInfoClick} />
          <Paginate
            itemsPerPage={screenWidth > 768 ? 8 : 6}
            onPageClick={handlePageClick}
            pageCount={pageCount}
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
