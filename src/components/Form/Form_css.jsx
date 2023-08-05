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
  /* width: 240px;
  height: 348px;
  padding: 20px;
  border: none;
  
  
  
  color:  #ACA7C3;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; */
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
  }

  & .react-datepicker .react-datepicker__header {
    background-color: #ffffff;
    color: #3f3f3f;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 16px;
    border-bottom: none;
    padding: 0;
  }

  & .react-datepicker__navigation-icon {
    ::before {
      border-color: #3f3f3f;
    }
  }

  & .react-datepicker__current-month {
    color: #3f3f3f;
   padding-bottom: 16px;
  }

  & .react-datepicker__day {
    color: var(--divider, #aca7c3);
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    padding: 8px;
    :hover,
    :focus {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      background: #7b61ff;
      padding: 8px;
    }
  }

  & .react-datepicker__day-name {
    color: #3f3f3f;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;

  }
  & .react-datepicker__day-name:first-child, .react-datepicker__day-name:last-child {color: #ff2b77;}

  & .react-datepicker__day--today {
    color: #7b61ff;
    text-align: center;
    font-family: "Inter";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
  }
  & .react-datepicker__day--selected {
    /* background-color: #FFFFFF;
    color: #3E85F3;
    border-radius: 24px; */
  }

  & .react-datepicker__day--weekend {
    /* color:  #FF2B77;
text-align: center;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; */
  }

  & .react-datepicker__day--outside-month {
    color: #ffffff;
  }
`;

// react-datepicker__triangle {
//   display: none;
// }

// .react-datepicker__day.react-datepicker__day--keyboard-selected {
//   border: none;
//   border-radius: 7px;
//   background-color: var(--dark);
//   color: var(--white);
// }

// .react-datepicker__day.react-datepicker__day--keyboard-selected:hover {
//   border: none;
//   border-radius: 7px;
//   background-color: var(--dark);
//   color: var(--white);
// }

// .react-datepicker-popper .react-datepicker__navigation {
//   padding-top: 12px;
//   color: #000;
// }

// .react-datepicker {
//   box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.189);
//   border: none !important;
//   font-family: "Inter" !important;
// }

// .react-datepicker__header {
//   border-bottom: solid 5px var(--light) !important;
//   background: white !important;
// }

// .react-datepicker__current-month {
//   color: var(--dark) !important;
// }

// .react-datepicker__day.react-datepicker__day--today {
//   border-radius: 7px;
//   border: solid 2px var(--brand) !important;
//   background-color: white !important;
//   color: var(--dark) !important;
//   width: 30px;
//   height: 30px;
// }

// .react-datepicker__day.react-datepicker__day--selected {
//   border: none;
//   border-radius: 7px;
//   background-color: black;
//   color: white;
// }

// .react-datepicker__day--selected:hover,
// .react-datepicker__day--in-selecting-range:hover,
// .react-datepicker__day--in-range:hover,
// .react-datepicker__month-text--selected:hover,
// .react-datepicker__month-text--in-selecting-range:hover,
// .react-datepicker__month-text--in-range:hover,
// .react-datepicker__quarter-text--selected:hover,
// .react-datepicker__quarter-text--in-selecting-range:hover,
// .react-datepicker__quarter-text--in-range:hover,
// .react-datepicker__year-text--selected:hover,
// .react-datepicker__year-text--in-selecting-range:hover,
// .react-datepicker__year-text--in-range:hover {
//   border: none;
//   border-radius: 7px !important;
//   background-color: var(--brand) !important;
//   color: var(--dark) !important;
