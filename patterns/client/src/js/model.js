import * as api from './services/api';

export default class Model {
  constructor(items = []) {
    this._items = items;
  }

  getItemById(id) {
    return this._items.find(item => item.id === id);
  }

  getItems() {
    return api.getAllRecipes().then(recipes => {
      this._items = recipes;

      return this._items;
    });
  }

  addItem(item) {
    return api.addRecipe(item).then(newItem => {
      this._items.push(newItem);

      return newItem;
    });
  }

  deleteItem(id) {
    return api.deleteRecipe(id).then(() => {
      this._items = this._items.filter(item => item.id !== id);

      return id;
    });
  }
}
