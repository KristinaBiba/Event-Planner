import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid #7b61ff;
  background: #fefcff;
`;

export const Wrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Div = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 24px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: #7b61ff;
  font-family: 'Alata';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 8px 0 30px 0;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
export const LanguageSwitcher = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 69px;
  height: 48px;
  padding: 12px 4px 12px 12px;
  align-items: center;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border: none;
  background-color: #ffffff;
  font-family: inherit;

  @media screen and (min-width: 768px) {
    position: static;
  }
`;
export const FilterInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  height: 48px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;

  &:focus-visible {
    color: #7b61ff;
    outline: none;
    font-weight: 400;
  }

  @media screen and (min-width: 768px) {
    width: 368px;
  }

  @media screen and (min-width: 1440px) {
    width: 410px;
  }
`;
