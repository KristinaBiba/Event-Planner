import React from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { TextInput } from './TextInput/TextInput';
import { SelectInput } from './SelectInput/SelectInput';
import { DatePicker } from './DatePicker/DatePicker';
import { category, priority } from 'helpers/variables';

import {
  Button,
  ButtonDiv,
  DescriptionTextField,
  Div,
  FormWrap,
  Select,
  TextField,
  TimePickerWrapper,
  DatePickerWrapper,
} from './Form_css';

export function EventForm({ onSubmitNewEvent }) {
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .required('Required')
      .min(3, 'Title must be 3 characters or more')
      .max(30, 'Title must be 30 characters or less')
      .trim(),
    description: Yup.string()
      .required('Required')
      .min(3, 'Must be 3 characters or more')
      .max(300, 'Must be 300 characters or less')
      .trim(),
    selectDate: Yup.string().required('Required'),
    selectTime: Yup.string().required('Required'),
    location: Yup.string()
      .required('Required')
      .min(3)
      .max(30)
      .trim()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])/),
    category: Yup.string().required('Required'),
    // addPicture: Yup.string().url(),
    priority: Yup.string().required('Required'),
  });

  return (
    <FormWrap>
      <Formik
        validationSchema={SignupSchema}
        validateOnBlur={false}
        validateOnChange={true}
        initialValues={{
          title: '',
          description: '',
          selectDate: '',
          selectTime: '',
          location: '',
          category: '',
          addPicture: '',
          priority: '',
        }}
        onChange={values => {
          console.log(values);
        }}
        onSubmit={async (values, actions) => {
          await onSubmitNewEvent({
            title: values.title,
            description: values.description,
            date: values.selectDate,
            time: values.selectTime,
            location: values.location,
            category: values.category,
            priority: values.priority,
            id: nanoid(),
          });

          navigate('/', { replace: true });

          actions.resetForm({
            values: {
              title: '',
              description: '',
              selectDate: '',
              selectTime: '',
              location: '',
              category: '',
              addPicture: '',
              priority: '',
            },
          });
        }}
      >
        {() => (
          <Form>
            <Div>
              <TextInput
                name="title"
                label="Title"
                as={TextField}
                placeholder="Enter title"
              />

              <TextInput
                name="description"
                label="Description"
                as={DescriptionTextField}
                placeholder="Enter description"
              />

              <DatePickerWrapper>
                <DatePicker
                  name="selectDate"
                  placeholder="Select date"
                  label="Select date"
                  ariaLabel="Make choice date of event"
                  dateFormat="dd.MM.yyyy"
                  shouldCloseOnSelect={false}
                />
              </DatePickerWrapper>

              <TimePickerWrapper>
                <DatePicker
                  name="selectTime"
                  placeholder="Select time"
                  label="Select time"
                  ariaLabel="Make choice time of event"
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={1}
                  dateFormat="hh : mm  aa"
                  shouldCloseOnSelect
                />
              </TimePickerWrapper>

              <TextInput
                name="location"
                label="Location"
                as={TextField}
                placeholder="Choose location"
              />

              <SelectInput
                name="category"
                label="Category"
                as={Select}
                placeholder="Choose category"
                array={category}
              />

              <TextInput
                name="addPicture"
                label="Add picture"
                as={TextField}
                placeholder="Choose picture"
                disabled
              />

              <SelectInput
                name="priority"
                label="Priority"
                as={Select}
                placeholder="Choose priority"
                array={priority}
              />
            </Div>

            <ButtonDiv>
              <Button type="submit" aria-label="Add event">
                Add event
              </Button>
            </ButtonDiv>
          </Form>
        )}
      </Formik>
    </FormWrap>
  );
}

EventForm.propTypes = {
  onSubmitNewEvent: PropTypes.func.isRequired,
};
