import React, { useState } from 'react';
import {
  Button,
  ButtonDiv,
  DescriptionTextField,
  Div,
  FormWrap,
  Label,
  TextField,
} from './Form_css';
import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { getContacts } from 'redux/selectors';
// import { addContact } from 'redux/Contacts/operations';

export function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectDate, setSelectDate] = useState('');
  const [selectTime, setSelectTime] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [addPicture, setAddPicture] = useState('');
  const [priority, setPriority] = useState('');

  const navigate = useNavigate();

  //   const contacts = useSelector(getContacts);
  //   const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'selectDate':
        setSelectDate(value);
        break;
      case 'selectTime':
        setSelectTime(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'addPicture':
        setAddPicture(value);
        break;
      case 'priority':
        setPriority(value);
        break;
      default:
        setTitle('');
        setDescription('');
        setSelectDate('');
        setSelectTime('');
        setLocation('');
        setCategory('');
        setAddPicture('');
        setPriority('');
        break;
    }
  };

  const handleAddEvent = e => {
    e.preventDefault();

    // const {title, description, selectDate, selectTime,location, category, addPicture, priority } = e.currentTarget.elements;

//  dispatch(
    //       addContact({ name: contactName.value, number: contactNumber.value })
    //     );

    console.log('title', title, 'description',description, 'selectDate', selectDate, selectTime,location, category, addPicture, priority);

    setTitle('');
    setDescription('');
    setSelectDate('');
    setSelectTime('');
    setLocation('');
    setCategory('');
    setAddPicture('');
    setPriority('');
    
    navigate("/", { replace: true });
  };

  return (
    <FormWrap
      component="form"
      
      autoComplete="off"
      onSubmit={handleAddEvent}
    >
      <Div><Label>
        Title
        <TextField
          type="text"
          name="title"
          label="Title"
          onChange={handleChange}
          value={title}
          maxlength='20'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Title may contain only letters, apostrophe, dash and spaces."
          required
        />
      </Label>
      <Label>
        Description
        <DescriptionTextField
          required
          type="text"
          label="Description"
          name="description"
          onChange={handleChange}
          value={description}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Label>
      <Label>
        Select date
        <TextField
          required
          type="tel"
          label="Select date"
          name="selectDate"
          onChange={handleChange}
          value={selectDate}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </Label>
      <Label>
        Select time
        <TextField
          required
          type="tel"
          label="Select time"
          name="selectTime"
          onChange={handleChange}
          value={selectTime}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </Label>
      <Label>
        Location
        <TextField
          required
          type="tel"
          label="Location"
          name="location"
          onChange={handleChange}
          value={location}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </Label>
      <Label>
        Category
        <TextField
          required
          type="tel"
          label="Category"
          name="category"
          onChange={handleChange}
          value={category}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </Label>
      <Label>
        Add picture
        <TextField
          required
          type="tel"
          label="Add picture"
          name="addPicture"
          onChange={handleChange}
          value={addPicture}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </Label>
      <Label>
        Priority
        <TextField
          required
          type="tel"
          label="Priority"
          name="priority"
          onChange={handleChange}
          value={priority}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </Label>
      </Div>
      <ButtonDiv>
      <Button type="submit" text="Add event">
        Add event
      </Button>
      </ButtonDiv>
    </FormWrap>
  );
}
