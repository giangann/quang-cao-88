import './carousel3d/carousel3d.css';

import { useEffect } from 'react';

import { PREVIEW_BG_FOLDER_PATH } from '../constants';
import { useMediaQuery, useTheme } from '@mui/material';

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
            <section data-cover="http://a2.mzstatic.com/us/r1000/060/Features/1c/df/c3/dj.sahccbiy.170x170-75.jpg"></section>
            <section data-cover="http://a3.mzstatic.com/us/r1000/102/Music/95/45/3f/mzi.xqnmexwi.170x170-75.jpg"></section>
            <section data-cover="http://a4.mzstatic.com/us/r1000/014/Music/ea/6f/96/mzi.egqrvlca.170x170-75.jpg"></section>
            <section data-cover="http://a3.mzstatic.com/us/r1000/096/Music/1a/86/1f/mzi.dcotnnwo.170x170-75.jpg"></section>
            <section data-cover="http://a4.mzstatic.com/us/r1000/094/Music/a8/8b/db/mzi.dyzjtwow.170x170-75.jpg"></section>
            <section data-cover="http://a1.mzstatic.com/us/r1000/024/Music/81/54/3b/mzi.cceuzwlz.170x170-75.jpg"></section>
            <section data-cover="http://a5.mzstatic.com/us/r1000/103/Music/2f/08/9e/mzi.gxjxokia.170x170-75.jpg"></section>
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
