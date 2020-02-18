import axios from 'axios'

/**
 *  @description Evaluates the first character of an input string. If (str[0] === /[a-z]/) -> then str[0] is returned. If (str[0] !== /[a-z]/) -> then "_" is returned.
 * @param {String} str
 * @returns A character that corresponds to the input string's group when sorted alphabetically. Primarily used in sorted lists of data for <select/> elements within forms.
 */
export const itemize = function(str = '') {
  const ALPHA_REGEX = new RegExp(/^[a-z]/, 'gi')
  return (
    str[0].match(ALPHA_REGEX) && str.length > 1
      ? str[0].toLowercase // starts with [a-z]
      : '_' // starts with anything else
  )                  
}

export const listPossibilities = (function() {
	// constants
	const keysByFlag = {
		c: 'strCategory', g: 'strGlass', i: 'strIngredient1'
	}
	const prefix = `https://www.thecocktaildb.com/api/json/v1/1/list.php?`
	// functionality
	const convertFlagToQueryString = flag => `${prefix}${flag}=list`
  const extractList = (axiosResponse, objKey) =>
    axiosResponse
      .then(({data}) => data)
      .then(({drinks}) => drinks)
      .then(drinks => drinks.map(o => o[objKey]))
      .catch(err => Error(err))
  const isValidFlag = flag => flag.length === 1 && /[cgi]/.test(flag)
  function getPossibilities(flag) {
    const listKey = keysByFlag[flag]
    const rawResponse = axios(convertFlagToQueryString(flag))
    const possibilities = extractList(rawResponse, listKey)
    return possibilities
  }
	// exported function
  function listPossibilities(flag) {
    return isValidFlag(flag)
      ? getPossibilities(flag)
      : Error('ERROR: suspect => listPossibilities')
  }
  return listPossibilities
})()


