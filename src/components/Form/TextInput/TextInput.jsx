import React from 'react';

import { ErrorMessage, Field, useField } from 'formik';
import PropTypes from 'prop-types';

import { ReactComponent as CrossSmall } from '../../../images/svg/cross-small.svg';

import { DivWrap, ErrorDiv, Label, SvgButtonCrossSmall } from '../Form_css';

export const TextInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  return (
    <Label
      style={{
        color: props.disabled && 'var(--border-color)',
      }}
    >
      {label}
      <DivWrap>
        <Field
          {...field}
          {...props}
          type="text"
          style={{
            border:
              meta.touched &&
              meta.error &&
              '1px solid var(--error-validation-color)',
          }}
        />
        <SvgButtonCrossSmall
          type="button"
          onClick={() => {
            setValue('');
          }}
          style={{
            stroke:
              (meta.touched && meta.error && 'var(--error-validation-color)') ||
              (meta.value && 'var(--primary-text-color)') ||
              'var(--border-color)',
          }}
        >
          <CrossSmall aria-label="Clear the line" />
        </SvgButtonCrossSmall>
        <ErrorMessage component={ErrorDiv} name={field.name} />
      </DivWrap>
    </Label>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  helpers: PropTypes.shape({
    setValue: PropTypes.func,
    setTouched: PropTypes.func,
    setError: PropTypes.func,
  }),
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
