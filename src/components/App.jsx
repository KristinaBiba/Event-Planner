import {useEffect, useRef, useState, lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Main = lazy(() => import('../pages/Main/Main'));
const Create = lazy(() => import('pages/Create/Create'));
const Info = lazy(() => import('pages/Info/Info'));

export function App () {

  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('');
  const [infoCard, setInfoCard] = useState({});
  
  const isFirstRender = useRef(true);

  useEffect(() => {
    const userEvents = JSON.parse(localStorage.getItem('UserEvents'));

    if (userEvents) {
      setEvents(userEvents);
    }
  }, [])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('UserEvents', JSON.stringify(events));
    }, [events])

  const handleFilter = (e) => {
    const { value } = e.target;
    setFilter(value)
  }
  
  const handleFormSubmit = (newEvent) => {
    const dateFormat = newEvent.date.toISOString().split('T')[0].split('-').splice(1,2).reverse().join('.'); 
      const timeFormat = newEvent.time.toISOString().split('T')[1].split(':').splice(0,2).join(':');
     const event = {...newEvent, date: dateFormat, time: timeFormat }
     setEvents((prevState) => { return  [...prevState, event] });
  }

  const toFiltredEvents = () => {
    const normalizeFilter = filter.toLowerCase();
    
     return (events.filter(event => event.title.toLowerCase().includes(normalizeFilter) || event.description.toLowerCase().includes(normalizeFilter)));
  }

  const handleDelite = (id) => {

    setEvents(prevState => (prevState.filter(event => event.id !== id)))
    
  }

  const onMoreInfoClick = (id) => {
    setInfoCard(events.filter(event => event.id === id)[0])
  }
  
  const onInputClean = () => {
    setFilter('');
  }

  const filtredEvents = toFiltredEvents();

  return (
    <Routes>
      <Route path="/" element={<SharedLayout value={filter} onChange={handleFilter} onInputClean={onInputClean}/>}>
        <Route index element={<Main data={filtredEvents} func={onMoreInfoClick}/>} />
        <Route path="create" element={<Create onSubmit={handleFormSubmit} />}></Route>
        <Route path="info" element={<Info eventData={infoCard} onDeliteEvents={handleDelite}/>}></Route>
      </Route>
      <Route path="*" element={<>NotFound</>} />
    </Routes>
  );
};