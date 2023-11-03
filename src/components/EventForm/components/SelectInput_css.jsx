import styled from 'styled-components';

export const SelectDiv = styled.div`
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 16px 12px;
  margin-top: 8px;
  margin-bottom: 20px;
  width: 240px;
  appearance: none;
  cursor: pointer;
  &::-ms-expand {
    display: block;
  }
  @media screen and (min-width: 768px) {
    display: block;
    width: 308px;
    margin-bottom: 0;
    height: 57.45px;
  }
  @media screen and (min-width: 1440px) {
    width: 372px;
  }
`;

export const SelectList = styled.ul`
  position: absolute;
  top: 72px;
  left: 0;
  margin-top: 26px;
  padding: 0 16px;
  border-radius: 8px;
  background-color: var(--primary-background-color);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--primary-shadow);
  border: none;
  font-family: 'Poppins';
  width: 240px;
  color: var(--secondary-text-color);
  text-align: start;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  z-index: 100;
  list-style: none;

  @media screen and (min-width: 768px) {
    width: 308px;
  }
  @media screen and (min-width: 1440px) {
    width: 372px;
  }
`;

export const SelectListDiv = styled.div`
  background: repeating-linear-gradient(
    0deg,
    var(--primary-background-color),
    var(--primary-background-color) 56px,
    var(--border-color) 56px,
    var(--border-color) 57px
  );
`;

export const SelectItem = styled.li`
  height: 56px;
  padding: 16px 0;
  &:hover,
  &:focus {
    color: var(--primary-text-color);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;