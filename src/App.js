import React, { useState, useEffect } from 'react';
import jsonData from './assets/reviews_data.json';
import ReviewList from './components/ReviewList';
import ReviewHighlighter from './components/ReviewHighlighter';
import FadeInOut from "./components/FadeInOut";

const App = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(jsonData);
  }, []);

  const [currentView, setCurrentView] = useState('highlighted');

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
<div>
      <header style={headerStyle}>
        <nav style={navStyle}>
          <button style={buttonStyle} onClick={() => handleViewChange('all')}>All Reviews</button>
          <button style={buttonStyle} onClick={() => handleViewChange('highlighted')}>Highlighted Reviews</button>
        </nav>
      </header>

      <FadeInOut show={true} duration={800}>
        {currentView === 'all' ? <ReviewList reviews={reviews} /> : null}
        {currentView === 'highlighted' ? <ReviewHighlighter reviews={reviews} /> : null}
      </FadeInOut>
    </div>
  );
};

const headerStyle = {
  backgroundColor: '#333',
  padding: '10px',
  color: 'white',
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: 1000, // Ensure the header is above other elements
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 15px',
  margin: '0 10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default App;
