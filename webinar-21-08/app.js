const API_KEY = '5837779-ac3ba737206b541ae294f1119';
const refs = {
  page: document.querySelector('.page'),
  loadMoreBtn: document.querySelector('.load-more'),
  form: document.querySelector('.form'),
  queryInput: document.querySelector('.form .input'),
  grid: document.querySelector('.grid'),
};
const request = {
  page: 1,
  query: '',
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
};

refs.form.addEventListener('submit', handleFormSubmit);
refs.loadMoreBtn.addEventListener('click', handleLoadMoreBtnClick);

// =====================================================
function handleFormSubmit(e) {
  e.preventDefault();

  request.query = refs.queryInput.value;
  request.resetPage();

  refs.grid.innerHTML = '';
  handleFetch();

  refs.form.reset();
}

function handleLoadMoreBtnClick() {
  request.incrementPage();

  handleFetch();
}

function handleFetch() {
  toggleLoader();

  fetchImages({ query: request.query, page: request.page }).then(items => {
    toggleLoader();

    const markup = createGridItems(items);
    refs.grid.insertAdjacentHTML('beforeend', markup);
  });
}

function fetchImages({ query = '', page = 1 }) {
  const url = `https://pixabay.com/api/?image_type=photo&q=${query}&key=${API_KEY}&per_page=9&page=${page}`;

  return fetch(url)
    .then(response => {
      if (response.ok) return response.json();

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      console.log(data);
      return data.hits;
    })
    .catch(error => {
      console.log('ERROR: ', error);
    });
}

function createGridItems(items) {
  return items.reduce(
    (markup, item) =>
      markup +
      `<div class="grid-item"><img src="${item.webformatURL}" alt=""></div>`,
    '',
  );
}

function toggleLoader() {
  refs.page.classList.toggle('show-loader');
}
