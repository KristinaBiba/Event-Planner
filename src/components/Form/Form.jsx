import React from 'react';
import {
  Button,
  ButtonDiv,
  DatePick,
  DatePickerWrapper,
  DescriptionTextField,
  Div,
  DivWrap,
  ErrorDiv,
  FormWrap,
  Label,
  TextField,
} from './Form_css';
import { useNavigate } from 'react-router-dom';

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { useSelector, useDispatch } from 'react-redux';
// import { getContacts } from 'redux/selectors';
// import { addContact } from 'redux/Contacts/operations';

export function Form() {

  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .required('Required')
      .min(3, 'Title must be 3 characters or more')
      .max(30, 'Title must be 30 characters or less')
      .trim()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'Title must contain only letter'),
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
    category: Yup.string()
      .required('Required')
      .matches(
        /(Art|Music|Business|Conference|Workshop|Party|Sport)/,
        'Choose true category'
      ),
    addPicture: Yup.string().url(),
    priority: Yup.string()
      .required('Required')
      .matches(/(High|Medium|Low)/),
  });

  return (
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
      onSubmit={async (values, actions) => {

        // await dispatch(
        //   logIn({
        //     email: values.email,
        //     password: values.password,
        //   })
        // );
        console.log({ title: values.title });

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

      })}}
    >
      {({ errors, touched, handleReset }) => (
        <FormWrap>
          <Div>
            <Label>
              Title
              <DivWrap>
                <Field
                  as={TextField}
                  id="title"
                  name="title"
                  type="text"
                  // autoComplete="username"
                  placeholder="Enter title"
                  // border={touched.title && errors.title && '1px solid #ff2b77'}
                  // $invalid={touched.title && errors.title && '1px solid #ff2b77'}
                />
                <ErrorMessage component={ErrorDiv} name="title" />
              </DivWrap>
            </Label>
            <Label>
              Description
              <DivWrap>
                <Field
                  as={DescriptionTextField}
                  id="description"
                  name="description"
                  type="text"
                  // autoComplete="current-password"
                  placeholder="Enter description"
                />
                <ErrorMessage component={ErrorDiv} name="description" />
              </DivWrap>
            </Label>
            <DatePickerWrapper>
            <Label>
              Select date
              <DivWrap>
                <Field
                  as={DatePick}
                  id="selectDate"
                  name="selectDate"
                  type="date"
                  // autoComplete="current-password"
                  placeholder="Choose date"
                  dateFormat="yyyy-MM-dd"

                />
                <ErrorMessage component={ErrorDiv} name="selectDate" />
              </DivWrap>
            </Label>
            </DatePickerWrapper>
            <Label>
              Select time
              <DivWrap>
                <Field
                  as={TextField}
                  id="selectTime"
                  name="selectTime"
                  type="text"
                  // autoComplete="current-password"
                  placeholder="Choose time"
                />
                <ErrorMessage component={ErrorDiv} name="selectTime" />
              </DivWrap>
            </Label>
            <Label>
              Location
              <DivWrap>
                <Field
                  as={TextField}
                  id="location"
                  name="location"
                  type="text"
                  // autoComplete="current-password"
                  placeholder="Choose location"
                />
                <ErrorMessage component={ErrorDiv} name="location" />
              </DivWrap>
            </Label>
            <Label>
              Category
              <DivWrap>
                <Field
                  as={TextField}
                  id="category"
                  name="category"
                  type="text"
                  // autoComplete="current-password"
                  placeholder="Choose category"
                />
                <ErrorMessage component={ErrorDiv} name="category" />
              </DivWrap>
            </Label>
            <Label>
              Add picture
              <DivWrap>
                <Field
                  as={TextField}
                  id="addPicture"
                  name="addPicture"
                  type="text"
                  // autoComplete="current-password"
                  placeholder="Choose picture"
                />
                <ErrorMessage component={ErrorDiv} name="addPicture" />
              </DivWrap>
            </Label>
            <Label>
              Priority
              <DivWrap>
                <Field
                  as={TextField}
                  id="priority"
                  name="priority"
                  type="text"
                  // autoComplete="current-password"
                  placeholder="Choose priority"
                />
                <ErrorMessage component={ErrorDiv} name="priority" />
              </DivWrap>
            </Label>
          </Div>
          <ButtonDiv>
            <Button type="submit" aria-label="Submit form">
              Add event
            </Button>
          </ButtonDiv>
        </FormWrap>
      )}
    </Formik>
  );
}
