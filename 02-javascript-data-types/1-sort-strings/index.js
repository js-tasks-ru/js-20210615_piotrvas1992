/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sortedArray = [...arr];
  const ascDirection = 'asc';

  return sortedArray.sort((a, b)=>
    (param === ascDirection ? a : b).localeCompare((param === ascDirection ? b : a), ['ru', 'en'], {caseFirst: 'upper'})
  );
}
