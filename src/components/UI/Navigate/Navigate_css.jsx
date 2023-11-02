import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkComponent = styled(Link)`
display: inline-flex;
align-items: center;
gap: 8px;
color: var(--primary-text-color);
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-decoration-line: none;
stroke: var(--primary-text-color);
&:hover,:focus {
    color: var(--btn-hover-background); 
    stroke: var(--btn-hover-background); 
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

