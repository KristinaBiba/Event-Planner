import { useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';

import { ReactComponent as ChevronDownSmall } from '../../../images/svg/chevron-down-small.svg';

import { DivWrap, ErrorDiv, SvgDivArrow, Label } from '../EventForm_css';
import { ButtonPick, ButtonPickChoose, DatePick } from './DatePicker_css';

export const DatePicker = ({
  label,
  placeholder,
  ariaLabel,
  dateFormat,
  shouldCloseOnSelect,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [field, meta, helpers] = useField(props);
  const [startEvent, setStartEvent] = useState(field.value);
  const { setValue } = helpers;

  const handleCalendarClose = () => {
    setValue(startEvent);
    setIsOpen(false);
  };
  const handleCalendarOpen = () => {
    setValue(placeholder);
    setIsOpen(true);
  };

  return (
    <Label>
      {label}
      <DivWrap>
        <DatePick
          {...field}
          {...props}
          type="text"
          closeOnScroll={true}
          dateFormat={dateFormat}
          selected={startEvent}
          shouldCloseOnSelect={shouldCloseOnSelect}
          onChange={date => {
            setStartEvent(date);
            setValue(placeholder);
          }}
          onCalendarClose={handleCalendarClose}
          onCalendarOpen={handleCalendarOpen}
          minDate={new Date()}
          placeholderText={placeholder}
          $open={field.value === placeholder}
          $error={meta.touched && meta.error}
        >
          {field.name === 'selectDate' && (
            <>
              <ButtonPick
                type="button"
                onClick={e => {
                  e.preventDefault();
                  setStartEvent('');
                  handleCalendarClose();
                  setValue('');
                  window.scroll(0, -1);
                  window.scroll(0, 1);
                }}
              >
                Cancel
              </ButtonPick>
              <ButtonPickChoose
                type="button"
                onClick={e => {
                  e.preventDefault();
                  handleCalendarClose();
                  window.scroll(0, 1);
                  window.scroll(0, -1);
                }}
              >
                Choose date
              </ButtonPickChoose>
            </>
          )}
        </DatePick>

        <ErrorMessage component={ErrorDiv} name={field.name} />
      </DivWrap>
      <SvgDivArrow
        style={{
          stroke:
            meta.touched && meta.error
              ? 'var(--error-validation-color)'
              : 'var(--primary-text-color)',
          rotate: isOpen && '180deg',
        }}
      >
        <ChevronDownSmall aria-label={ariaLabel} />
      </SvgDivArrow>
    </Label>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  dateFormat: PropTypes.string.isRequired,
  shouldCloseOnSelect: PropTypes.bool,
  name: PropTypes.string.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
  }),
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    initialError: PropTypes.string,
    initialTouched: PropTypes.bool,
    initialValue: PropTypes.string,
    value: PropTypes.string,
  }),
};
