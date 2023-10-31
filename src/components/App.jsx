import { useEffect, useRef, useState, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SharedLayout } from './SharedLayout/SharedLayout';

const Main = lazy(() => import('../pages/Main/Main'));
const Create = lazy(() => import('pages/Create/Create'));
const Info = lazy(() => import('pages/Info/Info'));
const Edit = lazy(() => import('pages/Edit/Edit'));

export function App() {
  const [events, setEvents] = useState([]);

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

  const [filter, setFilter] = useState('');

  const handleFilter = e => {
    setFilter(e.target.value);
  };
  const handleInputClean = () => {
    setFilter('');
  };

  const handleFiltredEvents = () => {
    const normalizeFilter = filter.toLowerCase();

    return events.filter(
      event =>
        event.title.toLowerCase().includes(normalizeFilter) ||
        event.description.toLowerCase().includes(normalizeFilter)
    );
  };

  const filtredEvents = handleFiltredEvents();

  const [infoCard, setInfoCard] = useState({});

  const handleFormSubmit = newEvent => {
    const date = newEvent.date.toISOString().split('T')[0].split('-').reverse();
    date[0] = Number(date[0]) + 1;
    const dateFormat = date.join('.');
    const time = newEvent.time
      .toISOString()
      .split('T')[1]
      .split(':')
      .splice(0, 2);
    if (Number(time[0]) > 20) {
      time[0] = Number(time[0]) - 21;
    } else {
      time[0] = Number(time[0]) + 3;
    }
    const timeFormat = time.join(':');
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

  const handleFormSubmitToEditEvent = editEvent => {
    const prevEdit = events.filter(event => event.id === editEvent.id);

    let dateFormat = '';

    if (prevEdit.data !== editEvent.date) {
      const date = editEvent.date
        .toISOString()
        .split('T')[0]
        .split('-')
        .reverse();
      date[0] = Number(date[0]) + 1;
      dateFormat = date.join('.');
    } else {
      dateFormat = editEvent.date;
    }

    let timeFormat = '';

    if (prevEdit.time !== editEvent.time) {
      const time = editEvent.time
        .toISOString()
        .split('T')[1]
        .split(':')
        .splice(0, 2);
      if (Number(time[0]) > 20) {
        time[0] = Number(time[0]) - 21;
      } else {
        time[0] = Number(time[0]) + 3;
      }
      timeFormat = time.join(':');
    } else {
      timeFormat = editEvent.time;
    }

    const event = { ...editEvent, date: dateFormat, time: timeFormat };

    try {
      setEvents(prevState => [...prevState.filter(event => event.id !== editEvent.id), event]);

      toast.success('The event has been successfully edit');
    } catch (error) {
      toast.error('Sorry, try edit the event again');
    }
  };

  const handleDelite = id => {
    try {
      setEvents(prevState => prevState.filter(event => event.id !== id));

      toast.success('Event has been successfully delite from the calendar');
    } catch (error) {
      toast.error('Sorry, try deliting the event again');
    }
  };

  const handleMoreInfoClick = id => {
    setInfoCard(events.filter(event => event.id === id)[0]);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SharedLayout
            value={filter}
            onChange={handleFilter}
            onInputClean={handleInputClean}
          />
        }
      >
        <Route
          index
          element={
            <Main data={filtredEvents} onMoreInfoClick={handleMoreInfoClick} />
          }
        />
        <Route
          path="create"
          element={<Create onSubmit={handleFormSubmit} />}
        ></Route>
        <Route
          path="info"
          element={<Info eventData={infoCard} onDelite={handleDelite} />}
        ></Route>
        <Route
          path="edit"
          element={
            <Edit
              eventData={infoCard}
              onSubmit={handleFormSubmitToEditEvent}
              onMoreInfoClick={handleMoreInfoClick}
            />
          }
        ></Route>
      </Route>
      <Route path="*" element={<>NotFound</>} />
    </Routes>
  );
}
