export default class View {
  constructor() {
    this.refs = {};

    this.refs.recipeEditor = document.querySelector('.recipe-editor');
    this.refs.textarea = this.refs.recipeEditor.querySelector('textarea');
    this.refs.recipeList = document.querySelector('.recipe-list');
    this.refs.modal = document.querySelector('.modal');
    this.refs.modalTextarea = this.refs.modal.querySelector('textarea');
  }

  init(recipes) {
    const markup = recipes.reduce((string, recipe) => {
      return string + this.createRecipeMarkup(recipe);
    }, '');

    this.refs.recipeList.insertAdjacentHTML('beforeend', markup);
  }

  addRecipe(recipe) {
    const markup = this.createRecipeMarkup(recipe);

    this.refs.recipeList.insertAdjacentHTML('beforeend', markup);
  }

  deleteRecipe(id) {
    const el = this.refs.recipeList.querySelector(`.recipe[data-id="${id}"]`);

    el.remove();
  }

  showModal(recipe) {
    console.log(recipe);
    this.refs.modalTextarea.value = recipe.text;
    this.refs.modal.style.display = 'block';
  }

  closeModal() {
    this.refs.modal.style.display = 'none';
  }

  createRecipeMarkup({ id, text }) {
    return `
      <div class="recipe" data-id="${id}" style="outline: 1px solid #212121;">
        <p>${text}</p>
        <div class="actions">
          <button data-action="delete">Удалить</button>
          <button data-action="edit">Редактировать</button>
        </div>
      </div>
    `;
  }
}
