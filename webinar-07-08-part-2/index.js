document.addEventListener('DOMContentLoaded', () => {
  const noteEditor = document.querySelector('.js-note-editor');
  const noteEditorInput = noteEditor.querySelector('input');
  const modalInput = document.querySelector('.modal input');
  const noteList = document.querySelector('.note-list');
  const page = document.querySelector('.page');
  const closeModalBtn = document.querySelector(
    'button[data-action="close-modal"]',
  );
  const saveModalBtn = document.querySelector(
    'button[data-action="note-save"]',
  );
  let elementInEdit = null;

  noteEditor.addEventListener('submit', handleSubmit);
  noteList.addEventListener('click', handleNoteListClick);
  closeModalBtn.addEventListener('click', handleCloseModal);
  saveModalBtn.addEventListener('click', handleSaveNote);

  function handleSubmit(evt) {
    evt.preventDefault();
    addNote(noteEditorInput.value);
    noteEditor.reset();
  }

  function handleNoteListClick(evt) {
    const target = evt.target;
    const nodeName = target.nodeName;

    if (nodeName !== 'BUTTON') return;

    const action = target.dataset.action;

    switch (action) {
      case 'delete-note':
        deleteNote(target);
        break;
      case 'edit-note':
        editNote(target);
        break;
    }
  }

  function handleSaveNote() {
    const paragraph = elementInEdit.querySelector('p');
    paragraph.textContent = modalInput.value;

    handleCloseModal();
  }

  function addNote(text) {
    const markup = createNoteMarkup(text);
    noteList.insertAdjacentHTML('afterbegin', markup);
  }

  function deleteNote(target) {
    const parent = target.closest('.note');
    parent.remove();
  }

  function editNote(target) {
    const parentLi = target.closest('.note');
    const paragraph = parentLi.querySelector('p');

    elementInEdit = parentLi;
    handleOpenModal(paragraph.textContent);
  }

  function handleOpenModal(text) {
    modalInput.value = text;

    page.classList.add('show-modal');
    window.addEventListener('keydown', handleModalEscPress);
  }

  function handleCloseModal() {
    page.classList.remove('show-modal');
    window.removeEventListener('keydown', handleModalEscPress);
  }

  function handleModalEscPress(evt) {
    const key = evt.code;

    if (key !== 'Escape') return;

    handleCloseModal();
  }

  function createNoteMarkup(text) {
    return `
      <li class="note">
        <p>${text}</p>
        <div class="actions">
          <button data-action="delete-note">Delete</button>
          <button data-action="edit-note">Edit</button>
        </div>
      </li>`;
  }
});
