import { LinkComponent } from './Navigate_css';

export const Navigate = ({ to, title }) => {
  return <LinkComponent to={to}>{title}</LinkComponent>;
};