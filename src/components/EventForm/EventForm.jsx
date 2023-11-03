import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import parseISO from 'date-fns/parseISO';

import { SignupSchema } from 'helpers/signupSchema';
import { FormContent } from './components/FormContent';

import { FormWrap } from './EventForm_css';

export function EventForm({ onSubmit, eventData }) {
  const navigate = useNavigate();

  return (
    <FormWrap>
      <Formik
        validationSchema={SignupSchema}
        validateOnBlur={false}
        validateOnChange={true}
        initialValues={{
          title: eventData?.title || '',
          description: eventData?.description || '',
          selectDate: eventData
            ? parseISO(
                eventData?.date.split('.').reverse().join('-') + 'T00:00:00'
              )
            : '',
          selectTime: eventData
            ? parseISO('2023-01-01T' + eventData?.time + ':00')
            : '',
          location: eventData?.location || '',
          category: eventData?.category || '',
          addPicture: eventData?.addPicture || '',
          priority: eventData?.priority || '',
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
            id: eventData?.id || nanoid(),
          });

          eventData
            ? navigate(`/events/${eventData.id}`, { replace: true })
            : navigate('/', { replace: true });

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
        {() => <FormContent eventData={eventData} />}
      </Formik>
    </FormWrap>
  );
}

EventForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  eventData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    addPicture: PropTypes.string,
    priority: PropTypes.string.isRequired,
  }),
};
