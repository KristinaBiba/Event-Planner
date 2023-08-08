import React from 'react';
import { ErrorMessage, Field, useField } from 'formik';
import { DivWrap, ErrorDiv, Label } from '../Form_css';
import { SvgButtonCrossSmall } from 'components/SharedLayout/SharedLayout_css';
import { ReactComponent as CrossSmall } from '../../../images/svg/cross-small.svg';

export const TextInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  return (
    <Label>
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
            top: '16px',
            stroke:
              (meta.touched && meta.error && 'var(--error-validation-color)') ||
              (meta.value && '#7B61FF') ||
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
