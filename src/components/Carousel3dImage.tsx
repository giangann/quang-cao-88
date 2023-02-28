import './carousel3d/carousel3d.css';

import React, { useEffect, useState } from 'react';
import { PREVIEW_BG_FOLDER_PATH } from '../constants';
// import './carousel3d/index.js'

export const Carousel3dImage = () => {
  let bgImageArr: string[] = [];
  for (let i = 1; i < 18; i++) {
    bgImageArr.push(`${PREVIEW_BG_FOLDER_PATH}/background${i > 10 ? i - 10 : i}.jpg`);
  }
  // const initArrImage = [
  //   'https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //   'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //   'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //   'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //   'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //   'https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //   'https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //   'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //   'https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //   'https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  // ];

  return (
    <div style={{position:'relative', top:'-200px', left:'-200px'}}>
      <div id="drag-container">
        <div id="spin-container">
          {/* <!-- Add your images (or video) here --> */}
          {bgImageArr.map((image, index) => (
            <img
              className="carousel-3d-image"
              src={image}
              key={index}
              alt=""
              data-index={index}
              //   onClick={handleClick}
            />
          ))}
          {/* <img
            src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          /> */}

          {/* <!-- Example image with link --> */}
          {/* <a
            target="_blank"
            href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg"
            rel="noreferrer"
          >
            <img
              src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </a> */}

          {/* <!-- Example add video  --> */}
          {/* <video controls loop >
            <source
              src="https://player.vimeo.com/external/322244668.sd.mp4?s=338c48ac2dfcb1d4c0689968b5baf94eee6ca0c1&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video> */}

          {/* <!-- Text at center of ground --> */}
          <p>3D Tiktok Carousel</p>
        </div>
        <div id="ground"></div>
      </div>

      <div id="music-container"></div>

      {/* <div id="box-image-preview">
        <img src={initArrImage[0]} alt="" style={{width:'100%', transition:'all 1s ease'}} id="image-preview"/>
      </div> */}
      <div
        id="box-image-preview"
        style={{
          backgroundImage: `url(${bgImageArr[0]})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          transition: 'all 1s ease',
        }}
      />
    </div>
  );
};
