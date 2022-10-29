import { getArrayOfObjects } from './data.js';

const createElements = () => {
  const pictures = document.querySelector('.pictures');
  const picturesTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const pictureFragment = document.createDocumentFragment();
  const renderPhoto = getArrayOfObjects();
  renderPhoto.forEach(({ url, comments, likes }) => {
    const photoElement = picturesTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments;
    pictureFragment.append(photoElement);
  });
  pictures.append(pictureFragment);
};

export { createElements };
