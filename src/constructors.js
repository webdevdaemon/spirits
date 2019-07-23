export class Ingredient {
  constructor({ name = "", count = 0, unit = "part"}) {
    this.name = `${name}`
    this.char =  `${name[0].toLowercase()}`
    this.unit = `${unit}`
    this.count = Number(count)
  }
}