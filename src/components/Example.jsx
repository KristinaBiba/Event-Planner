import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useField,
  Form,
  FormikProps,
  Formik,
  Field,
  ErrorMessage,
} from 'formik';
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
} from './Form/Form_css';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .required('Required')
    .min(3, 'Title must be 3 characters or more')
    .max(30, 'Title must be 30 characters or less')
    .trim(),
  //   description: Yup.string()
  //     .required('Required')
  //     .min(3, 'Must be 3 characters or more')
  //     .max(300, 'Must be 30 characters or less')
  //     .trim(),
  //   selectDate: Yup.string(),
  //   selectTime: Yup.string(),
  location: Yup.string()
    .required('Required')
    .min(3)
    .max(30)
    .trim()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])/),
  //   category: Yup.string().required('Required'),
  // addPicture: Yup.string().url(),
  //   priority: Yup.string().required('Required'),
});

const MyTextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <DivWrap>
      <Label>
        {label}
        <TextField {...field} {...props}/>
      </Label>
      <ErrorMessage component={ErrorDiv} name={props.name} />
    </DivWrap>
  );
};

export const Example = () => {
  // const navigate = useNavigate();

  return (
    <FormWrap>
      <Formik
        validationSchema={SignupSchema}
        validateOnBlur={false}
        validateOnChange={true}
        initialValues={{
          title: '',
          //   description: '',
          //   selectDate: '',
          //   selectTime: '',
          location: '',
          //   category: '',
          // addPicture: '',
          //   priority: '',
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props: FormikProps<Values>) => (
          <Form>
            <Div>
            
                <MyTextField name="title" type="text" label="Title" />
           
                <MyTextField name="location" type="text" label="Location" />
             
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
};
