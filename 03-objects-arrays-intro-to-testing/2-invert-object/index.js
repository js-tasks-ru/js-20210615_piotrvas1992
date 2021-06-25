/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (!obj) {
    return;
  }

  const newObj = {};
  const listKeysAndValues = Object.entries(obj);

  listKeysAndValues.forEach(list=>{
    newObj[list[1]] = list[0];
  });

  return newObj;
}
