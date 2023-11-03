import { useMemo, useState } from 'react';

import PropTypes from 'prop-types';

import { Container } from 'components/UI/Container/Container';
import { Section } from 'components/UI/Section/Section';
import { Events } from 'components/Events/Events';
import { Paginate } from 'components/Paginate/Paginate';

const EventsPage = ({ data }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [sortedType, setSortedType] = useState('default');
  const [sortedData, setSortedData] = useState([]);

  const screenWidth = window.innerWidth;

  const itemsPerPage = (screenWidth > 768) ? 8 : 6;
  console.log(screenWidth);
  console.log(itemsPerPage);
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
          <Events onCategoryFilter={handleCategoryFilter} onSort={handleSort} sortedData={sortedData}/>
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

EventsPage.propTypes = {
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
};

export default EventsPage;
