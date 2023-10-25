import { useState } from 'react';
import PropTypes from 'prop-types';

import { CardWrap } from 'components/CardWrap/CardWrap';

import { ReactComponent as ChevronLeft } from '../../images/svg/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../images/svg/chevron-right.svg';

import { PaginateContainer } from './Paginate_css';

export function Paginate({ itemsPerPage, data, onMoreInfoClick }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const screenWidth = window.screen.width;

  return (
    <>
      <CardWrap data={currentItems} onMoreInfoClick={onMoreInfoClick} />
      {pageCount > 1 && <PaginateContainer
        breakLabel="..."
        nextLabel={<ChevronRight/>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={screenWidth > 767 ? 3 : 1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={<ChevronLeft/>}
        renderOnZeroPageCount={null}
      />}
    </>
  );
}

Paginate.propTypes = {
  itemsPerPage: PropTypes.number.isRequired, 
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