import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePick = styled(DatePicker)`
  border-radius: 8px;
  border: ${props =>
    props.$error
      ? '1px solid var(--error-validation-color)'
      : '1px solid var(--border-color)'};
  color: ${props =>
    props.$open ? 'var(--primary-text-color)' : 'var(--secondary-text-color)'};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 16px 12px;
  margin-top: 8px;
  margin-bottom: 20px;
  width: 240px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: block;
    width: 308px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 372px;
  }
  &:focus-visible {
    border: 1px solid var(--primary-text-color);
    outline: none;
  }
`;

export const ButtonPick = styled.button`
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--primary-text-color);
  border-radius: 4px;
  background-color: var(--primary-background-color);
  outline: none;
  margin-top: 6px;
  color: var(--primary-text-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  &:hover,
  &:focus {
    background-color: var(--btn-hover-background);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:disabled {
    background-color: var(--border-color);
  }
  @media screen and (min-width: 768px) {
    margin-left: 70px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 120px;
  }
`;

export const ButtonPickChoose = styled(ButtonPick)`
  background-color: var(--primary-text-color);
  color: var(--btn-accent-color);
  margin-left: 16px;
`;
