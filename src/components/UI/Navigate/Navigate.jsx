import PropTypes from 'prop-types';

import { ReactComponent as ArrowLeft } from '../../../images/svg/arrow-left.svg';

import { LinkComponent } from './Navigate_css';

export const Navigate = ({ to, title, state }) => {
  return (
    <LinkComponent to={to} state={state}>
      <ArrowLeft aria-label="Return to the previous page" /> {title}
    </LinkComponent>
  );
};

Navigate.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      hash: PropTypes.string,
      key: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string,
      state: PropTypes.shape({
        from: PropTypes.shape({
          hash: PropTypes.string,
          key: PropTypes.string.isRequired,
          pathname: PropTypes.string.isRequired,
          search: PropTypes.string,
          state: PropTypes.any,
        }),
      }),
    }),
  ]).isRequired,
  title: PropTypes.string.isRequired,
  state: PropTypes.shape({
    from: PropTypes.shape({
      hash: PropTypes.string,
      key: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string,
      state: PropTypes.any,
    }),})
};
