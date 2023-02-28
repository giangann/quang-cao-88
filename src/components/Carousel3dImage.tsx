import './carousel3d/carousel3d.css';

import { PREVIEW_BG_FOLDER_PATH } from '../constants';
import { useEffect } from 'react';

export const Carousel3dImage = () => {
  const bgImageArr: string[] = [];
  for (let i = 1; i < 18; i++) {
    bgImageArr.push(`${PREVIEW_BG_FOLDER_PATH}/background${i > 9 ? i - 9 : i}.jpg`);
  }

  useEffect(() => {
    const script = document.createElement('script');

    script.src = './src/components/carousel3d/index.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <div id="drag-container">
        <div id="spin-container">
          {bgImageArr.map((image, index) => (
            <img
              className="carousel-3d-image"
              src={image}
              key={index}
              alt=""
              data-index={index}
            />
          ))}

          {/* <!-- Text at center of ground --> */}
          <p>3D Tiktok Carousel</p>
        </div>
        <div id="ground"></div>
      </div>
    </div>
  );
};
