import { useEffect, useRef, useState, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SharedLayout } from './SharedLayout/SharedLayout';

import { dateFormatting } from 'helpers/dateFormatting';
import { timeFormatting } from 'helpers/timeFormatting';

const Events = lazy(() => import('../pages/Events/Events'));
const Create = lazy(() => import('pages/Create/Create'));
const EventInfo = lazy(() => import('pages/EventInfo/EventInfo'));
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

  const handleFormSubmitToCreateEvent = newEvent => {
    const dateFormat = dateFormatting(newEvent.date);

    const timeFormat = timeFormatting(newEvent.time);

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
      dateFormat = dateFormatting(editEvent.date);
    } else {
      dateFormat = editEvent.date;
    }

    let timeFormat = '';

    if (prevEdit.time !== editEvent.time) {
      timeFormat = timeFormatting(editEvent.time);
    } else {
      timeFormat = editEvent.time;
    }

    const event = { ...editEvent, date: dateFormat, time: timeFormat };

    try {
      setEvents(prevState => [
        ...prevState.filter(event => event.id !== editEvent.id),
        event,
      ]);

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
        <Route index element={<Navigate to="/events" />} />

        <Route path="events" element={<Events data={filtredEvents} />} />
        <Route
          path="events/:eventId"
          element={<EventInfo events={events} onDelite={handleDelite} />}
        />
        <Route
          path="events/:eventId/edit"
          element={
            <Edit events={events} onSubmit={handleFormSubmitToEditEvent} />
          }
        />
        <Route path="create" element={<Create onSubmit={handleFormSubmitToCreateEvent} />} />
      </Route>

      <Route path="*" element={<>NotFound</>} />
    </Routes>
  );
}
