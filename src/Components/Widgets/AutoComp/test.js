import autoComp from '../../../utils/searchModule'

let roster = new Set([
  'Lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipisicing',
  'elit',
  'Accusantium',
  'magnam',
  'officiis',
  'saepe',
  'quaerat',
  'placeat',
  'ipsam',
  'Corrupti',
  'obcaecati',
  'veniam',
  'eveniet',
  'ut',
  'voluptatem',
  'perspiciatis',
  'dolore',
  'sed',
  'itaque',
  'dolorem',
  'nisi',
  'voluptates',
  'repellat',
  'maxime',
  'quasi',
  'nesciunt',
  'id',
  'aliquid',
  'dolor',
  'nostrum',
  'a',
  'nulla',
  'molestiae',
  'exercitationem',
  'omnis',
  'incidunt',
  'magni',
  'laborum',
  'Fugit',
  'nostrum',
  'voluptate',
  'excepturi',
  'et',
  'a',
])

const cache = {
  Lorem: {
    name: 'Martini'
  },
}

const isCached = query => roster.has(`${query}`)
const getCached = query => cache[`${query}`] || null

const handleQuery = query => {
  const bool = isCached(`${query}`)
  console.log(bool ? 'FROM_CACHE:' : "FROM_QUERY:")
  let results = bool ? getCached(query) : autoComp(query)
  return results
}

console.log(isCached('Lorem')) 
console.log(isCached('Loremo'))
console.log(isCached(''))
console.log(getCached('Lorem'))
console.log(getCached('Loremo'))
console.log(getCached(''))
console.log(handleQuery('Lorem'))
console.log(handleQuery('martini'))
console.log(handleQuery('loremo'))
