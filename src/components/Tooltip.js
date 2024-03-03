import React from 'react';

const Tooltip = ({ sentimentTopic }) => {
  return (
    <div style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '8px', borderRadius: '4px', zIndex: 1 }}>
      {sentimentTopic}
    </div>
  );
};

export default Tooltip;
