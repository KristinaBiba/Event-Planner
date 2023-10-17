import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { TextInput } from './TextInput/TextInput';
import { SelectInput } from './SelectInput/SelectInput';
import { DatePicker } from './DatePicker/DatePicker';
import { category, priority } from 'helpers/variables';

import { ReactComponent as ChevronDownSmall } from '../../images/svg/chevron-down-small.svg';

import {
  Button,
  ButtonDiv,
  // ButtonPick,
  // ButtonPickChoose,
  DatePick,
  // DatePickerWrapper,
  DescriptionTextField,
  Div,
  DivWrap,
  ErrorDiv,
  FormWrap,
  Label,
  Select,
  TextField,
  TimePickerWrapper,
  SvgDivArrow,
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
    selectDate: Yup.object().required('Required'),
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

  // const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');

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
          selectTime: startTime,
          location: '',
          category: '',
          addPicture: '',
          priority: '',
        }}
        onSubmit={async (e, values, actions) => {
          e.preventDefault();
          console.log('values.selectDate onSubmit', values.selectDate);
          await onSubmitNewEvent({
            title: values.title,
            description: values.description,
            date: values.selectDate,
            time: startTime,
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
        {({ errors, touched }) => (
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

              <Field
                name="selectDate"
                component={DatePicker}
                placeholder="Select date"
                // onSave={(()=> set)}
              />

              {/* <DatePickerWrapper>
                <Label>
                  Select date
                  <DivWrap>
                    <DatePick
                      name="selectDate"
                      dateFormat="dd.MM.yyyy"
                      closeOnScroll={true}
                      selected={startDate}
                      locale="en"
                      onChange={date => setStartDate(date)}
                      minDate={new Date()}
                      placeholderText="Select date"
                      $error={errors.selectDate}
                      >
                      <ButtonPick
                        type="button"
                        onClick={e => {
                          e.preventDefault();
                          setStartDate('');
                        }}
                      >
                        Clear
                      </ButtonPick>
                      <ButtonPickChoose
                        type="button"
                        onClick={e => {
                          e.preventDefault();
                          window.scroll(0, 1);
                        }}
                      >
                        Choose date
                      </ButtonPickChoose>
                    </DatePick>

                    <ErrorMessage component={ErrorDiv} name="selectDate" />
                  </DivWrap>
                  <SvgDivArrow
                    style={{
                      stroke:
                        (touched.selectDate &&
                          errors.selectDate &&
                          'var(--error-validation-color)') ||
                        'var(--primary-text-color)',
                    }}
                  >
                    <ChevronDownSmall aria-label="Make choice date of event" />
                  </SvgDivArrow>
                </Label>
              </DatePickerWrapper> */}

              {/* <TimePickerWrapper>
                <Label>
                  Select time
                  <SvgDivArrow
                    style={{
                      stroke:
                        (touched.selectTime &&
                          errors.selectTime &&
                          'var(--error-validation-color)') ||
                        'var(--primary-text-color)',
                    }}
                  >
                    <ChevronDownSmall aria-label="Make choice time of event" />
                  </SvgDivArrow>
                  <DivWrap>
                    <DatePick
                      selected={startTime}
                      onChange={time => setStartTime(time)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={1}
                      dateFormat="hh : mm  aa"
                      closeOnScroll={true}
                      minDate={new Date()}
                      placeholderText="Select time"
                      $error={errors.selectTime && touched.selectTime}
                    />

                    <ErrorMessage component={ErrorDiv} name="selectTime" />
                  </DivWrap>
                </Label>
              </TimePickerWrapper> */}

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
