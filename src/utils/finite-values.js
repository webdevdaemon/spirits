// - Add Recipe Form: Unit Select Values
/*---------------------------------------------------------- */
const FORM_UNITS = (function(){
  const placeholder = 'click to choose'
  const valid = [
    ['part', 'parts'],
    ['shot', 'shots'],
    ['oz', 'oz'],
    ['unit', 'units'],
    ['splash', 'splashes'],
    ['dash', 'dashes'],
    ['twist', 'twists'],
    ['slice', 'slices'],
    ['tsp', 'tsp'],
    ['tbsp', 'tbsp'],
    ['wedge', 'wedges'],
    ['squeeze', 'squeezes'],
  ]
  const selectOptions = [[placeholder, placeholder], ...valid]
  const isValid = input => valid.filter(([a, b]) => (
    input === a || input === b
  )).length > 0

  return {isValid, selectOptions}
})()



export {FORM_UNITS}
