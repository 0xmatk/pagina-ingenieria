// const openModal = document.querySelector('.button-ver');
// const closeModal = document.querySelector('.close-modal');
// const modalOverlay = document.querySelector('.modal-overlay');

// openModal.addEventListener('click', () => {
//   modalOverlay.style.display = 'flex';
// });

// closeModal.addEventListener('click', () => {
//   modalOverlay.style.display = 'none';
// });


const openButtons = document.querySelectorAll('.button-ver');
const closeButtons = document.querySelectorAll('.close-modal');
const modalOverlays = document.querySelectorAll('.modal-overlay');

for (let i = 0; i < openButtons.length; i++) {
  openButtons[i].addEventListener('click', () => {
    modalOverlays[i].style.display = 'flex';
  });
}

for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', () => {
    modalOverlays[i].style.display = 'none';
  });
}