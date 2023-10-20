import React, { useState } from 'react';

const ToggleContent = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleVisibility = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {showContent ? 'Hide Content' : 'Show Content'}
      </button>

      {showContent && (
        <div>
          <h3>Hidden Content</h3>
          <p>This content is hidden by default but will appear when you click the button.</p>
        </div>
      )}
    </div>
  );
};

export default ToggleContent;
