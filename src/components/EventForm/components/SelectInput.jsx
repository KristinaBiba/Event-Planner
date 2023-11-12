import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

import { ReactComponent as ChevronDownSmall } from '../../../images/svg/chevron-down-small.svg';

import { ErrorDiv, SvgDivArrow, Label } from '../EventForm_css';
import {
  SelectDiv,
  SelectItem,
  SelectList,
} from './SelectInput_css';

export const SelectInput = ({ label, name, array, placeholder, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  const { t } = useTranslation();

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
            : value.id
            ? 'var(--secondary-text-color)'
            : 'var(--border-color)',
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {isOpen ? placeholder : t(value.name) || placeholder}
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
        <ChevronDownSmall aria-label={t('formButton.placeholder3')} />
      </SvgDivArrow>

      {isOpen && (
        <SelectList>
          {array.map(item => (
            <SelectItem
              key={item.id}
              onClick={() => {
                setValue(item);
                setIsOpen(false);
              }}
            >
              {t(item.name)}
            </SelectItem>
          ))}
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
      id: PropTypes.string.isRequired,
      up: PropTypes.bool,
    })
  ).isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.shape.isRequired,
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
