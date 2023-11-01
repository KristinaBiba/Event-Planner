import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrap = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 24px;
  justify-items: center;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.li`
  position: relative;
  border-radius: 12px;
  width: 272px;
  height: 480px;
  box-shadow: var(--primary-shadow);
  background-color: var(--primary-background-color);

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
  object-fit: cover;
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
  color: var(--primary-text-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  background-color: var(--primary-background-color);
`;

export const TimePlaceWrap = styled.div`
  position: absolute;
  top: 296px;
  left: 0;
  right: 0;
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  background: var(--secondary-background-color);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  ${Card}:hover &, ${Card}:focus & {
    transform: translateY(-40px);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 768px) {
    top: 296px;
  }
`;

export const TimeEvent = styled.div`
  color: var(--primary-text-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const EventWrap = styled.div`
  padding: 16px;
  background-color: var(--primary-background-color);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  ${Card}:hover &, ${Card}:focus & {
    transform: translateY(-40px);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const H3 = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: var(--title-text-color);
  margin-bottom: 16px;
`;

export const P = styled.p`
  height: 60px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--description-text-color);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Div = styled.div`
  transform: translateY(100%);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  justify-content: end;
  display: none;
  background-color: transparent;
  ${Card}:hover &, ${Card}:focus & {
    display: flex;
    transform: translateY(0);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const PageLink = styled(Link)`
  text-decoration: none;
  height: 40px;
  padding: 10px 24px;
  border-radius: 8px;
  background: var(--primary-text-color);
  margin-top: 16px;
  margin-right: 0;
  margin-left: auto;
  border: none;
  color: var(--btn-accent-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  &:hover,
  &:focus {
    background: var(--btn-hover-background);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
