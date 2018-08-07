const page = document.querySelector('.page');
const openModalBtn = document.querySelector('.js-open-modal');
const closeModalBtn = document.querySelector(
  'button[data-action="close-modal"]',
);

openModalBtn.addEventListener('click', handleOpenModal);
closeModalBtn.addEventListener('click', handleCloseModal);

function handleOpenModal() {
  page.classList.add('show-modal');
  window.addEventListener('keydown', handleModalEscPress);
}

function handleCloseModal() {
  page.classList.remove('show-modal');
  window.removeEventListener('keydown', handleModalEscPress);
}

function handleModalEscPress(evt) {
  const key = evt.code;

  if (key === 'Escape') {
    handleCloseModal();
  }
}
