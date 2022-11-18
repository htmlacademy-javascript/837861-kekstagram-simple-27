import { createSuccessMessage, createErrorMessage } from './create-elements.js';
import { unBlockSubmitButton } from './form.js';

const overlay = document.querySelector('.img-upload__overlay');

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        createSuccessMessage();
        console.log('success done');
      } else {
        onFail('Server is unavailable now');
      }
    })
    // .catch(() => {
    //   onFail('Server is unavailable now');
    // }
    .catch(
      overlay.classList.remove('unremovable'),
      console.log('catch done'),
      createErrorMessage(),
      unBlockSubmitButton(),
    );
};

export {
  getData,
  sendData
};
