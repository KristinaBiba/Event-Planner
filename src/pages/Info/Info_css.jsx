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
  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 688px;
  }
  @media screen and (min-width: 1440px) {
    width: 628px;
  }
`;

export const H2 = styled.h2`
  color: var(--secondary-text-color);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 26px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 18px;
    margin-bottom: 14px;
  }
`;

export const Card = styled.div`
  border-radius: 8px;
  width: 272px;
  box-shadow: var(--primary-shadow);
  background-color: var(--primary-background-color);
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  height: 168px;
  width: 272px;
  border-radius: 8px;
  margin-bottom: 24px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 688px;
    height: 272px;
  }
  @media screen and (min-width: 1440px) {
    width: 628px;
  }
`;

export const Wrap = styled.div`
  padding: 0 16px 16px 16px;
`;

export const P = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--description-text-color);
  margin-bottom: 24px;
`;

export const TimePlaceWrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;
`;

export const TimeEvent = styled.div`
  color: var(--primary-text-color);
  padding: 8px 12px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border-radius: 8px;
  background: var(--primary-background-color);
  box-shadow: var(--property-shadow);
  @media screen and (min-width: 768px) {
    font-weight: 400;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    gap: 16px;
    justify-content: flex-end;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Button = styled.button`
  height: 32px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: var(--primary-background-color);
  border: 1px solid var(--primary-text-color);
  outline: none;
  color: var(--primary-text-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  &:hover {
    background-color: var(--btn-hover-background);
  }
  &:disabled {
    background-color: var(--btn-disabled-background);
  }
  @media screen and (max-width: 767px) {
    width: 108px;
  }
`;

export const DeleteButton = styled(Button)`
  background: var(--primary-text-color);
  color: var(--btn-accent-color);
`;
