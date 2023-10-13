import React from 'react';
import { Spinner } from 'react-spinners-css';
import './styles.css'; // Import your CSS file for styling
const LoadingPage = () => {
  return (
    <>
      <div className="spinner-container">
      <Spinner color='#9147ff'/>
    </div>
    </>
  );
};

export default LoadingPage;



