import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkComponent = styled(NavLink)`
display: inline-flex;
align-items: center;
gap: 8px;
color: var(--primary-text-color);
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-decoration-line: none;
`;