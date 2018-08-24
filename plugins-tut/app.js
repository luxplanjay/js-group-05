const API_KEY =
  '9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251';
const refs = {
  page: document.querySelector('.page'),
  form: document.querySelector('.form'),
  queryInput: document.querySelector('.form .input'),
  grid: document.querySelector('.grid'),
};
const request = {
  query: '',
};

const masonry = new Masonry(refs.grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid__col-sizer',
  gutter: '.grid__gutter-sizer',
  percentPosition: true,
  stagger: 30,
  visibleStyle: { transform: 'translateY(0)', opacity: 1 },
  hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
});

const infScroll = new InfiniteScroll(refs.grid, {
  path() {
    return `https://api.unsplash.com/search/photos?query=${
      request.query
    }&per_page=12&page=${this.pageIndex}&client_id=${API_KEY}`;
  },
  responseType: 'text',
  history: false,
  status: '.page-load-status',
  outlayer: masonry,
});

infScroll.on('load', response => {
  const data = JSON.parse(response);
  const markup = createGridItems(data.results);
  const proxy = document.createElement('div');
  proxy.innerHTML = markup;
  const items = proxy.querySelectorAll('.grid-item');

  imagesLoaded(items, () => {
    infScroll.appendItems(items);
    masonry.appended(items);
  });
});

refs.form.addEventListener('submit', handleFormSubmit);

infScroll.loadNextPage();

// =====================================================
function handleFormSubmit(e) {
  e.preventDefault();

  request.query = refs.queryInput.value;
  infScroll.pageIndex = 1;
  masonry.remove(refs.grid.querySelectorAll('.grid-item'));
  masonry.layout();
  window.scrollTo({
    top: 0,
    behavior: 'instant',
  });

  infScroll.loadNextPage();
  refs.form.reset();
}

function createGridItems(items) {
  return items.reduce(
    (markup, item) =>
      markup +
      `<div class="grid-item"><img src="${item.urls.small}" alt=""></div>`,
    '',
  );
}
