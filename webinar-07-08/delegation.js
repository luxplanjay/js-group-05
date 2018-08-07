document.addEventListener('DOMContentLoaded', () => {
  const noteEditor = document.querySelector('.js-note-editor');
  const input = noteEditor.querySelector('input');
  const noteList = document.querySelector('.note-list');

  noteEditor.addEventListener('submit', handleSubmit);
  noteList.addEventListener('click', handleNoteListClick);

  function handleSubmit(evt) {
    evt.preventDefault();

    const text = input.value;

    const markup = createNoteMarkup(text);
    noteList.insertAdjacentHTML('afterbegin', markup);

    noteEditor.reset();
  }
});

function handleNoteListClick(evt) {
  const target = evt.target;
  const nodeName = target.nodeName;
  const action = target.dataset.action;

  if (nodeName !== 'BUTTON' || action !== 'delete-note') return;

  // const parent = evt.target.parentNode.parentNode;
  const parent = target.closest('.note');
  parent.remove();
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
