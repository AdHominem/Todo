import React, { PropTypes } from 'react'

/**
 * Retruns a JSX link representation
 * @param active Whether the link is active or not
 * @param children
 * @param onClick The function to be called when the link is clicked
 * @returns {XML}
 * @constructor
 */
const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a href="#" onClick={event => {
               event.preventDefault();
               onClick()
           }}>
            {children}
        </a>
    )
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link