import { Link } from 'react-router-dom';
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

export const ButtonWrap = styled.div`
  position: relative;
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

export const Span = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const CreateLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 56px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  box-shadow: var(--primary-shadow);
  text-decoration: none;
  bottom: -28px;
  left: 47px;
  justify-content: space-between;
  background-color: var(--primary-text-color);
  color: var(--btn-accent-color);

  &:hover {
    background-color: var(--btn-hover-background);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (max-width: 767px) {
    gap: 0;
    width: 56px;
  }
  @media screen and (min-width: 768px) {
    left: 0;
  }
`;
