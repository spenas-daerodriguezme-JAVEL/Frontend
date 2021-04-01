function toMoney(val) {
  val += '';

  const size = val.length;
  const dots = Math.ceil(size / 3) - 1;
  val = val.split('').reverse();
  for (let i = 1; i <= dots; i++) {
    val.splice(i * 3 + i - 1, 0, '.');
  }

  val.splice(val.length, 1, '$');
  return val.reverse().join('');
}

function pairLabelValue(list) {
  const arr = [];

  for (const elem of list) {
    arr.push({
      label: elem,
      value: elem,
    });
  }

  return arr;
}

function pairLabelAsc(list) {
  const arr = [];

  for (let i = 0; i < list.length; i++) {
    arr.push({
      label: list[i],
      value: i,
    });
  }
}

function trimText(text, maxChar = 150) {
  return `${text.substr(0, maxChar - 3)}...`;
}

function deepCopy(elem) {
  return JSON.parse(JSON.stringify(elem));
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function locationInBox(event, box) {
  const dimentions = box.getBoundingClientRect();
  console.log(event, dimentions);

  return event.clientX >= dimentions.left
         && event.clientX <= dimentions.right
         && event.clientY <= dimentions.top
         && event.clientY >= dimentions.bottom;
}

function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function typeWriter(text, element, letterTime = 150) {
  element.placeholder = '';
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      element.placeholder = text.substr(0, i + 1);
    }, i * letterTime);
  }
}

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join(''),
  );

  return JSON.parse(jsonPayload);
}
/**
 * This function returns the url of the image specify in imgPosition. If that
 * image doesn't exist return a image by default based on the businessLine. Each image has a two positions in array
 * normal and thumbnail. Positions are adjacent.
 * @param {*} productImages Array of images of Product to display
 * @param {*} imgPosition Position of the image in array of images
 * @param {*} businessLine BusinessLine of the product
 */
function getImageFromProduct(productImages, imgPosition, businessLine) {
  if (productImages.length <= imgPosition) {
    if (businessLine === 'Fragancias') return 'https://storage.googleapis.com/thechemcie/Fragancia%20gen%C3%A9rica%20perfumes.webp';
    else if (businessLine === 'Domésticos') return 'https://storage.googleapis.com/thechemcie/Imagen%20gen%C3%A9rica%20difusores.webp';
    else if (businessLine === 'Industriales') return 'https://storage.googleapis.com/thechemcie/Im%C3%A1gen%20gen%C3%A9rica%20cat%C3%A1logo%20industrial.webp';
    else if (businessLine === 'Agroquímicos') return 'https://storage.googleapis.com/thechemcie/Imagen%20gen%C3%A9rica%20humidificador.webp';
    else return require('../assets/logo-mobile.png');
    
  }

  return productImages[imgPosition];
}

export default {
  toMoney,
  pairLabelValue,
  pairLabelAsc,
  trimText,
  deepCopy,
  mod,
  locationInBox,
  removeAccents,
  typeWriter,
  parseJwt,
  getImageFromProduct,
};
