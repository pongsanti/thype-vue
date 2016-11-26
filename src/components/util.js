import {THSARA} from './config'

let util = {

  charCode (char) {
    return char.charCodeAt(0)
  },

  isSara (char) {
    return THSARA.indexOf(this.charCode(char)) !== -1
  },

  spanObject (chars, cumLength) {
    return { chars, cumLength }
  },

  spanArray (text) {
    const token = '|'
    let resultString = ''

    text.split('').forEach((char) => {
      if (!this.isSara(char)) {
        resultString += `${token}${char}`
      } else {
        resultString += char
      }
    })
    // '|a|b|cd|e|f|gab|c'
    let spanCharArray = resultString.split(token).splice(1)
    // ['a', 'b', 'cd', 'e', 'f', 'gab', 'c']
    let spanObjArray = []
    let globalLength = 0
    spanCharArray.forEach((chars) => {
      spanObjArray.push(this.spanObject(chars, globalLength))
      globalLength += chars.length
    })

    return spanObjArray
  }
}

export {util}
