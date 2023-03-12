const oFont = document.getElementsByClassName('font-preview');

for (let i = 0; i < oFont.length; i++) {
  oFont[i].addEventListener('click', () => {
    for (let j = 0; j < oFont.length; j++) {
      oFont[j].style.color = 'black';
    }
    oFont[i].style.color = 'red';
  });
}

function handleChooseFont(i) {}
