import React from 'react';
import { ErrorMessage, Field, useField } from 'formik';

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
      <SvgDivArrow style={{ stroke: 'var(--primary-text-color)' }}>
        <ChevronDownSmall aria-label="Make choice"/>
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
