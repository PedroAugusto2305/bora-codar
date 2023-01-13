const openBtn = document.getElementById('button-360');
const closeBtn = document.getElementById('close-button');
const staticImage = document.getElementById('image-static');
const animateImage = document.getElementById('image-animate');

openBtn.onclick = function (event) {
  event.preventDefault()

  staticImage.classList.add('hide')
  openBtn.classList.add('hide')
  animateImage.classList.remove('hide')
  closeBtn.classList.remove('hide')
}

closeBtn.onclick = function (event) {
  event.preventDefault()

  staticImage.classList.remove('hide')
  openBtn.classList.remove('hide')
  animateImage.classList.add('hide')
  closeBtn.classList.add('hide')
}