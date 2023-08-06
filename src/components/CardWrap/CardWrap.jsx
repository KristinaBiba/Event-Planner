import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CategoryWrap,
  Div,
  EventWrap,
  H3,
  Image,
  P,
  TimeEvent,
  TimePlaceWrap,
  TypeEvent,
  Wrap,
} from './CardWrap_css';
import img from '../../images/event-images/Rectangle 347.jpg';

export function CardWrap({ data, onMoreInfoClick, children }) {
  const navigate = useNavigate();
  const handleCardInfo = (id) => {
    onMoreInfoClick(id);
    navigate('/info', { replace: true });
  };
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
        }) => (
          <Card key={id}>
            <Image src={img} alt="event" />
            <CategoryWrap>
              <TypeEvent>{category}</TypeEvent>
              <TypeEvent>{priority}</TypeEvent>
            </CategoryWrap>
            <TimePlaceWrap>
              <TimeEvent>
                {date} at {time}
              </TimeEvent>
              <TimeEvent>{location}</TimeEvent>
            </TimePlaceWrap>
            <EventWrap>
              <H3>{title}</H3>
              <P>{description}</P>
              <Div>
                <Button type="button" onClick={()=> handleCardInfo(id)}>
                  More info
                </Button>
              </Div>
            </EventWrap>
          </Card>
        )
      )}
    </Wrap>
  );
}
