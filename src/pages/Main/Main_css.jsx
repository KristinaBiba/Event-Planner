import styled from 'styled-components';

import backgroundImage from '../../images/background/background.jpg';

export const MainWrap = styled.main`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
`;

export const Section = styled.section`
  position: relative;
`;

export const TitleWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    padding-top: 38px;
  }
`;

export const H2 = styled.h2`
  color: #3f3f3f;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 94px;
  margin-bottom: 24px;

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  padding-top: 20px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    position: absolute;
    top: -94px;
    right: 0;
    padding-top: 14px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: space-between;
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 56px;
  padding: 16px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border: none;
  outline: none;
  color: #3f3f3f;
  font-family: inherit;

  &:hover {
    background: #6243ff;
  }
  &:disabled {
    background: #aca7c3;
  }
  @media screen and (max-width: 767px) {
    width: 56px;
  }
`;

export const CreateButton = styled(Button)`
  background: #7b61ff;
  color: #ffffff;
`;

export const Span = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #3f3f3f;

  ${Button}:hover {
    stroke: #7b61ff;
  }
`;
export const Icon2 = styled(Icon)`
  stroke: #3f3f3f;

  @media screen and (max-width: 767px) {
    stroke: #7b61ff;
  }
`;
