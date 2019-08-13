import React from 'react';
import '../App.css';
import loadingGif from '../assets/loader.gif';

const LoadingDisplay = () => (
  <div className="error-and-loading-wrapper">
    <img
      src={loadingGif}
      alt="loading"
    />
  </div>
);

export default LoadingDisplay;