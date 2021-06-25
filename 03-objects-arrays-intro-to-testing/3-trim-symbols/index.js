/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) {
    return '';
  }
  else if (!size) {
    return string;
  }

  const arr = string.split('');
  const newArr = [];
  let char;
  let counter = 1;

  arr.forEach(item=>{
    if (char === item) {
      counter++;
      if (counter <= size) {
        newArr.push(item);
      }
    } else {
      counter = 1;
      newArr.push(item);
      char = item;
    }

  });

  return newArr.join('');
}
