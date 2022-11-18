import './form.js';
import { createElements } from './create-elements.js';
import { setUserFormSubmit, modalClose } from './form.js';
import { getData } from './api.js';
import './create-elements.js';

getData((photos) => {
  createElements(photos);
});
setUserFormSubmit(modalClose);
