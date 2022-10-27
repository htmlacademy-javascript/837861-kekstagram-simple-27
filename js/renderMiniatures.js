// import { createObject, getArrayOfObjects } from './data.js';
import { getValueFromRange } from './utils.js';

const createElements = () => {
  const pictureContainer = document.querySelector('.pictures');
  const usersPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const userPictureElement = usersPicturesTemplate.cloneNode(true);
  const userPictureComments = userPictureElement.querySelector('.picture__comments');
  const userPictureLikes = userPictureElement.querySelector('.picture__likes');

  for (let i = 0; i < 4; i++) {
    userPictureElement.classList.add('random-user--picture');
    userPictureElement.querySelector('img').src = `./photos/${getValueFromRange(1, 5)}.jpg`;
    userPictureComments.textContent = getValueFromRange(1, 5);
    userPictureLikes.textContent = getValueFromRange(1, 5);
    pictureContainer.append(userPictureElement);
  }
};

export { createElements };


// function say() {
//   console.log(this.nickName + 'says' + this.greeting);
//   this.goodies.forEach(function (goodie) {
//     console.log(this.nickName + 'likes' + goodie);
//   })
// }

// const cat = {
//   nickName: 'Keks',
//   greeting: 'Meow',
//   goodies: [
//     'Fresh fish',
//     'Masters boots'
//   ],
//   say
// };
