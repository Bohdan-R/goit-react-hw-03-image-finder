import React from 'react';
import axios from 'axios';

const apiKey = '20186035-b457393de22e7a705b5d0535b';

const fetchImages = ({searhQuery = '', currentPage = 1 }) => {
    return fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searhQuery}&page=${currentPage}&per_page=12`)
        .then(response => response.json())
        .then(({hits}) => hits)
}

export default { fetchImages };