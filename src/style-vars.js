const header_height = 10
const footer_height = 12
const content_height = 100 - (header_height + footer_height)
const content_margin_top = header_height * 0.4

const HEIGHT = {
  header: `${header_height}vh`,
  footer: `${footer_height}vh`,
  content: `${content_height}vh`,
  contentMarginTop: `${content_margin_top}vh`
}
const COLOR = {
  uiDark: ` #005051 `,
}
const GRADIENT = {
  darkA: `
    background-image: linear-gradient(
      -59deg,
      #485563 0%,
      #3A4551 46%,
      #29323C 100%
    )
  `,
  lightA: `
    background-image: linear-gradient(
      135deg,
      #dddddd 0%,
      #cccccc 33%,
      #bbbbbb 100%
    )
  `
}
const UTILS = {}
const Z_INDEX = {
  back: 0,
  i: 100,
  ii: 200,
  iii: 300,
  iv: 400,
  v: 500,
  vi: 600,
  vii: 700,
  viii: 800,
  ix: 900,
  x: 1000,
  front: 9999,
}


export {HEIGHT, COLOR, GRADIENT, UTILS, Z_INDEX}

