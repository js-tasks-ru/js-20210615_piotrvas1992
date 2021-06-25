/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const arrList = path.split('.');
  const arrListLimit = arrList.length;
  let counter = 0;
  let prop;

  const func = (object, list) => {
    if (counter < arrListLimit) {
      prop = object[list[counter]];

      if (!prop) {
        return;
      }

      counter++;

      return func(prop, arrList);
    } else {
      counter = 0;
      return prop;
    }
  };

  return (obj)=> func(obj, arrList);
}
