import { resetEffects } from './effects.js';
import './scale.js';
import './effects.js';
import { showAlert } from './utils.js';
import { sendData } from './api.js';


const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const fileField = document.querySelector('#upload-file');
const uploadModalClose = document.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'error_message'
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unBlockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unBlockSubmitButton();
          form.reset();
        },
        () => {
          showAlert('Server is unavailable. Try again later');
          form.reset();
          unBlockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

const showModal = () => {
  overlay.classList.remove('hidden');
  overlay.classList.add('unremovable');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopUpEscapeKeydown);
};

const modalClose = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopUpEscapeKeydown);
  fileField.value = '';
  resetEffects();
};

function onPopUpEscapeKeydown(evt) {
  if (evt.key === 'Escape' && overlay.classList.contains('unremovable')) {
    modalClose();
  }
}

uploadModalClose.addEventListener('click', modalClose);
fileField.addEventListener('change', showModal);

export {
  setUserFormSubmit,
  modalClose,
  showModal,
  unBlockSubmitButton
};
