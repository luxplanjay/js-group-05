class Modal {
  constructor({ toggleClass, closeBtn }) {
    this.closeBtn = closeBtn;
    this.toggleClass = toggleClass;

    this.init();
  }

  init() {
    this.closeBtn.addEventListener('click', this.handleCloseModal.bind(this));
  }

  handleOpenModal() {
    document.body.classList.add(this.toggleClass);
    window.addEventListener('keydown', this.handleModalEscPress.bind(this));
  }

  handleCloseModal() {
    document.body.classList.remove(this.toggleClass);
    window.removeEventListener('keydown', this.handleModalEscPress.bind(this));
  }

  handleModalEscPress(evt) {
    const key = evt.code;

    if (key === 'Escape') {
      handleCloseModal();
    }
  }
}

new Modal({
  toggleClass: 'show-modal',
  closeBtn: document.querySelector('button[data-action="close-modal"]'),
});
