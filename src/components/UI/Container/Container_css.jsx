import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 24px;
  box-sizing: border-box;
  width: 320px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    padding: 26px 40px 18px 40px;
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding: 22px 80px 22px 80px;
    width: 1440px;
  }
`;
