import styled from 'styled-components';

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
// export const DescriptionTextField = styled(TextField)`
//   min-height: 156px;

// `;

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
