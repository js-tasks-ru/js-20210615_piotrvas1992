/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  const uniqArr = [];

  new Set(arr).forEach(value=>{
    uniqArr.push(value);
  });

  return uniqArr;
}
