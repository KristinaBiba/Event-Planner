import { useEffect, useRef, useState, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SharedLayout } from './SharedLayout/SharedLayout';

const Main = lazy(() => import('../pages/Main/Main'));
const Create = lazy(() => import('pages/Create/Create'));
const Info = lazy(() => import('pages/Info/Info'));

export function App() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('');
  const [infoCard, setInfoCard] = useState({});

  const isFirstRender = useRef(true);

  useEffect(() => {
    const userEvents = JSON.parse(localStorage.getItem('UserEvents'));

    if (userEvents) {
      setEvents(userEvents);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('UserEvents', JSON.stringify(events));
  }, [events]);

  const handleFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const handleFormSubmit = newEvent => {
    const dateFormat = newEvent.date
      .toISOString()
      .split('T')[0]
      .split('-')
      .splice(1, 2)
      .reverse()
      .join('.');
    const timeFormat = newEvent.time
      .toISOString()
      .split('T')[1]
      .split(':')
      .splice(0, 2)
      .join(':');
    const event = { ...newEvent, date: dateFormat, time: timeFormat };

    try {
      setEvents(prevState => {
        return [...prevState, event];
      });

      toast.success(
        'The new event has been successfully added to the calendar'
      );
    } catch (error) {
      toast.error('Sorry, try adding the event again');
    }
  };

  const toFiltredEvents = () => {
    const normalizeFilter = filter.toLowerCase();

    return events.filter(
      event =>
        event.title.toLowerCase().includes(normalizeFilter) ||
        event.description.toLowerCase().includes(normalizeFilter)
    );
  };

  const handleDelite = id => {
    try {
      setEvents(prevState => prevState.filter(event => event.id !== id));

      toast.success(
        'Event has been successfully delite from the calendar'
      );
    } catch (error) {
      toast.error('Sorry, try deliting the event again');
    }
    
  };

  const onMoreInfoClick = id => {
    setInfoCard(events.filter(event => event.id === id)[0]);
  };

  const onInputClean = () => {
    setFilter('');
  };

  const filtredEvents = toFiltredEvents();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SharedLayout
            value={filter}
            onChange={handleFilter}
            onInputClean={onInputClean}
          />
        }
      >
        <Route
          index
          element={<Main data={filtredEvents} func={onMoreInfoClick} />}
        />
        <Route
          path="create"
          element={<Create onSubmit={handleFormSubmit} />}
        ></Route>
        <Route
          path="info"
          element={<Info eventData={infoCard} onDeliteEvents={handleDelite} />}
        ></Route>
      </Route>
      <Route path="*" element={<>NotFound</>} />
    </Routes>
  );
}
