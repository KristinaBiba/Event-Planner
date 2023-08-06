import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const FormWrap = styled.form`
  background-color: #ffffff;
  padding: 40px 16px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  @media screen and (min-width: 768px) {
    padding: 40px 24px;
  }
`;
export const Div = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 508px;
  }
  @media screen and (min-width: 1440px) {
    height: 305px;
  }
`;

export const TextField = styled.input`
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #aca7c3;
  color: #3f3f3f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 16px 12px;
  margin-top: 8px;
  margin-bottom: 20px;
  width: 240px;
  @media screen and (min-width: 768px) {
    display: block;
    width: 308px;
  }

  &:invalid {
    border: 1px solid #ff2b77;
  }
`;
export const Select = styled.select`

box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #aca7c3;
  color: #3f3f3f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 16px 12px;
  margin-top: 8px;
  margin-bottom: 20px;
  width: 240px;
  @media screen and (min-width: 768px) {
    display: block;
    width: 308px;
  }

  &:invalid {
    border: 1px solid #ff2b77;
  }`;

export const DescriptionTextField = styled.textarea`
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #aca7c3;
  color: #3f3f3f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 16px 12px;
  margin-top: 8px;
  margin-bottom: 20px;
  width: 240px;
  height: 159px;
  @media screen and (min-width: 768px) {
    display: block;
    width: 308px;
  }

  /* border: 1px solid  #FF2B77; */
`;
export const Label = styled.label`
  color: #7b61ff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  @media screen and (min-width: 768px) {
    display: block;
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
  color: #ff2b77;

  @media screen and (min-width: 768px) {
    right: 130px;
    bottom: -20px;
  }

  @media screen and (min-width: 768px) {
    right: 110px;
  }
`;
export const ButtonDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;
export const Button = styled.button`
  height: 56px;
  padding: 16px;
  border-radius: 8px;
  background: #7b61ff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border: none;
  outline: none;
  width: 193px;
  margin-top: 20px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    background: #6243ff;
  }
  &:disabled {
    background: #aca7c3;
  }
  @media screen and (max-width: 767px) {
    width: 240px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const DatePick = styled(DatePicker)`
  border-radius: 8px;
  border: 1px solid #aca7c3;
  color: #3f3f3f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 16px 12px;
  margin-top: 8px;
  margin-bottom: 20px;
  width: 240px;

  @media screen and (min-width: 768px) {
    display: block;
    width: 308px;
  }

  &:invalid {
    border: 1px solid #ff2b77;
  }
`;
export const DatePickerWrapper = styled.div`
  & .react-datepicker {
    border-radius: 11px;
    background-color: #ffffff;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.07);
    border: none;
    padding: 20px;
    font-family: 'Poppins';
    width: 240px;
    height: 348px;
    @media screen and (min-width: 768px) {
      width: 308px;
    }
    @media screen and (min-width: 1440px) {
      width: 372px;
    }
  }

  & .react-datepicker .react-datepicker__header {
    background-color: #ffffff;
    color: #3f3f3f;
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
    border-color: #3f3f3f;
  }
  & .react-datepicker__current-month {
    font-size: 14px;
    color: #3f3f3f;
    padding-bottom: 16px;
  }
  & .react-datepicker__month {
    margin: 0;

    /* margin-left: -2px; */
  }
  & .react-datepicker__day {
    color: var(--divider, #aca7c3);
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    padding: 6px;
    margin: 0;
    margin-top: 2px;
    /* height: 32px; */
    /* width: 30px; */
    @media screen and (min-width: 768px) {
      margin: 6px;
    }
    @media screen and (min-width: 1440px) {
      margin: 10px;
    }
    :hover,
    :focus {
      color: #fff;
      background-color: #7b61ff;
    }
  }
  & .react-datepicker__day--keyboard-selected:hover {
    color: #fff;
    background-color: #7b61ff;
    border-radius: 0;
  }

  & .react-datepicker__day-name {
    color: #3f3f3f;
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
    color: #ff2b77;
  }

  & .react-datepicker__day--today {
    color: #7b61ff;
    text-align: center;
    font-family: 'Inter';
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
  }
  & .react-datepicker__day--selected {
    background-color: #7b61ff;
    color: #ffffff;
    border-radius: 0;
  }

  & .react-datepicker__day--outside-month {
    color: #ffffff;
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
  & .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before {
    display: none;
  }
`;
export const ButtonPick = styled.button`
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border: 1px solid #7b61ff;

  /* height: 56px; */

  border-radius: 4px;
  background: #ffffff;
  outline: none;
  /* width: 193px; */
  margin-top: 16px;
  margin-bottom: 20px;
  color: #7b61ff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;

  &:hover {
    background: #6243ff;
  }
  &:disabled {
    background: #aca7c3;
  }
  @media screen and (min-width: 768px) {
    margin-left: 87px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 152px;
  }
`;
export const ButtonPickChoose = styled(ButtonPick)`
  background: #7b61ff;
  color: #fff;
  margin-left: 16px;
`;

export const TimePickerWrapper = styled.div`
  & .react-datepicker__time-box {
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    border: none;
    padding: 0 16px;
    padding-right: 15px;
    font-family: 'Poppins';
    width: 240px;
    height: 160px;
    color: #aca7c3;
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
  & .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
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
  }

  & li.react-datepicker__time-list-item {
    display: flex;
    align-items: center;
    border-top: 1px solid #aca7c3;
    border-bottom: 1px solid #aca7c3;
  }

  & .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    color: #3F3F3F;
    background-color: #FFFFFF;
    font-weight: 600;
  }
  & .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before {
    display: none;
  }
`;
export const CategoryOptions = styled.option`
  border-radius: 8px;
    background-color: #ffffff;
    border-top: 1px solid #aca7c3;
    border-bottom: 1px solid #aca7c3;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    border: none;
    padding: 0 16px;
    font-family: 'Poppins';
    width: 240px;
    height: 160px;
    color: #3f3f3f;
    text-align: start;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    height: 48px;
    @media screen and (min-width: 768px) {
      width: 308px;
    }
    @media screen and (min-width: 1440px) {
      width: 372px;
    }
`