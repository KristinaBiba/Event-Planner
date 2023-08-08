import styled from 'styled-components';

import backgroundImage from '../../images/background/background.jpg';

export const MainWrap = styled.main`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
  color: var(--secondary-text-color);
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
cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
  height: 56px;
  padding: 16px;
  border-radius: 8px;
  background-color: var(--primary-background-color);
  box-shadow: var(--primary-shadow);
  border: none;
  outline: none;
  color: var(--secondary-text-color);
  font-family: inherit;
  &:hover {
    background-color: var(--btn-hover-background);
  }
  &:disabled {
    background-color: var(--btn-disabled-background);
  }
  @media screen and (max-width: 767px) {
    width: 56px;
  }
`;

export const CreateButton = styled(Button)`
  background-color: var(--primary-text-color);
  color: var(--btn-accent-color);
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
  stroke: var(--secondary-text-color);
  ${Button}:hover {
    stroke: var(--primary-text-color);
  }
`;

export const Icon2 = styled(Icon)`
  stroke: var(--secondary-text-color);
  @media screen and (max-width: 767px) {
    stroke: var(--primary-text-color);
  }
`;
