import greet from './greet';
import initHeader from './header';
import './sass/styles.scss';
import './sass/form.scss';
import tigerImage from './img/tiger.jpeg';

initHeader();

const img = document.createElement('img');
img.src = tigerImage;

document.querySelector('#root').appendChild(img);

greet('Webpack is awesome');
