import React from 'react';
import { ErrorMessage, Field, useField } from 'formik';
import PropTypes from 'prop-types';

import { ReactComponent as ChevronDownSmall } from '../../../images/svg/chevron-down-small.svg';

import {
  CategoryOptions,
  DivWrap,
  ErrorDiv,
  Label,
  SvgDivArrow,
} from '../Form_css';

export const SelectInput = ({ label, array, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Label>
      {label}
      <SvgDivArrow
        style={{
          stroke:
            (meta.touched && meta.error && 'var(--error-validation-color)') ||
            'var(--primary-text-color)',
        }}
      >
        <ChevronDownSmall aria-label="Make choice" />
      </SvgDivArrow>
      <DivWrap>
        <Field
          {...field}
          {...props}
          style={{
            border:
              meta.touched &&
              meta.error &&
              '1px solid var(--error-validation-color)',
            color: meta.touched
              ? 'var(--secondary-text-color)'
              : 'var(--border-color)',
          }}
        >
          {array.map(name => (
            <CategoryOptions key={name} value={name}>
              {name}
            </CategoryOptions>
          ))}
        </Field>
        <ErrorMessage component={ErrorDiv} name={field.name} />
      </DivWrap>
    </Label>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
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
  as: PropTypes.shape({ $$typeof: PropTypes.symbol.isRequired }).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
