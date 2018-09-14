import headerTpl from './templates/header.hbs';

const headerData = {
  title: 'Webpack is amazing!',
};

const markup = headerTpl(headerData);

export default function init() {
  document.body.insertAdjacentHTML('afterbegin', markup);
}
