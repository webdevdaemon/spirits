import React, {Children, cloneElement, createElement} from 'react'
/**
 * @type {object} ReactProps - React.Component props */

/**
 * Used to create Ingredient objects to be used in a number of different ways throughout the app.
 * @export
 * @class Ingredient */

export class Ingredient {
  /**
   * Creates an instance of Ingredient.
   * @param {*} { name = "", count = 0, unit = "part"}
   * @memberof Ingredient */
  constructor({name = '', count = 0, unit = 'part'}) {
    const char = name[0].trim().toLowercase()
    this.name = `${name}`
    this.char = `${char}`
    this.unit = `${unit}`
    this.count = Number(count)
    this.listObj = {name, char}
  }
  // #region GETTERS & SETTERS BEGIN
  /**
   * @returns ingredient {name} */
  getName() {return this.name}
  /**
   * @returns the first character of {name} */
  getChar() {return this.char}
  /**
   * @returns current value for {unit} */
  getUnit() {return this.unit}
  /**
   * assigns input value to {unit}
   * @returns __void__ */
  setUnit(value) {this.unit = value}
  /**
   * @returns current value for {count} */
  getCount() {return this.count}
  /**
   * assigns input value to {unit}
   * @returns __void__ */
  setCount(value) {this.count = value}
  /**
   * @returns a react-widgets-friendly list object */
  getListObj() {return this.listObj}
  
  //#endregion
  // GETTERS & SETTERS END
  
  /**
   * @param {object} {children, render = null, tag = null, ...props}
   * @returns 
   * @memberof Ingredient */
  Container({children, render = null, tag = null, ...props}) {
    const {
      name, char, getUnit, setUnit, getCount, setCount, getListObj
    } = this

    const contents = render
      ? render({name, char, getUnit, setUnit, getCount, setCount, getListObj})
      : Children.map(children, child => cloneElement(child, {
        name, char, getUnit, setUnit, getCount, setCount, getListObj
      }))
    return <>{
      tag 
        ? createElement(tag, props, contents)
        : <>{contents}</>
    }</>
  }
}
