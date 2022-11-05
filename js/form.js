import { isEscape } from './utils.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const fileField = document.querySelector('#upload-file');
const uploadModalClose = document.querySelector('.img-upload__cancel');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'error_message'
});

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopUpEscapeKeydown);
};

const modalClose = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopUpEscapeKeydown);
  fileField.value = '';
};

function onPopUpEscapeKeydown() {
  if (isEscape) {
    modalClose();
  }
}

uploadModalClose.addEventListener('click', modalClose);
fileField.addEventListener('change', showModal);
