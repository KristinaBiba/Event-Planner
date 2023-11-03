import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';

import { ReactComponent as ChevronDownSmall } from '../../../images/svg/chevron-down-small.svg';

import { ErrorDiv, SvgDivArrow, Label } from '../EventForm_css';
import {
  SelectDiv,
  SelectItem,
  SelectList,
  SelectListDiv,
} from './SelectInput_css';

export const SelectInput = ({ label, name, array, placeholder, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <Label
      style={{
        color: props.disabled && 'var(--border-color)',
      }}
    >
      {label}

      <SelectDiv
        {...field}
        {...props}
        type="text"
        style={{
          border: isOpen
            ? '1px solid var(--primary-text-color)'
            : meta.touched &&
              meta.error &&
              '1px solid var(--error-validation-color)',
          color: isOpen
            ? 'var(--primary-text-color)'
            : value
            ? 'var(--secondary-text-color)'
            : 'var(--border-color)',
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {isOpen ? placeholder : value || placeholder}
      </SelectDiv>

      <SvgDivArrow
        style={{
          stroke:
            meta.touched && meta.error
              ? 'var(--error-validation-color)'
              : 'var(--primary-text-color)',
          rotate: isOpen && '180deg',
        }}
      >
        <ChevronDownSmall aria-label="Make choice" />
      </SvgDivArrow>

      {isOpen && (
        <SelectList>
          <SelectListDiv>
            {array.map(item => (
              <SelectItem
                key={item.id}
                onClick={() => {
                  setValue(item.name);
                  setIsOpen(false);
                }}
              >
                {item.name}
              </SelectItem>
            ))}
          </SelectListDiv>
        </SelectList>
      )}

      {meta.touched && meta.error && (
        <ErrorMessage component={ErrorDiv} name={field.name} />
      )}
    </Label>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      up: PropTypes.bool,
    })
  ).isRequired,
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
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
