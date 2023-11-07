import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
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
    category: Yup.object().required('Required'),
    // addPicture: Yup.string().url(),
    priority: Yup.object().required('Required'),
  });