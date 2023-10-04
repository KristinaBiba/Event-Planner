import React from 'react';
import { ErrorMessage, Field, useField } from 'formik';
import { DivWrap, ErrorDiv, Label, SvgButtonCrossSmall } from '../Form_css';
import { ReactComponent as CrossSmall } from '../../../images/svg/cross-small.svg';

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
          <CrossSmall />
        </SvgButtonCrossSmall>
        <ErrorMessage component={ErrorDiv} name={field.name} />
      </DivWrap>
    </Label>
  );
};
