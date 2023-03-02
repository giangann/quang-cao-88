import './carousel3d/carousel3d.css';

import { useMediaQuery, useTheme } from '@mui/material';
import { useEffect } from 'react';

import { PREVIEW_BG_FOLDER_PATH } from '../constants';

export const Carousel3dImage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });

  const bgImageArr: string[] = [];
  for (let i = 1; i < 18; i++) {
    bgImageArr.push(`${PREVIEW_BG_FOLDER_PATH}/background${i > 9 ? i - 9 : i}.jpg`);
  }

  useEffect(() => {
    const script = document.createElement('script');

    script.src = isMobile ? 'carouselMobile.js' : '/index.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      {isMobile ? (
        <>
          <div id="coverflow">
            {bgImageArr.map((image, index) => (
              <section key={index} data-cover={image} data-index={index}></section>
            ))}
          </div>

          <nav id="controls">
            <a id="prev">Left</a> & <a id="next">Right</a>
          </nav>
        </>
      ) : (
        <div style={{ overflowX: 'hidden' }}>
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
      )}
    </>
  );
};
