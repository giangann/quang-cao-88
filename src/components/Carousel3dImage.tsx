import './carousel3d/carousel3d.css';
import { PREVIEW_BG_FOLDER_PATH } from '../constants';

export const Carousel3dImage = () => {
  const bgImageArr: string[] = [];
  for (let i = 1; i < 18; i++) {
    bgImageArr.push(`${PREVIEW_BG_FOLDER_PATH}/background${i > 9 ? i - 9 : i}.jpg`);
  }

  return (
    <div style={{ position: 'relative', top: '-200px', left: '-200px' }}>
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
