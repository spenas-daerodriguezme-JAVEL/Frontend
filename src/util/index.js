function toMoney(val) {
  val += '';

  let size = val.length;
  let dots = Math.ceil(size / 3) - 1;
  val = val.split('').reverse()
  for (let i = 1; i <= dots; i++) {
    val.splice(i * 3 + i - 1, 0, '.');
  }

  val.splice(val.length, 1, '$')
  return val.reverse().join('');
}

function pairLabelValue(list) {
  let arr = []

  for(const elem of list) {
    arr.push({
      label: elem,
      value: elem
    })
  }

  return arr;
}

function pairLabelAsc(list) {
  let arr = []

  for (let i = 0; i < list.length; i++) {
    arr.push({
      label: list[i],
      value: i
    })
  }

}

function trimText(text, maxChar = 150) {
  return text.substr(0, maxChar - 3) + "...";
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
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
}
