import React from 'react';
import './Media.css';

const Media = () => {
  return (
    <div className="media-section">
      <label>Media Section</label>
      <div className="iframe-container">
        <iframe
          src="https://www.youtube.com/embed/iSoIfrZ99BQ?si=VV6DWEL6RC5sO4Qi"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/2qlXw55EvWk?si=mPAV8n1TTxmRsiJm"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe 

        src="https://www.youtube.com/embed/BUPH1T5Ap8g?si=tJx7Kc4pba4EfBw7" 
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>

        <iframe 
 
        src="https://www.youtube.com/embed/tUc1_sAjxVE?si=mixYq_1UfdUpwWum" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Media;
