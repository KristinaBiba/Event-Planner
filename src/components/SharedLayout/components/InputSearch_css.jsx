import styled from 'styled-components';

export const InputDiv = styled.div`
  position: relative;
`;

export const FilterInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 12px 12px 48px;
  height: 48px;
  border-radius: 8px;
  box-shadow: var(--primary-shadow);
  border: 1px solid transparent;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
  color: var(--primary-text-color);
  &::placeholder {
    color: var(--input-placeholder-color);
  }
  &:focus-visible {
    outline: none;
    font-weight: 400;
  }
  @media screen and (min-width: 768px) {
    width: 368px;
  }
  @media screen and (min-width: 1440px) {
    width: 410px;
  }
  &:hover, &:focus {
    border: 1px solid var(--primary-text-color);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
  outline: none;
  padding: 0;
  height: 26px;
  width: 26px;
  &:hover, &:focus {
    border: 1px solid var(--primary-text-color);
    border-radius: 8px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;