// Author: Hoang Tran (https://fb.com/99.hoangtran)

// Github verson (1 file .html): https://github.com/HoangTran0410/3DCarousel/blob/master/index.html

// Give me a coffee <3 https://github.com/HoangTran0410/HoangTran0410/blob/main/DONATE.md

// You can change global variables here:
var radius = 240; // how big of the radius
var autoRotate = false; // auto rotate or not
var rotateSpeed = -60; // unit: seconds/360 degrees
var imgWidth = 120; // width of images (unit: px)
var imgHeight = 170; // height of images (unit: px)

// Link of background music - set 'null' if you dont want to play background music
var bgMusicURL =
  'https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a';
var bgMusicControls = true; // Show UI music control

/*
     NOTE:
       + imgWidth, imgHeight will work for video
       + if imgWidth, imgHeight too small, play/pause button in <video> will be hidden
       + Music link are taken from: https://hoangtran0410.github.io/Visualyze-design-your-own-/?theme=HauMaster&playlist=1&song=1&background=28
       + Custom from code in tiktok video  https://www.facebook.com/J2TEAM.ManhTuan/videos/1353367338135935/
*/

// ===================== start =======================
// animation start after 1000 miliseconds
setTimeout(init, 0);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid]; // combine 2 arrays
// Size of images
ospin.style.width = imgWidth + 'px';
ospin.style.height = imgHeight + 'px';

// Size of ground - depend on radius
var ground = document.getElementById('ground');
ground.style.width = radius * 3 + 'px';
ground.style.height = radius * 3 + 'px';

function init(delayTime) {
  console.log('delay time');
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform =
      'rotateY(' + i * (360 / aEle.length) + 'deg) translateZ(' + radius + 'px)';
  }
}

function applyTranform(obj) {
  console.log('transform called');
  // Constrain the angle of camera (between 0 and 180)
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = 'rotateX(' + -0 + 'deg) rotateY(' + tX + 'deg)';
}

function playSpin(yes) {
  console.log('play spin called');
  ospin.style.animationPlayState = yes ? 'running' : 'paused';
}

var sX,
  sY,
  nX,
  nY,
  desX = 0,
  desY = 0,
  tX = 0,
  tY = 10,
  activeIndex = 0,
  activeImageClientX = aEle[activeIndex].getBoundingClientRect().x,
  rotate = 0;

// auto spin
if (autoRotate) {
  var animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// add background music
if (bgMusicURL) {
  document.getElementById('music-container').innerHTML += `
<audio src="${bgMusicURL}" ${bgMusicControls ? 'controls' : ''} autoplay loop>    
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>
`;
}

//

// setup events
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
    sY = e.clientY;

  // handleClick Image
  if (e.target.className === 'carousel-3d-image') {
    // get index of clicked image
    const targetIndex = parseInt(e.target.getAttribute('data-index'));

    // high light by border
    aEle[targetIndex].style.border = '3px solid red';
    aEle[activeIndex].style.border = 'none';

    // rotate active image to center
    let rotateDeg = 360 / aEle.length;

    if (e.clientX > activeImageClientX) {
      if (Math.abs(targetIndex - activeIndex) > aEle.length / 2) {
        rotate += rotateDeg * -(aEle.length - Math.abs(targetIndex - activeIndex));
      } else {
        rotate += rotateDeg * -(targetIndex - activeIndex);
      }
    } else {
      if (Math.abs(targetIndex - activeIndex) > aEle.length / 2) {
        rotate += rotateDeg * (aEle.length - Math.abs(targetIndex - activeIndex));
      } else {
        rotate += rotateDeg * -(targetIndex - activeIndex);
      }
    }

    // re-assign active image now
    activeIndex = targetIndex;

    // set transform rotate effect
    odrag.style.transform = 'rotateY(' + rotate + 'deg)';
    odrag.style.transition = 'transform 1s';

    let previewBg = document.getElementById('box-image-preview');
    previewBg.style.backgroundImage = `url(${aEle[targetIndex].src})`;

    return false;
  }

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
      nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;

    applyTranform(odrag);

    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(true);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(false);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function (e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};