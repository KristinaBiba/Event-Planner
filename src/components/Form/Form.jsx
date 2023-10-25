import React from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import { TextInput } from './TextInput/TextInput';
import { SelectInput } from './SelectInput/SelectInput';
import { DatePicker } from './DatePicker/DatePicker';
import { category, priority } from 'helpers/variables';
import { SignupSchema } from 'helpers/signupSchema';

import {
  Button,
  ButtonDiv,
  DescriptionTextField,
  Div,
  FormWrap,
  TextField,
  TimePickerWrapper,
  DatePickerWrapper,
} from './Form_css';

export function EventForm({ onSubmit }) {
  const navigate = useNavigate();

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
          await onSubmit({
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
  onSubmit: PropTypes.func.isRequired,
};
