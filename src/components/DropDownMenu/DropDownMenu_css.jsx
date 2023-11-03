import styled from 'styled-components';

export const MenuWrap = styled.div`
  &.isOpen {
    position: relative;
    min-width: 158px;
    border-radius: 8px;
    background-color: var(--primary-background-color);
    box-shadow: var(--primary-shadow);

    @media screen and (max-width: 767px) {
      position: absolute;
      right: 126px;
      z-index: 1000;
    }
  }
`;
export const MenuList = styled.ul`
  position: absolute;
  top: 28px;
  left: 47px;
  box-shadow: var(--primary-shadow);
  font-family: 'Poppins';
  width: 158px;
  color: var(--secondary-text-color);
  text-align: start;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  z-index: 100;
  list-style: none;
  @media screen and (min-width: 768px) {
    left: 0;
  }
`;

export const MenuListDiv = styled.div`
  background: repeating-linear-gradient(
    0deg,
    var(--primary-background-color),
    var(--primary-background-color) 29px,
    var(--border-color) 29px,
    var(--border-color) 30px
  );
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const MenuListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 8px 24px;
  color: var(--border-color);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  &:hover,
  &:focus {
    color: var(--primary-text-color);
    border-bottom: 1.2px solid var(--primary-text-color);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover svg,
  &:focus svg {
    stroke: var(--primary-text-color);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
  height: 56px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: var(--primary-background-color);
  box-shadow: var(--primary-shadow);
  outline: none;
  color: var(--secondary-text-color);
  font-family: inherit;
  bottom: -28px;
  left: 47px;
  justify-content: space-between;
  &:hover,
  &:focus {
    border: 1px solid var(--primary-text-color);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:disabled {
    background-color: var(--btn-disabled-background);
  }
  @media screen and (max-width: 767px) {
    gap: 0;
    width: 56px;
  }
  @media screen and (min-width: 768px) {
    left: 0;
  }
  &.isOpen {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 158px;
    position: absolute;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
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

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--secondary-text-color);
  ${Button}:hover, ${Button}:focus {
    stroke: var(--primary-text-color);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
