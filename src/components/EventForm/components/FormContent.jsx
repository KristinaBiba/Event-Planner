import { Form } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { TextInput } from './TextInput';
import { SelectInput } from './SelectInput';
import { DatePicker } from './DatePicker';
import { category, priority } from 'helpers/variables';

import {
  Button,
  ButtonDiv,
  DescriptionTextField,
  Div,
  TextField,
  TimePickerWrapper,
  DatePickerWrapper,
} from './FormContent_css';

export const FormContent = ({ eventData }) => {
  const { t } = useTranslation();
  return (
    <Form>
      <Div>
        <TextInput
          name="title"
          label={t('formText.input1')}
          as={TextField}
          placeholder={t('formText.placeholder1')}
        />

        <TextInput
          name="description"
          label={t('formText.input2')}
          as={DescriptionTextField}
          placeholder={t('formText.placeholder2')}
        />

        <DatePickerWrapper>
          <DatePicker
            name="selectDate"
            placeholder={t('formText.input3')}
            label={t('formText.placeholder3')}
            ariaLabel="Make choice date of event"
            dateFormat="dd.MM.yyyy"
            shouldCloseOnSelect={false}
          />
        </DatePickerWrapper>

        <TimePickerWrapper>
          <DatePicker
            name="selectTime"
            placeholder={t('formText.input4')}
            label={t('formText.placeholder4')}
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
          label={t('formText.input5')}
          as={TextField}
          placeholder={t('formText.placeholder5')}
        />

        <SelectInput
          name="category"
          label={t('formText.input6')}
          placeholder={t('formText.placeholder6')}
          array={category}
        />

        <TextInput
          name="addPicture"
          label={t('formText.input7')}
          as={TextField}
          placeholder={t('formText.placeholder7')}
          disabled
        />

        <SelectInput
          name="priority"
          label={t('formText.input8')}
          placeholder={t('formText.placeholder8')}
          array={priority}
        />
      </Div>

      <ButtonDiv>
        <Button
          type="submit"
          aria-label={eventData ? `${t('formButton.placeholder2')}` : `${t('formButton.placeholder1')}`}
        >
          {eventData ? `${t('formButton.Save')}` : `${t('formButton.AddEvent')}`}
        </Button>
      </ButtonDiv>
    </Form>
  );
};

FormContent.propTypes = {
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
