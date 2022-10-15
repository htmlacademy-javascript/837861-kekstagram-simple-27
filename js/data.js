import { getValueFromRange } from './utils';

const NUMBER_OF_OBJECTS = 25;
const arrayOfObjects = [];

const createObject = () => ({
  id: 0,
  url: '',
  description: 'It is the best photo I have ever seen',
  likes: getValueFromRange(15, 200),
  comments: getValueFromRange(0, 200)
});

const getArrayOfObjects = () => {
  for (let i = 0; i < NUMBER_OF_OBJECTS; i++) {
    arrayOfObjects[i] = createObject();
    arrayOfObjects[i].id = i + 1;
    arrayOfObjects[i].url = `photos/${i + 1}.jpg`;
  }
  return arrayOfObjects;
};

export {
  createObject,
  getArrayOfObjects
};
