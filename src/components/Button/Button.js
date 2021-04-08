import React from 'react';
import PropTypes from 'prop-types';
import '../../styles.css';

const Button = ({loadMore}) => (
    
    <button className="Button" onClick={loadMore}>Load more</button>
    
)

Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
}

export default Button;