import * as Yup from 'yup';
import i18next from '../i18n';

export const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .required(i18next.t('SignupSchema.Required'))
      .min(3, i18next.t('SignupSchema.TitleMin'))
      .max(30, i18next.t('SignupSchema.TitleMax'))
      .trim(),
    description: Yup.string()
      .required(i18next.t('SignupSchema.Required'))
      .min(3, i18next.t('SignupSchema.DescMin'))
      .max(300, i18next.t('SignupSchema.DescMax'))
      .trim(),
    selectDate: Yup.string().required(i18next.t('SignupSchema.Required')),
    selectTime: Yup.string().required(i18next.t('SignupSchema.Required')),
    location: Yup.string()
      .required(i18next.t('SignupSchema.Required'))
      .min(3)
      .max(30)
      .trim()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])/),
    category: Yup.object().required(i18next.t('SignupSchema.Required')),
    // addPicture: Yup.string().url(),
    priority: Yup.object().required(i18next.t('SignupSchema.Required')),
  });