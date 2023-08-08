import styled from 'styled-components';

import backgroundImage from '../../images/background/background.jpg';

export const MainWrap = styled.main`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
`;

export const H2 = styled.h2`
  color: var(--secondary-text-color);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 26px;
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    margin-top: 18px;
  }
`;





