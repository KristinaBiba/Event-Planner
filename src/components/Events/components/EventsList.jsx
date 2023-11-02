import PropTypes from 'prop-types';

import { EventItem } from './EventItem';

import { Wrap } from './EventsList_css';

export function EventsList({ data }) {
  return (
    <Wrap>
      {data.map(event => (
        <EventItem key={event.id} event={event} />
      ))}
    </Wrap>
  );
}

EventsList.propTypes = {
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
