import styled from 'styled-components';

import backgroundImage from '../../images/background/background.jpg';

export const PageSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;