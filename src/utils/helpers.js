const ALPHA_REGEX = new RegExp(/^[a-z]/, 'gi')

export const itemize = (function() {
  return str =>
    str[0].match(ALPHA_REGEX) && str.length > 1
      ? str[0].toLowercase // alpha character
      : '_' // num or symbol
})()

/**
 * @description reduces a 2D array into a flattened array,
 * keeping only the values at the defined index(es)
 * @param {number[]} arr - the 2D array
 * @param {(number | number[])} keepers - single number, array of numbers, overloaded arguments, or even a predicate function for more dynamic situations. Either used to specify which index/indices of each nested array to include in the flattened outputvalues you want to keepers from each nested array
 * @return a flattened array containing only the specific values determined by {@link keepers} parameter at invocation.
 */
export const reduceNestedArrays = (function() {
  return (arr, ...keepers) =>
    arr.reduce((accum, nested) => {
      const targetVals =
        keepers instanceof Number
          ? [keepers]
          : keepers.map(i => nested[i])
      return [...accum, ...targetVals]
    }, [])
})()
