import styled from 'styled-components';

export const MenuWrap = styled.div`
  &.isOpen {
    position: relative;
    width: 158px;
    border-radius: 8px;
    background-color: var(--primary-background-color);
    box-shadow: var(--primary-shadow);
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
  @media screen and (min-width: 768px){
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
  /* height: 30px; */
  padding: 8px 24px;
  color: var(--border-color);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  &:hover {
    color: var(--primary-text-color);
    border-bottom: 1.2px solid var(--primary-text-color);
  }
`;
