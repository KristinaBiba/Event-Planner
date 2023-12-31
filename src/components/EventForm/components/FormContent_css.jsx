import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

export const Div = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 20px;
    height: 508px;
  }
  @media screen and (min-width: 1440px) {
    column-gap: 42px;
    height: 305px;
  }
`;

export const TextField = styled.input`
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  color: var(--secondary-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 16px 36px 16px 12px;
  margin-top: 8px;
  margin-bottom: 20px;
  width: 240px;
  @media screen and (min-width: 768px) {
    display: block;
    margin-bottom: 0;
    width: 308px;
  }
  @media screen and (min-width: 1440px) {
    width: 372px;
  }
  &:invalid {
    border: 1px solid var(--error-validation-color);
  }
  &:focus-visible {
    border: 1px solid var(--primary-text-color);
    outline: none;
  }
`;

export const DescriptionTextField = styled.textarea`
  resize: none;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  color: var(--secondary-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 16px 36px 16px 12px;
  margin-top: 8px;
  margin-bottom: 20px;
  width: 240px;
  height: 159px;
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

export const ButtonDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  height: 56px;
  padding: 16px;
  border-radius: 8px;
  background: var(--primary-text-color);
  box-shadow: var(--primary-shadow);
  border: none;
  outline: none;
  width: 193px;
  margin-top: 20px;
  color: var(--btn-accent-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:hover,
  &:focus {
    background: var(--btn-hover-background);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:disabled {
    background: var(--border-color);
  }
  @media screen and (max-width: 767px) {
    width: 240px;
  }
`;

export const DatePickerWrapper = styled.div`
  & .react-datepicker {
    border-radius: 11px;
    background-color: var(--primary-background-color);
    box-shadow: var(--calendar-shadow);
    border: none;
    padding: 20px;
    font-family: 'Poppins', 'Nunito Sans', sans-serif;
    width: 240px;
    height: 348px;
    z-index: 1000;
    @media screen and (min-width: 768px) {
      width: 308px;
    }
    @media screen and (min-width: 1440px) {
      width: 372px;
    }
  }
  & .react-datepicker__children-container {
    z-index: 1000;
  }

  & .react-datepicker .react-datepicker__header {
    background-color: var(--primary-background-color);
    color: var(--secondary-text-color);
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 16px;
    border-bottom: none;
    padding: 0;
  }

  & .react-datepicker__navigation {
    top: 16px;
  }

  & .react-datepicker__navigation-icon::before,
  react-datepicker__navigation-icon::after {
    border-color: var(--secondary-text-color);
  }
  & .react-datepicker__current-month {
    font-size: 14px;
    color: var(--secondary-text-color);
    padding-bottom: 16px;
  }

  & .react-datepicker__month {
    margin: 0;
  }

  & .react-datepicker__month:last-child {
    margin: 0;
  }

  & .react-datepicker__week {
    margin-bottom: 10px;
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  & .react-datepicker__day {
    color: var(--divider, var(--border-color));
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    padding: 6px;
    margin: 0;
    margin-top: 2px;
    z-index: 1000;
    @media screen and (min-width: 768px) {
      margin: 6px;
    }
    @media screen and (min-width: 1440px) {
      margin: 5px 10px;
    }
    :hover,
    :focus {
      color: var(--btn-accent-color);
      background-color: var(--primary-text-color);
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  & .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__day--keyboard-selected:focus {
    color: var(--btn-accent-color);
    background-color: var(--primary-text-color);
    border-radius: 0;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  & .react-datepicker__day-name {
    color: var(--secondary-text-color);
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    margin: 1.5px;
    @media screen and (min-width: 768px) {
      margin: 6px;
    }
    @media screen and (min-width: 1440px) {
      margin: 10px;
    }
  }

  & .react-datepicker__day-name:first-child,
  .react-datepicker__day-name:last-child {
    color: var(--priority-high-text-color);
  }

  & .react-datepicker__day--today {
    color: var(--primary-text-color);
    text-align: center;
    font-family: 'Inter';
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
  }

  & .react-datepicker__day--selected {
    background-color: var(--primary-text-color);
    color: var(--btn-accent-color);
    border-radius: 0;
  }

  & .react-datepicker__day--outside-month {
    color: var(--btn-accent-color);
  }

  & .react-datepicker__children-container {
    width: 240px;
    @media screen and (min-width: 768px) {
      width: 308px;
    }
    @media screen and (min-width: 1440px) {
      width: 372px;
    }
  }

  & .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before {
    display: none;
  }
`;

export const TimePickerWrapper = styled.div`
  & .react-datepicker__time-box {
    border-radius: 8px;
    background-color: var(--primary-background-color);
    box-shadow: var(--primary-shadow);
    border: none;
    padding: 0 16px;
    padding-right: 15px;
    font-family: 'Poppins', 'Nunito Sans', sans-serif;
    width: 240px;
    height: 160px;
    color: var(--border-color);
    text-align: start;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media screen and (min-width: 768px) {
      width: 308px;
    }
    @media screen and (min-width: 1440px) {
      width: 372px;
    }
  }

  &
    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box {
    width: 240px;
    @media screen and (min-width: 768px) {
      width: 308px;
    }
    @media screen and (min-width: 1440px) {
      width: 372px;
    }
  }

  & .react-datepicker .react-datepicker__header {
    display: none;
  }

  &
    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    height: 48px;
    overflow-y: hidden;
  }

  &
    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box {
    overflow-y: hidden;
  }

  & li.react-datepicker__time-list-item {
    box-sizing: border-box;
    margin-right: 8px;
    display: flex;
    align-items: center;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    word-spacing: 36px;
  }

  &
    .react-datepicker__time-container::-webkit-scrollbar
    .react-datepicker__time
    .react-datepicker__time-box::-webkit-scrollbar
    ul.react-datepicker__time-list::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  &
    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    color: var(--secondary-text-color);
    background-color: var(--primary-background-color);
    font-weight: 600;
    box-sizing: border-box;
  }

  & .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before {
    display: none;
  }
`;
