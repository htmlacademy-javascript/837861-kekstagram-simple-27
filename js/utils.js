const ALERT_SHOW_TIME = 3000;

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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '50px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.style.color = 'yellowgreen';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getValueFromRange,
  checkStringLength,
  showAlert
};
