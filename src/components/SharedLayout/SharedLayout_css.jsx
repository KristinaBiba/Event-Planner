import styled from 'styled-components';

export const Header = styled.header`
border-bottom: 1px solid #7B61FF;
background: #FEFCFF;`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  color: #7b61ff;
  font-family: 'Alata';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;
export const LanguageSwitcher = styled.button`
  width: 69px;
  padding: 12px 4px 12px 12px;
  align-items: center;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  background-color: #ffffff;
  border: none;
  /* margin-bottom: 24px; */
`;
export const FilterInput = styled.input`
box-sizing: border-box;
  width: 100%;
  padding: 12px;
  height: 48px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border: none;

  &:focus-visible {
    color: #7B61FF;
    outline: none;
  }
`;
