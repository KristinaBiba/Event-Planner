import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid var(--primary-text-color);
  background-color: var(--header-background-color);
`;

export const Wrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: var(--primary-text-color);
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

export const Div = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 24px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const InputDiv = styled.div`
  position: relative;
`;

export const LanguageSwitcher = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 69px;
  height: 48px;
  padding: 12px;
  align-items: center;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border: none;
  background-color: var(--primary-background-color);
  font-family: inherit;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    position: static;
  }
`;

export const FilterInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 12px 12px 48px;
  height: 48px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
  color: var(--primary-text-color);

  &::placeholder {
    color: var(--input-placeholder-color);
  }

  &:focus-visible {
    /* color: var(--primary-text-color); */
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

export const SvgDivSearch = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
`;

export const SvgButtonCrossSmall = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;
