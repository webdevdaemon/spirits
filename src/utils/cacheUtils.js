

// export default (() => ({
//   /** 
//    * adds a query to the roster
//    * @param {String} query
//    * @param {Set<String>} roster
//    * @returns {Set<String>} An updated roster
//    * */
//   addToRoster(query, roster) {
//     if (!roster || !(roster instanceof Set)) return new Error(nullParam)
//     return new Set(roster.add(query))
//   },
//   // add key/value to [Cache] (no mutation)
//   addToCache(new = {}, current = {}) {
//     return {...current, ...new}
//   },
//   // check [RosterSet] for string 
//   isCached(query = '', roster = new Set()) {
//     return roster.has(query)
//   },
//   // return cached value from [Cache]
//   getCachedResults(query = '', currentCache = {}) {
//     return currentCache[query]
//   },
// }))()

