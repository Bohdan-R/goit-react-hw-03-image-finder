import React, { Component } from 'react';
import axios from 'axios';
import './styles.css'
import imagesApi from './services/images-api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import Button from './components/Button';
import Spinner from './components/Spinner';

axios.defaults.headers.common['Authorization'] = 'Bearer 20186035-b457393de22e7a705b5d0535b';


class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searhQuery: '',
    isLoading: false,
    showModal: false,
    largeImageURL: '',
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searhQuery !== this.state.searhQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = (query) => {
    this.setState({ searhQuery: query, currentPage: 1, images: [] })
  }

  fetchImages = () => {
    const { currentPage, searhQuery } = this.state;
    const options = { currentPage, searhQuery };

    this.setState({isLoading: true})

    imagesApi.fetchImages(options).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        currentPage: prevState.currentPage + 1,
      }))

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    })
      .finally(() => this.setState({ isLoading: false }))
  }

  toggleModal = (largeImgUrl) => {

    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: largeImgUrl,
    }))
  }

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;
    const shouldRenderModal = largeImageURL !== '' && showModal
    
    return (

      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery imagesList={images} onClick={this.toggleModal} />
        
        {shouldRenderModal && <Modal onClose={this.toggleModal} url={largeImageURL}/>}

        {isLoading && <Spinner/>}

        {shouldRenderLoadMoreButton && <Button loadMore={this.fetchImages} />}
        
      </div>
      
    )
  }
}

export default App;