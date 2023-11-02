import PropTypes from 'prop-types';

import { EventsHeaderBlock } from "./components/EventsHeaderBlock";
import { EventsList } from "./components/EventsList";


export const Events = ({ onSort, onCategoryFilter, sortedData }) => {
  return (
    <>
      <EventsHeaderBlock onSort={onSort} onCategoryFilter={onCategoryFilter}/>
      
      <EventsList data={sortedData} />
    </>
  );
};

Events.propTypes = {
    onSort: PropTypes.func.isRequired,
    onCategoryFilter: PropTypes.func.isRequired,
    sortedData: PropTypes.arrayOf(
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