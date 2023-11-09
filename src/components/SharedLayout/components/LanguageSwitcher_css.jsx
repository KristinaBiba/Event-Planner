import styled from 'styled-components';

export const LanguageButton = styled.button`
  position: absolute;
  top: -8px;
  right: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  height: 48px;
  padding: 12px;
  border-radius: 8px;
  box-shadow: var(--primary-shadow);
  border: 1px solid transparent;
  background-color: var(--primary-background-color);
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  color: var(--secondary-text-color);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    position: static;
  }

  &:hover,
  &:focus {
    border: 1px solid var(--primary-text-color);
    outline: none;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--secondary-text-color);
  ${LanguageButton}:hover, ${LanguageButton}:focus {
    stroke: var(--primary-text-color);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const LanguageList = styled.ul`
  position: absolute;
  top: 64px;
  right: 0;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  max-width: 73px;
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid transparent;
  border: none;
  box-shadow: var(--primary-shadow);
  background-color: var(--primary-background-color);
  font-family: inherit;
  text-align: start;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: var(--btn-disabled-background);
  z-index: 100;
  list-style: none;
`;

export const LanguageItem = styled.li`
  width: 45px;
  border-bottom: 1px solid var(--border-color);

  &:hover,
  &:focus {
    color: var(--primary-text-color);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
