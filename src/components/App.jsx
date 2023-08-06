import { Route, Routes } from 'react-router-dom';

import Main from 'pages/Main/Main';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Create from 'pages/Create/Create';
import Info from 'pages/Info/Info';
import { useEffect, useRef, useState } from 'react';

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
    console.log('infoCard', infoCard);
      
  }
  
  const filtredEvents = toFiltredEvents();

  return (
    <Routes>
      <Route path="/" element={<SharedLayout value={filter} onChange={handleFilter}/>}>
        <Route index element={<Main data={filtredEvents} func={onMoreInfoClick}/>} />
        <Route path="create" element={<Create onSubmit={handleFormSubmit}/>}></Route>
        <Route path="info" element={<Info eventData={infoCard} onDeliteEvents={handleDelite}/>}></Route>
      </Route>
      <Route path="*" element={<>NotFound</>} />
    </Routes>
  );
};

// import { lazy, useEffect } from "react";

// const Login = lazy(() => import("pages/Login"));
// const Register = lazy(() => import("pages/Register"));
// const Contacts = lazy(() => import("pages/Contacts"));

