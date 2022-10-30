import { getArrayOfObjects } from './data.js';

const pictures = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const picturesFragment = document.createDocumentFragment();
const renderPhotos = getArrayOfObjects();

const createElements = () => {
  renderPhotos.forEach(({ url, likes, comments }) => {
    const photoElement = picturesTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments;
    picturesFragment.append(photoElement);
  });
  pictures.append(picturesFragment);
};

export { createElements };
