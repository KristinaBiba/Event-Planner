import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  Button,
  ButtonDiv,
  ButtonPick,
  ButtonPickChoose,
  CategoryOptions,
  DatePick,
  DatePickerWrapper,
  DescriptionTextField,
  DisabledLabel,
  Div,
  DivWrap,
  ErrorDiv,
  FormWrap,
  Label,
  Select,
  TextField,
  TimePickerWrapper,
} from './Form_css';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CrossSmall } from '../../images/svg/cross-small.svg';
import { ReactComponent as ChevronDownSmall } from '../../images/svg/chevron-down-small.svg';

import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { SvgButtonCrossSmall } from 'components/SharedLayout/SharedLayout_css';
import { TextInput } from './TextInput/TextInput';

export function EventForm({ onSubmitNewEvent }) {
  //   const formikProps = useFormik({
  //     initialValues,
  //     validationSchema,
  //     onSubmit: yourSubmitFunction,
  //     ...etc
  // });

  // const  onInputClean = (fieldName) => {
  //   setFieldValue(fieldName, '')
  // };
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
      .max(300, 'Must be 30 characters or less')
      .trim(),
    selectDate: Yup.string(),
    selectTime: Yup.string(),
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

  const [startDate, setStartDate] = useState('');
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
          selectTime: '',
          location: '',
          category: '',
          // addPicture: '',
          priority: '',
        }}
        onSubmit={async (values, actions) => {
          await onSubmitNewEvent({
            title: values.title,
            description: values.description,
            date: startDate,
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
        {({ touched, errors, values, setFieldValue }) => (
          <Form>
            <Div>
              {/* <Label>
                Title
                <DivWrap>
                  <Field
                    as={TextField}
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Enter title"
                  />

                  <SvgButtonCrossSmall
                    type="button"
                    onClick={() => {
                      setFieldValue('title', '');
                    }}
                    style={{
                      top: '16px',
                      stroke: values.title ? '#7B61FF' : 'var(--border-color)',
                    }}
                  >
                    <CrossSmall />
                  </SvgButtonCrossSmall>

                  <ErrorMessage component={ErrorDiv} name="title" />
                </DivWrap>
              </Label> */}
              <TextInput name="title" label="Title" as={TextField} placeholder="Enter title"/>
              <TextInput name="description" label="Description" as={DescriptionTextField} placeholder="Enter description"/>
              {/* <Label>
                Description
                <DivWrap>
                  <Field
                    as={DescriptionTextField}
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Enter description"
                    style={{
                      border:
                        errors.description &&
                        touched.description &&
                        '1px solid var(--error-validation-color)',
                    }}
                  />
                  <SvgButtonCrossSmall
                    type="button"
                    onClick={() => {
                      setFieldValue('description', '');
                    }}
                    style={{
                      top: '16px',
                      stroke:
                        (errors.description &&
                          touched.description &&
                          'var(--error-validation-color)') ||
                        (values.description && '#7B61FF') ||
                        'var(--border-color)',
                    }}
                  >

                    <CrossSmall />
                  </SvgButtonCrossSmall>
                  <ErrorMessage component={ErrorDiv} name="description" />
                </DivWrap>
              </Label> */}
              <DatePickerWrapper>
                <Label>
                  Select date
                  <DivWrap>
                    <DatePick
                      dateFormat="dd.MM.yyyy"
                      closeOnScroll={true}
                      selected={startDate}
                      locale="en"
                      onChange={date => setStartDate(date)}
                      minDate={new Date()}
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
                </Label>
              </DatePickerWrapper>
              <TimePickerWrapper>
                <Label>
                  Select time
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
                    />
                    {/* <SvgButtonCrossSmall type='button' disabled>
                    <ChevronDownSmall />
                  </SvgButtonCrossSmall> */}
                    <ErrorMessage component={ErrorDiv} name="selectTime" />
                  </DivWrap>
                </Label>
              </TimePickerWrapper>
              <TextInput name="location" label="Location" as={TextField} placeholder="Choose location"/>

              {/* <Label>
                Location
                <DivWrap>
                  <Field
                    as={TextField}
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Choose location"
                  />
                  <SvgButtonCrossSmall
                    type="button"
                    onClick={() => {
                      setFieldValue('location', '');
                    }}
                    style={{
                      top: '16px',
                      stroke: values.location
                        ? '#7B61FF'
                        : 'var(--border-color)',
                    }}
                  >
                    {' '}
                    <CrossSmall />
                  </SvgButtonCrossSmall>
                  <ErrorMessage component={ErrorDiv} name="location" />
                </DivWrap>
              </Label> */}
              <Label>
                Category
                <DivWrap>
                  <Field
                    as={Select}
                    id="category"
                    name="category"
                    placeholder="Choose category"
                  >
                    <CategoryOptions value="select">
                      Select category
                    </CategoryOptions>
                    <CategoryOptions value="Art">Art</CategoryOptions>
                    <CategoryOptions value="Music">Music</CategoryOptions>
                    <CategoryOptions value="Business">Business</CategoryOptions>
                    <CategoryOptions value="Conference">
                      Conference
                    </CategoryOptions>
                    <CategoryOptions value="Workshop">Workshop</CategoryOptions>
                    <CategoryOptions value="Party">Party</CategoryOptions>
                    <CategoryOptions value="Sport">Sport</CategoryOptions>
                  </Field>
                  <ErrorMessage component={ErrorDiv} name="category" />
                </DivWrap>
              </Label>
              <DisabledLabel>
                Add picture
                <DivWrap>
                  <Field
                    disabled
                    as={TextField}
                    id="addPicture"
                    name="addPicture"
                    type="text"
                    placeholder="Choose picture"
                  />
                  <SvgButtonCrossSmall
                    type="button"
                    onClick={() => {
                      setFieldValue('title', '');
                    }}
                    style={{ top: '16px', stroke: 'var(--border-color)' }}
                  >
                    <CrossSmall />
                  </SvgButtonCrossSmall>
                  <ErrorMessage component={ErrorDiv} name="addPicture" />
                </DivWrap>
              </DisabledLabel>
              <Label>
                Priority
                <DivWrap>
                  <Field
                    as={Select}
                    id="priority"
                    name="priority"
                    placeholder="Choose priority"
                  >
                    <CategoryOptions value="select">
                      Select priority
                    </CategoryOptions>
                    <CategoryOptions value="High">High</CategoryOptions>
                    <CategoryOptions value="Medium">Medium</CategoryOptions>
                    <CategoryOptions value="Low">Low</CategoryOptions>
                  </Field>
                  <ErrorMessage component={ErrorDiv} name="priority" />
                </DivWrap>
              </Label>
            </Div>
            <ButtonDiv>
              <Button type="submit" aria-label="Submit form">
                Add event
              </Button>
            </ButtonDiv>
          </Form>
        )}
      </Formik>
    </FormWrap>
  );
}
