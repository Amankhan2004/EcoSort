import React from 'react';

function ImagePreviewPage({ image }) {
  return (
    <div>
      <h1>Preview</h1>
      <img src={image} alt="Captured" style={{ width: '100%' }} />
      <button>Proceed with this Image</button>
    </div>
  );
}

export default ImagePreviewPage;
