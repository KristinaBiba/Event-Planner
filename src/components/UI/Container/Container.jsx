import PropTypes from 'prop-types';

import { Wrap } from "./Container_css";

export const Container = ({children}) => {
    return (
        <Wrap>
            {children}
        </Wrap>);
}

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
};

  