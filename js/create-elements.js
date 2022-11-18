const pictures = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const picturesFragment = document.createDocumentFragment();
const container = document.querySelector('body');


const successMessageTemplate = document.querySelector('#success')
  .content
  .querySelector('.success__inner');

const errorMessageTemplate = document.querySelector('#error')
  .content
  .querySelector('.error__inner');

const succesMessageFragment = document.createDocumentFragment();
const successMessageElement = successMessageTemplate.cloneNode(true);
const succesButton = successMessageElement.querySelector('.success__button');

const errorMessageFragment = document.createDocumentFragment();
const errorMessageElement = errorMessageTemplate.cloneNode(true);
const errorButton = errorMessageElement.querySelector('.error__button');


const createElements = (photos) => {
  photos.forEach(({ url, likes, comments }) => {
    const photoElement = picturesTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments;
    picturesFragment.append(photoElement);
  });
  pictures.append(picturesFragment);
};

const createSuccessMessage = () => {
  successMessageElement.style.position = 'absolute';
  successMessageElement.style.left = '30%';
  successMessageElement.style.top = '10%';
  succesMessageFragment.append(successMessageElement);
  container.append(succesMessageFragment);
};

const createErrorMessage = () => {
  errorMessageElement.style.position = 'absolute';
  errorMessageElement.style.zIndex = 100;
  errorMessageElement.style.left = '30%';
  errorMessageElement.style.top = '10%';
  errorMessageFragment.append(errorMessageElement);
  container.append(errorMessageFragment);
};

const onSuccessMessageEscapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    successMessageElement.remove();
  }
};
const notSuccessMessageElementOnclick = (evt) => {
  if (evt.target !== successMessageElement) {
    successMessageElement.remove();
  }
};

const onErrorMessageEscapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    errorMessageElement.remove();
  }
};
// const notMessageElementOnclick = (evt) => {
//   if (evt.target !== successMessageElement) {
//     successMessageElement.remove();
//   }
// };

succesButton.addEventListener('click', () => successMessageElement.remove());
window.addEventListener('keydown', onSuccessMessageEscapeKeydown);
window.addEventListener('click', notSuccessMessageElementOnclick);

errorButton.addEventListener('click', () => errorMessageElement.remove());
window.addEventListener('keydown', onErrorMessageEscapeKeydown);
// window.addEventListener('click', notMessageElementOnclick);

export {
  createElements,
  createSuccessMessage,
  createErrorMessage,
  onSuccessMessageEscapeKeydown
};
