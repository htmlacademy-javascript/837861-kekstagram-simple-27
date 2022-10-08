const NUMBER_OF_OBJECTS = 25;
let arrayOfObjects = [];

const getValueFromRange = (a, b) => { // функцию нашел здесь: https://www.youtube.com/watch?v=A41ICV0fQ0g
  if (a < 0 || b < 0) {
    return NaN;
  } else if (a === 0 && b === 0) {
    return NaN;
  } else if (typeof a === 'string' || typeof b === 'string') {
    return NaN;
  } else if (a === undefined || b === undefined) {
    return NaN;
  }
  if (a > b) {
    const c = a;
    a = b;
    b = c;
  }
  const array = [];
  for (let i = 0; i <= b - a; i++) {
    array[i] = [Math.random(), a + i];
  }
  return array.sort()[0][1];
};

const checkStringLength = (currentString, maxLength) => currentString.length <= maxLength;

const createObject = () => {
  return {
    id: 0,
    url: '',
    description: 'It is the best photo I have ever seen',
    likes: getValueFromRange(15, 200),
    comments: getValueFromRange(0, 200)
  }
}

const getArrayOfObjects = () => {
  for (let i = 0; i < NUMBER_OF_OBJECTS; i++) {
    arrayOfObjects[i] = createObject();
    arrayOfObjects[i].id = i + 1;
    arrayOfObjects[i].url = `photos/${i + 1}.jpg`;
  }
  return arrayOfObjects;
};

checkStringLength();
getValueFromRange();
getArrayOfObjects();
createObject();
