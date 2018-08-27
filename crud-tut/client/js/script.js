'use strict';

const api = {
  baseUrl: 'http://localhost:3000/notes',
  getAllNotes() {
    return fetch(this.baseUrl)
      .then(response => {
        if (response.ok) return response.json();

        throw new Error('Error while fetching ' + response.statusText);
      })
      .catch(error => console.log(error));
  },
  addNote(note) {
    return fetch(this.baseUrl, {
      method: 'POST',
      body: JSON.stringify(note),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then(response => {
        if (response.ok) return response.json();

        throw new Error('Error while fetching ' + response.statusText);
      })
      .catch(error => console.log(error));
  },
  deleteNote(id) {
    return fetch(`${this.baseUrl}/${id}`, { method: 'DELETE' })
      .then(response => {
        if (!response.ok) throw new Error('Неполучилось удалить!!!');
      })
      .catch(error => console.log(error));
  },
  updateNote(note) {
    return fetch(`${this.baseUrl}/${note.id}`, {
      method: 'PATCH',
      body: JSON.stringify(note),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) return response.json();

        throw new Error('Error while fetching ' + response.statusText);
      })
      .catch(error => console.log(error));
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const refs = selectRefs();
  const state = { selectedId: null };

  refs.noteEditor.addEventListener('submit', handleNoteEditorSubmit);
  refs.noteList.addEventListener('click', handleNoteListClick);
  refs.modal.addEventListener('click', handleModalClick);

  init();

  /**
   * Helper functions
   */

  function init() {
    api.getAllNotes().then(notes => {
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

    api.addNote({ text }).then(note => {
      const markup = createNoteMarkup(note);
      refs.noteList.insertAdjacentHTML('beforeend', markup);
    });

    refs.noteEditor.reset();
  }

  function handleNoteListClick({ target }) {
    if (target.nodeName !== 'BUTTON') return;

    const action = target.dataset.action;

    switch (action) {
      case 'delete':
        deleteNote(target);
        break;

      case 'edit':
        editNoteStart(target);
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
        editNoteCancel();
        break;

      case 'save':
        editNoteSuccess();
        break;

      default:
        throw new Error('Unrecognized action type ' + action);
    }
  }

  function deleteNote(target) {
    const note = target.closest('.note');
    const noteIdToDelete = Number(note.dataset.id);

    api.deleteNote(noteIdToDelete).then(() => {
      note.remove();
    });
  }

  function editNoteStart(target) {
    const note = target.closest('.note');
    const noteIdToEdit = Number(note.dataset.id);
    state.selectedId = noteIdToEdit;

    const noteText = note.querySelector('.text').textContent;

    refs.modalInput.value = noteText;

    toggleModal();
  }

  function editNoteCancel() {
    state.selectedId = null;
    refs.modalInput.value = '';
    toggleModal();
  }

  function editNoteSuccess() {
    const noteToUpdate = {
      id: state.selectedId,
      text: refs.modalInput.value,
    };

    api.updateNote(noteToUpdate).then(updatedNote => {
      const noteTextEl = refs.noteList.querySelector(
        `.note[data-id="${updatedNote.id}"] .text`,
      );

      noteTextEl.textContent = updatedNote.text;

      toggleModal();
    });
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

  function selectRefs() {
    const refs = {};

    refs.noteEditor = document.querySelector('.note-editor');
    refs.noteEditorInput = refs.noteEditor.querySelector('textarea');
    refs.noteList = document.querySelector('.note-list');
    refs.modal = document.querySelector('.modal');
    refs.modalInput = refs.modal.querySelector('textarea');
    refs.modalBackdrop = document.querySelector('.backdrop');

    return refs;
  }
});
