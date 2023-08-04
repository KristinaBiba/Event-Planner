import styled from 'styled-components';

export const Wrap = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 24px;
  justify-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.div`
  position: relative;
  border-radius: 12px;
  width: 272px;
  height: 480px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    width: 332px;
  }
  @media screen and (min-width: 1440px) {
    width: 302px;
  }
`;
export const Image = styled.img`
  height: 336px;
  width: 272px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  @media screen and (min-width: 768px) {
    width: 332px;
  }
  @media screen and (min-width: 1440px) {
    width: 302px;
  }
`;
export const CategoryWrap = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  gap: 12px;
`;
export const TypeEvent = styled.div`
  padding: 6px 12px;
  border-radius: 8px;
  color: #7b61ff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  background-color: #ffffff;
`;
export const Difficulty = styled.div``;
export const TimePlaceWrap = styled.div`
  position: absolute;
  top: 296px;
  left: 0;
  right: 0;
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${Card}:hover & {
    /* top: 256px;  */
    transform: translateY(-40px);
  }

  @media screen and (min-width: 768px) {
    top: 296px;
  }
  /* width: 271px; */
`;
export const TimeEvent = styled.div`
  color: #7b61ff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
export const EventWrap = styled.div`
  padding: 16px;
  background-color: #ffffff;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Card}:hover & {
    transform: translateY(-40px);
  }
`;
export const H3 = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #1c1b1f;
  margin-bottom: 16px;
`;
export const P = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: #49454f;
`;
export const Div = styled.div`
  transform: translateY(100%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  justify-content: end;
  display: none;

  ${Card}:hover & {
    display: flex;
    transform: translateY(0);
  }
`;
export const Button = styled.button`
  height: 40px;
  padding: 10px 24px;
  border-radius: 8px;
  background: #7b61ff;
  margin-top: 16px;
  margin-right: 0;
  margin-left: auto;
  border: none;
  color: #ffffff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-family: inherit;
`;
