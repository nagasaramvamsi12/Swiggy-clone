import React from 'react';


const Offline = () => {
  return (
    <div className="offline-container">
      <h1 className="offline-header">Oops! You're Offline</h1>
      <p className="offline-message">
        It seems like you're not connected to the internet. Please check your connection and try again.
      </p>
    </div>
  );
};

export default Offline;