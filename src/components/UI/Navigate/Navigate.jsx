import PropTypes from 'prop-types';

import {ReactComponent as ArrowLeft} from '../../../images/svg/arrow-left.svg';

import { LinkComponent } from './Navigate_css';


export const Navigate = ({ to, title }) => {
  return <LinkComponent to={to}><ArrowLeft aria-label="Return to the previous page"/> {title}</LinkComponent>;
};

Navigate.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}