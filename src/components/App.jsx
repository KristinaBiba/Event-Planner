import { useEffect, useRef, useState, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

import { SharedLayout } from './SharedLayout/SharedLayout';

import { dateFormatting } from 'helpers/dateFormatting';
import { timeFormatting } from 'helpers/timeFormatting';

const EventsPage = lazy(() => import('../pages/EventsPage/EventsPage'));
const CreatePage = lazy(() => import('pages/CreatePage/CreatePage'));
const EventInfoPage = lazy(() => import('pages/EventInfoPage/EventInfoPage'));
const EditPage = lazy(() => import('pages/EditPage/EditPage'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

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

  const { t } = useTranslation();

  const handleFormSubmitToCreateEvent = newEvent => {
    const dateFormat = dateFormatting(newEvent.date);

    const timeFormat = timeFormatting(newEvent.time);

    const event = {
      ...newEvent,
      date: dateFormat,
      time: timeFormat,
      priority: newEvent.priority.id,
      category: newEvent.category.id,
    };

    try {
      setEvents(prevState => {
        return [...prevState, event];
      });

      toast.success(t('toast.createSuccess'));
    } catch (error) {
      toast.error(t('toast.createError'));
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

    const event = {
      ...editEvent,
      date: dateFormat,
      time: timeFormat,
      priority: editEvent.priority.id,
      category: editEvent.category.id,
    };

    try {
      setEvents(prevState => [
        ...prevState.filter(event => event.id !== editEvent.id),
        event,
      ]);

      toast.success(t('toast.editSuccess'));
    } catch (error) {
      toast.error(t('toast.editError'));
    }
  };

  const handleDelite = id => {
    try {
      setEvents(prevState => prevState.filter(event => event.id !== id));

      toast.success(t('toast.deliteSuccess'));
    } catch (error) {
      toast.error(t('toast.deliteError'));
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

        <Route path="events" element={<EventsPage data={filtredEvents} />} />
        <Route
          path="events/:eventId"
          element={<EventInfoPage events={events} onDelite={handleDelite} />}
        />
        <Route
          path="events/:eventId/edit"
          element={
            <EditPage events={events} onSubmit={handleFormSubmitToEditEvent} />
          }
        />
        <Route
          path="create"
          element={<CreatePage onSubmit={handleFormSubmitToCreateEvent} />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
