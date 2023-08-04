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

export function CardWrap({ children }) {
  const navigate = useNavigate();
  const handleCardInfo = () => {
    navigate('/info', { replace: true });
  };
  return (
    <Wrap>
      {children}
      <Card>
        <Image src={img} alt="event" />
        <CategoryWrap>
          <TypeEvent>Business</TypeEvent>
          <TypeEvent>Medium</TypeEvent>
        </CategoryWrap>
        <TimePlaceWrap>
          <TimeEvent>12.07 at 12:00</TimeEvent>
          <TimeEvent>Kyiv</TimeEvent>
        </TimePlaceWrap>
        <EventWrap>
          <H3>Leadership Conference</H3>
          <P>
            Unlock the secrets of effective leadership at our transformative
            Success Leadership Conference.
          </P>
          <Div>
            <Button type="button" onClick={handleCardInfo}>
              More info
            </Button>
          </Div>
        </EventWrap>
      </Card>
      
        
    </Wrap>
  );
}
