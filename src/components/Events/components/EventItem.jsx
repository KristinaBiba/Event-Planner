import PropTypes from 'prop-types';

import { Priority } from 'components/UI/Priority/Priority';

import {
  Card,
  PropertyWrap,
  Div,
  EventWrap,
  H3,
  Image,
  P,
  PageLink,
  InfoWrap,
  Info,
  Property,
} from './EventItem_css';

export function EventItem({ event }) {
  const {
    id,
    title,
    description,
    date,
    time,
    location,
    category,
    priority,
  } = event;
  const dateOfEvent = date.split('').slice(0, 5).join('');
  return (
    <Card>
      <Image
        src={require('../../../images/event-images/' + category + '.jpg')}
        alt="A picture of the meeting"
        loading="lazy"
      />
      <PropertyWrap>
        <Property>{category}</Property>
        <Property>
          <Priority value={priority}>{priority}</Priority>
        </Property>
      </PropertyWrap>
      <InfoWrap>
        <Info>
          {dateOfEvent} at {time}
        </Info>
        <Info>{location}</Info>
      </InfoWrap>
      <EventWrap>
        <H3>{title}</H3>
        <P>{description}</P>
        <Div>
          <PageLink
            to={`/events/${id}`}
            aria-label="Get more information about the event"
          >
            More info
          </PageLink>
        </Div>
      </EventWrap>
    </Card>
  );
}

EventItem.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    addPicture: PropTypes.string,
    priority: PropTypes.string.isRequired,
  }).isRequired,
};
