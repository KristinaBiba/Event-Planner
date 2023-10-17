import React, { useState } from 'react';
import { ErrorMessage } from 'formik';
// import PropTypes from 'prop-types';

import { ReactComponent as ChevronDownSmall } from '../../../images/svg/chevron-down-small.svg';

import {
  ButtonPick,
  ButtonPickChoose,
  DatePick,
  DatePickerWrapper,
  DivWrap,
  ErrorDiv,
  Label,
  SvgDivArrow,
} from '../Form_css';

export const DatePicker = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  const [startDate, setStartDate] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleCalendarClose = () => {
    field.value = startDate;
    setIsOpen(false);
  };
  const handleCalendarOpen = () => {
    field.value = 'Select date';
    setIsOpen(true);
  };

  return (
    <DatePickerWrapper>
      <Label>
        Select date
        <DivWrap>
          <DatePick
            {...field}
            {...props}
            type="text"
            closeOnScroll={true}
            dateFormat="dd.MM.yyyy"
            selected={startDate}
            shouldCloseOnSelect={false}
            locale="en"
            onChange={date => {
              setStartDate(date);
              field.value = 'Select date';
            }}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
            minDate={new Date()}
            placeholderText="Select date"
            $open={field.value === 'Select date'}
            $error={errors[field.name] && touched[field.name]}
          >
            <ButtonPick
              type="button"
              onClick={e => {
                e.preventDefault();
                setStartDate('');
                handleCalendarClose();
                field.value = '';
                console.log('field.value on Cancel', field.value);
                window.scroll(0, 1);
                window.scroll(0, -1);
              }}
            >
              Cancel
            </ButtonPick>
            <ButtonPickChoose
              type="button"
              onClick={e => {
                e.preventDefault();
                handleCalendarClose();
                console.log('field.value on Choose date', field.value);
                console.log('startDate on Choose date', startDate);
                console.log('touched[field.name]', touched[field.name]);
                console.log('errors[field.name]', errors[field.name]);
                console.log('[field.name]', [field.name]);

                window.scroll(0, 1);
                window.scroll(0, -1);
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
              touched[field.name] &&
                errors[field.name] ?
                'var(--error-validation-color)' :
              'var(--primary-text-color)',
            rotate: isOpen && '180deg',
          }}
        >
          <ChevronDownSmall aria-label="Make choice date of event" />
        </SvgDivArrow>
      </Label>
    </DatePickerWrapper>
  );
};

// SelectInput.propTypes = {
//   label: PropTypes.string.isRequired,
//   array: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   field: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//     onBlur: PropTypes.func,
//     onChange: PropTypes.func,
//   }),
//   meta: PropTypes.shape({
//     touched: PropTypes.bool.isRequired,
//     error: PropTypes.string.isRequired,
//     initialError: PropTypes.string,
//     initialTouched: PropTypes.bool,
//     initialValue: PropTypes.string,
//     value: PropTypes.string,
//   }),
//   as: PropTypes.shape({ $$typeof: PropTypes.symbol.isRequired }).isRequired,
//   name: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired,
// };
