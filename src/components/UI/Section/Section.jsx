import PropTypes from 'prop-types';

import { PageSection } from "./Section_css";

export const Section = ({children }) => {
    return (
        <PageSection>
            {children}
        </PageSection>);
}

Section.propTypes = {
    children: PropTypes.element.isRequired,
}