const createElements = () => {
  const pictureContainer = document.querySelector('.pictures');
  const usersPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const userPictureElement = usersPicturesTemplate.cloneNode(true);
  userPictureElement.classList.add('random-user--picture');
  userPictureElement.querySelector('img').src = './photos/1.jpg';
  pictureContainer.append(userPictureElement);
  return userPictureElement;
};

export { createElements };
