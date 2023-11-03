import styled from 'styled-components';

export const SvgButtonCrossSmall = styled.button`
  position: absolute;
  height: 26px;
  width: 26px;
  top: 24px;
  padding: 0;
  right: 12px;
  background-color: inherit;
  border: 1px solid transparent;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    top: 16px;
  }
  &:hover,
  &:focus {
    outline: none;
    border: 1px solid var(--primary-text-color);
    border-radius: 8px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;