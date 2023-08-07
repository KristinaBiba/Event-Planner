import { LinkComponent } from './Navigate_css';
import {ReactComponent as ArrowLeft} from '../../images/svg/arrow-left.svg';


export const Navigate = ({ to, title }) => {
  return <LinkComponent to={to}><ArrowLeft/> {title}</LinkComponent>;
};