import React from 'react';
import '../App.css';
import errorImg from '../assets/error.png';

const ErrorDisplay = () => (
  <div className="error-and-loading-wrapper">
    <img
      src={errorImg}
      alt="error"
    />
  </div>
);

export default ErrorDisplay;