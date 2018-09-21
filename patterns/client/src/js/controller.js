export default class Controller {
  constructor(view, model) {
    this._view = view;
    this._model = model;

    this._view.refs.recipeEditor.addEventListener(
      'submit',
      this.handleAddRecipe.bind(this),
    );

    this._view.refs.recipeList.addEventListener(
      'click',
      this.handleRecipeListClick.bind(this),
    );

    this.init();
  }

  init() {
    this._model.getItems().then(items => {
      this._view.init(items);
    });
  }

  handleAddRecipe(e) {
    e.preventDefault();

    const text = this._view.refs.textarea.value;

    this._model.addItem({ text }).then(createdItem => {
      this._view.addRecipe(createdItem);
    });

    this._view.refs.recipeEditor.reset();
  }

  handleRecipeListClick({ target }) {
    const nodeName = target.nodeName;

    if (nodeName !== 'BUTTON') return;

    const action = target.dataset.action;
    const parentId = Number(target.closest('.recipe').dataset.id);

    switch (action) {
      case 'delete':
        this.deleteRecipe(parentId);
        break;

      case 'edit':
        this.editRecipeStart(parentId);
        break;

      default:
        throw new Error('Unknows action type');
    }
  }

  deleteRecipe(id) {
    this._model.deleteItem(id).then(deletedId => {
      this._view.deleteRecipe(deletedId);
    });
  }

  editRecipeStart(id) {
    const recipe = this._model.getItemById(id);
    this._view.showModal(recipe);
  }
}
