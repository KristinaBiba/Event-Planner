import PropTypes from 'prop-types';

import { Priority } from 'components/UI/Priority/Priority';

import {
  Card,
  CategoryWrap,
  Div,
  EventWrap,
  H3,
  Image,
  P,
  PageLink,
  TimeEvent,
  TimePlaceWrap,
  TypeEvent,
  Wrap,
} from './CardWrap_css';

export function CardWrap({ data, onMoreInfoClick, children }) {

  return (
    <Wrap>
      {children}
      {data.map(
        ({
          id,
          title,
          description,
          date,
          time,
          location,
          category,
          addPicture,
          priority,
        }) => {
          const dateOfEvent = date.split('').slice(0, 5).join('');
          
          return (
            <Card key={id}>
              <Image src={require('../../images/event-images/'+ category + '.jpg')} alt="A picture of the meeting" loading="lazy" />
              <CategoryWrap>
                <TypeEvent>{category}</TypeEvent>
                <TypeEvent>
                  <Priority value={priority}>{priority}</Priority>
                </TypeEvent>
              </CategoryWrap>
              <TimePlaceWrap>
                <TimeEvent>
                  {dateOfEvent} at {time}
                </TimeEvent>
                <TimeEvent>{location}</TimeEvent>
              </TimePlaceWrap>
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
      )}
    </Wrap>
  );
}

CardWrap.propTypes = {
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
  // onMoreInfoClick: PropTypes.func.isRequired,
  children: PropTypes.element,
};
