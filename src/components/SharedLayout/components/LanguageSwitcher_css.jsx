import styled from 'styled-components';

export const LanguageButton = styled.button`
  position: absolute;
  top: -8px;
  right: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 69px;
  height: 48px;
  padding: 12px;
  align-items: center;
  border-radius: 8px;
  box-shadow: var(--primary-shadow);
  border: 1px solid transparent;
  background-color: var(--primary-background-color);
  font-family: inherit;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    position: static;
  }

  &:hover, &:focus {
    border: 1px solid var(--primary-text-color);
    outline: none;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;