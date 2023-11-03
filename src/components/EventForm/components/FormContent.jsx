import { Form } from 'formik';
import PropTypes from 'prop-types';

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
  return (
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
        <Button
          type="submit"
          aria-label={eventData ? 'Save button' : 'Add event button'}
        >
          {eventData ? 'Save' : 'Add event'}
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
