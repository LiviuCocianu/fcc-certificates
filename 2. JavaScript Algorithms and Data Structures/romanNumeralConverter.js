const romanMap = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I"
}

const keys = Object.keys(romanMap)
const revKeys = keys.reverse()
const mapLen = keys.length

function convertToRoman(num) {
  let base = num
  let romans = []
  let index = 0

  while(index < mapLen && base > 0) {
    let val = revKeys[index]

    if(base >= val) {
      romans.push(romanMap[val])
      base -= val
      index = 0
      continue
    }
      
    index++
  }

  return romans.join("")
}

convertToRoman(29)