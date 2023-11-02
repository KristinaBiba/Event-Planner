import PropTypes from 'prop-types';

import { Title } from "./H2_css";

export const H2 = ({title, mainTitle, eventInfo}) => {
    return (
        <Title $mainTitle={mainTitle} $eventInfo={eventInfo}>
            {title}
        </Title>);
}

H2.propTypes = {
    title: PropTypes.string.isRequired,
    mobileHidden: PropTypes.bool,
    eventInfo: PropTypes.bool,
};
