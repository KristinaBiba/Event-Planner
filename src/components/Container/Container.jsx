import { Outlet } from "react-router-dom";
import { Wrap } from "./Container_css";

// import PropTypes from 'prop-types';

export const Container = ({children }) => {
    return (
        <Wrap>
            {children }
        </Wrap>);
}
          
// Section.propTypes = {
//     title: PropTypes.node,
//     children: PropTypes.node,
// }