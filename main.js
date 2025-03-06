const ruler = document.querySelector('.ruler');
const label = document.querySelector('.label');
const topLines = document.querySelector('.top-lines');
const bottomLines = document.querySelector('.bottom-lines');


function updateRuler() {
  let width = window.innerWidth; 
  label.innerText = `${width}px`;
  topLines.innerText = '';
  bottomLines.innerHTML = '';


  for (let i = 0; i < width; i += 50) {

    const topBox = document.createElement('div');
    const topMiniBox = document.createElement('div');
    topBox.classList.add('big-box');
    topMiniBox.classList.add('mini-box');
    topBox.style.left = `${i}px`;

    topLines.appendChild(topBox);
    topBox.appendChild(topMiniBox);

    const bottomBox = document.createElement('div');
    const bottomMiniBox = document.createElement('div');

    bottomBox.classList.add('big-box');
    bottomBox.classList.add('bottom-big-box');
    bottomMiniBox.classList.add('mini-box');
    bottomBox.style.left = `${i}px`;

    bottomLines.appendChild(bottomBox);
    bottomBox.appendChild(bottomMiniBox);

  }
}

updateRuler();

window.addEventListener('resize', updateRuler);