import React, { useMemo, useState } from 'react';
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

const Main = ({ data, onMoreInfoClick }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [sortedType, setSortedType] = useState('default');
  const [sortedData, setSortedData] = useState([]);

  const navigate = useNavigate();

  const screenWidth = window.screen.width;

  const handleAdd = e => {
    e.preventDefault();
    navigate('/create', { replace: true });
  };

  const itemsPerPage = screenWidth > 768 ? 8 : 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = useMemo(
    () => data.slice(itemOffset, endOffset),
    [data, endOffset, itemOffset]
  );
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const filtredData = useMemo(
    () =>
      selectedCategory === 'Category'
        ? currentItems
        : currentItems.filter(item => item.category.includes(selectedCategory)),
    [selectedCategory, currentItems]
  );

  useMemo(() => {
    switch (sortedType) {
      case 'default':
        setSortedData(filtredData);
        break;
      case 'by nametrue':
        setSortedData(
          filtredData.sort((a, b) => a.title.localeCompare(b.title))
        );
        break;
      case 'by namefalse':
        setSortedData(
          filtredData.sort((a, b) => b.title.localeCompare(a.title))
        );
        break;
      case 'by datatrue':
        setSortedData(
          filtredData.sort(
            (a, b) =>
              Number(a.date.split('.').reverse().join('')) -
              Number(b.date.split('.').reverse().join(''))
          )
        );
        break;
      case 'by datafalse':
        setSortedData(
          filtredData.sort(
            (a, b) =>
              Number(b.date.split('.').reverse().join('')) -
              Number(a.date.split('.').reverse().join(''))
          )
        );
        break;
      case 'by prioritytrue':
        setSortedData([
          ...filtredData.filter(item => item.priority === 'Low'),
          ...filtredData.filter(item => item.priority === 'Medium'),
          ...filtredData.filter(item => item.priority === 'High'),
        ]);
        break;
      case 'by priorityfalse':
        setSortedData([
          ...filtredData.filter(item => item.priority === 'High'),
          ...filtredData.filter(item => item.priority === 'Medium'),
          ...filtredData.filter(item => item.priority === 'Low'),
        ]);
        break;
      default:
        setSortedData(filtredData);
        return;
    }
  }, [sortedType, filtredData]);

  const handlePageClick = selected => {
    const newOffset = (selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const handleCategoryFilter = category => setSelectedCategory(category);

  const handleSort = value => setSortedType(value);

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
                onSort={handleSort}
                icon=<Filters2/>
                aria-label="Choose the type of sorting"
              />

              <CreateButton type="button" onClick={handleAdd}>
                <Plus aria-label="Add new event" />
                <Span>Add new event</Span>
              </CreateButton>
            </ButtonWrap>
          </TitleWrap>
          <CardWrap data={sortedData} onMoreInfoClick={onMoreInfoClick} />
          <Paginate
            itemsPerPage={screenWidth > 768 ? 8 : 6}
            onPageClick={handlePageClick}
            pageCount={pageCount}
          />
        </Container>
      </Section>
    </main>
  );
};

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
