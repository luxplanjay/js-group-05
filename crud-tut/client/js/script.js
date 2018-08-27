'use strict';
const API_URL = 'http://localhost:3000/notes';
const refs = {
  noteEditor: document.querySelector('.note-editor'),
  noteEditorInput: document.querySelector('.note-editor textarea'),
  noteList: document.querySelector('.note-list'),
  modal: document.querySelector('.modal'),
  modalInput: document.querySelector('.modal textarea'),
  modalBackdrop: document.querySelector('.backdrop'),
};

const state = {
  selectedId: null,
};

init();

refs.noteEditor.addEventListener('submit', handleNoteEditorSubmit);
refs.noteList.addEventListener('click', handleNoteListClick);
refs.modal.addEventListener('click', handleModalClick);

/**
 * ================================================================
 */

function init() {
  fetch(API_URL)
    .then(response => response.json())
    .then(notes => {
      const markup = notes.reduce(
        (acc, note) => acc + createNoteMarkup(note),
        '',
      );

      refs.noteList.insertAdjacentHTML('afterbegin', markup);
    });
}

function handleNoteEditorSubmit(e) {
  e.preventDefault();

  const text = refs.noteEditorInput.value.trim();

  if (text === '') return alert('Нельзя добавить пустую заметку!!!');

  const noteToAdd = { text };

  refs.noteEditor.reset();

  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(noteToAdd),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(note => {
      const markup = createNoteMarkup(note);
      refs.noteList.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log(error));
}

function handleNoteListClick({ target }) {
  if (target.nodeName !== 'BUTTON') return;

  const action = target.dataset.action;

  switch (action) {
    case 'delete':
      deleteNote(target);
      break;

    case 'edit':
      updateNote(target);
      break;

    default:
      throw new Error('Unrecognized action type ' + action);
  }
}

function handleModalClick({ target }) {
  if (target.nodeName !== 'BUTTON') return;

  const action = target.dataset.action;

  switch (action) {
    case 'close':
      toggleModal();
      break;

    case 'save':
      saveNote();
      break;

    default:
      throw new Error('Unrecognized action type ' + action);
  }
}

function deleteNote(target) {
  const note = target.closest('.note');
  const noteIdToDelete = Number(note.dataset.id);

  fetch(`${API_URL}/${noteIdToDelete}`, { method: 'DELETE' })
    .then(response => {
      if (!response.ok) throw new Error('Неполучилось удалить!!!');

      note.remove();
    })
    .catch(error => console.log(error));
}

function updateNote(target) {
  const note = target.closest('.note');
  const noteIdToUpdate = Number(note.dataset.id);
  state.selectedId = noteIdToUpdate;

  const noteContent = note.querySelector('.text').textContent;

  refs.modalInput.value = noteContent;

  toggleModal();
}

function saveNote() {
  const updatedNoteContent = refs.modalInput.value;
  const noteIdToUpdate = state.selectedId;

  const noteToUpdate = {
    text: updatedNoteContent,
  };

  fetch(`${API_URL}/${noteIdToUpdate}`, {
    method: 'PATCH',
    body: JSON.stringify(noteToUpdate),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(updatedNote => {
      const noteTextEl = refs.noteList.querySelector(
        `.note[data-id="${updatedNote.id}"] .text`,
      );

      noteTextEl.textContent = updatedNote.text;

      toggleModal();
    })
    .catch(error => console.log(error));
}

function createNoteMarkup({ id, text }) {
  return `
    <li class="note" data-id="${id}">
      <div class="actions">
        <button class="button" data-action="edit">Редактировать</button>
        <button class="button" data-action="delete">Удалить</button>
      </div>
      <p class="text">${text}</p>
    </li>
  `;
}

function toggleModal() {
  refs.modalBackdrop.classList.toggle('is-visible');
}

// function request({
//   url = 'http://localhost:3000/notes',
//   method = 'GET',
//   body = {},
//   headers = {
//     'Content-type': 'application/json',
//   },
// }) {
//   return fetch(url, {
//     method,
//     body: JSON.stringify(body),
//     headers,
//   })
//     .then(response => {
//       if(response.ok) return response.json();

//       throw new Error(`Error while fetching ${response.statusText}`);
//     })
//     .catch(error => console.log(error));
// }
