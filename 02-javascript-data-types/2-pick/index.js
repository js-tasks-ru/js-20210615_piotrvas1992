/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const paramsWithValuesList = Object.entries(obj);
  const finalObject = {};

  if (paramsWithValuesList.length) {
    paramsWithValuesList.forEach(arr=>{
      if (fields.some(field=>field === arr[0])) {
        finalObject[arr[0]] = arr[1];
      }
    });
  }

  return finalObject;
};
