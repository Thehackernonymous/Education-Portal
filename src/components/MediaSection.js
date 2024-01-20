import React from 'react';

const MediaSection = () => {
  return (
    <div className="media-section">
      <label>Media Section</label>
      <div className="iframe-container">
      
        <iframe width="560" height="315" src="https://www.youtube.com/embed/iSoIfrZ99BQ?si=VV6DWEL6RC5sO4Qi"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

          <iframe width="500" height="315" src="https://www.youtube.com/embed/2qlXw55EvWk?si=mPAV8n1TTxmRsiJm"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default MediaSection;
