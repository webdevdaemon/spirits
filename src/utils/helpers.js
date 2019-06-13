const ALPHA_REGEX = new RegExp(/^[a-z]/, 'gi')
export const itemize = (function() {
  return str =>
    str[0].match(ALPHA_REGEX) && str.length > 1
      ? str[0].toLowercase // alpha character
      : '_' // num or symbol
})()
