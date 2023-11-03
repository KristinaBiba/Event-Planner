import PropTypes from 'prop-types';

import { ReactComponent as ChevronLeft } from '../../images/svg/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../images/svg/chevron-right.svg';

import { PaginateContainer } from './Paginate_css';

export function Paginate({ onPageClick, pageCount }) {
  
  const handlePageClick = event => {
    return onPageClick(event.selected);
  };

  const screenWidth = window.innerWidth;

  return (
    <>
      {pageCount > 1 && (
        <PaginateContainer
          breakLabel="..."
          nextLabel={<ChevronRight />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={screenWidth > 767 ? 3 : 1}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel={<ChevronLeft />}
          renderOnZeroPageCount={null}
        />
      )}
    </>
  );
}

Paginate.propTypes = {
  pageCount: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
};
