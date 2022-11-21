import './form.js';
import { createElements } from './create-elements.js';
import { setUserFormSubmit, modalClose } from './form.js';
import { getData } from './api.js';
import './create-elements.js';
import { showAlert } from './utils.js';

getData((photos) => {
  createElements(photos);
},
() => {
  showAlert('Can not upload photos from the server');
});

setUserFormSubmit(modalClose);
