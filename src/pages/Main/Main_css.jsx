import styled from 'styled-components';

export const TitleWrap = styled.div`
  position: relative;
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
  border: 1px solid transparent;
  background-color: var(--primary-background-color);
  box-shadow: var(--primary-shadow);
  outline: none;
  color: var(--secondary-text-color);
  font-family: inherit;
  bottom: -28px;
  left: 47px;
  justify-content: space-between;
  &:hover {
    border: 1px solid var(--primary-text-color);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:disabled {
    background-color: var(--btn-disabled-background);
  }
  @media screen and (max-width: 767px) {
    gap: 0;
    width: 56px;
  }
  @media screen and (min-width: 768px) {
    left: 0;
  }
`;

export const CreateButton = styled(Button)`
  background-color: var(--primary-text-color);
  color: var(--btn-accent-color);
  &:hover {
    background-color: var(--btn-hover-background);
    }
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
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
