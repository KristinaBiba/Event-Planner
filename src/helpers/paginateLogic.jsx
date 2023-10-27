import { useState } from 'react';

export const usePaginateLogic = (data) => {
  const [itemOffset, setItemOffset] = useState(0);

  const screenWidth = window.screen.width;

  const itemsPerPage = screenWidth > 768 ? 8 : 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = selected => {
    const newOffset = (selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  return ({currentItems, pageCount})
};
