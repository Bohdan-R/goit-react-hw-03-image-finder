import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ smallImageUrl, largeImageURL, toggleModal}) => {
    return (
        <li className="ImageGalleryItem" onClick={() => toggleModal(largeImageURL)}>
            <img src={smallImageUrl} alt="" className="ImageGalleryItem-image" />
        </li>
    )
}

ImageGalleryItem.defaultProps = {
    toggleModal: () => null,
}

ImageGalleryItem.propTypes = {
    smallImageUrl: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    toggleModal: PropTypes.func,
}


export default ImageGalleryItem;