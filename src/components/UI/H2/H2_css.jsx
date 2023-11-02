import styled from 'styled-components';

export const Title = styled.h2`
  color: var(--secondary-text-color);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  
  margin-top: ${props => (props.$mainTitle ? '94px' : '24px')};
  margin-bottom: 24px;

  @media screen and (max-width: 767px) {
    display: ${props => (props.$mainTitle ? 'none' : 'block')};
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: ${props => (props.$mainTitle ? '0px' : '18px')};
    margin-bottom: ${props => (props.$eventInfo ? '14px' : (props.$mainTitle ? '0px' : '24px'))};
  }  
`;
