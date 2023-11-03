import styled from 'styled-components';
import { TextField } from './components/FormContent_css';

export const FormWrap = styled.div`
  background-color: var(--primary-background-color);
  padding: 40px 16px;
  border-radius: 8px;
  box-shadow: var(--primary-shadow);
  @media screen and (min-width: 768px) {
    padding: 40px 24px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 40px 54px 40px;
  }
`;

export const DivWrap = styled.div`
  position: relative;
`;

export const ErrorDiv = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  color: var(--error-validation-color);

  @media screen and (min-width: 768px) {
    bottom: -20px;
  }
`;

export const SvgDivArrow = styled.div`
  cursor: pointer;
  position: absolute;
  top: 46px;
  right: 12px;
  background-color: inherit;
    @media screen and (min-width: 768px) {
    top: 40px;
  }
  &:hover,
  &:focus {
    stroke: var(--primary-text-color);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Label = styled.label`
  position: relative;
  color: var(--primary-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  @media screen and (min-width: 768px) {
    display: block;
  }
  ${TextField}:disabled & {
    color: var(--border-color);
  }
`;
