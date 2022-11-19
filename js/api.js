import { createSuccessMessage, createErrorMessage } from './create-elements.js';
import { unBlockSubmitButton } from './form.js';

const GET_DATA_ADRESS = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SEND_DATA_ADRESS = 'https://27.javascript.pages.academy/kekstagram-simple';
const overlay = document.querySelector('.img-upload__overlay');

const getData = (onSuccess, onFail) => {
  fetch(GET_DATA_ADRESS)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onFail();
      }
    })
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      onFail();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SEND_DATA_ADRESS,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        createSuccessMessage();
      } else {
        onFail('Unable to send the form. Try again later.');
      }
    })
    .catch(() => {
      overlay.classList.remove('unremovable');
      createErrorMessage();
      unBlockSubmitButton();
    });
};

export {
  getData,
  sendData
};
