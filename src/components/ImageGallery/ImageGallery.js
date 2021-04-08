import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({imagesList, onClick}) => {
    return (
        <ul className="ImageGallery">
            {imagesList.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    smallImageUrl={webformatURL}
                    largeImageURL={largeImageURL}
                    toggleModal={onClick}
                />
            ))}
        </ul>
    )
}

ImageGallery.propTypes = {
    imagesList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired,
}

export default ImageGallery;