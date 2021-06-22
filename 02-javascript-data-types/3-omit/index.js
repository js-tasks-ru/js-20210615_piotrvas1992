/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const paramsWithValuesList = Object.entries(obj);
  const { ...finalObject } = obj;

  paramsWithValuesList.forEach(arr=>{
    if (fields.includes(arr[0])) {
      delete finalObject[arr[0]];
    }
  });

  return finalObject;
};
