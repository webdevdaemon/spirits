import autoComp from '../../utils/searchModule'

const roster = new Set(['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Accusantium', 'magnam', 'officiis', 'saepe', 'quaerat', 'placeat', 'ipsam', 'Corrupti', 'obcaecati', 'veniam', 'eveniet', 'ut', , 'voluptatem', 'perspiciatis', 'dolore', 'sed', 'itaque', 'dolorem', 'nisi', 'voluptates', 'repellat', 'maxime', 'quasi', 'nesciunt', 'id', 'aliquid', 'dolor', 'nostrum', 'a', 'nulla', 'molestiae', 'exercitationem', 'omnis', 'incidunt', 'magni', 'laborum', 'Fugit', 'nostrum', 'voluptate', 'excepturi', 'et', 'a'])

const cache = {
  Lorem: {name: "Martini"}
}

const isCached = query => roster.has(query)
const getCached = query => cache[`${query}`]

const handleQuery = query => {
  let results = isCached(query)
    ? getCached(query)
    : autoComp(query)
  return results
}

isCached('Lorem') // ?
isCached('Loremo') // ?
isCached('') // ?

getCached('Lorem') // ?
getCached('Loremo') // ?
getCached('') // ?

handleQuery('Lorem') // ?
handleQuery('martini') // ?
handleQuery('loremo') // ?

