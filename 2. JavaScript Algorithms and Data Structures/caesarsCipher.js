function rot13(str) {
  let decrypted = []

  for(let i = 0; i < str.length; i++) {
    if(str[i].match(/[A-Z]/g)) {
      // A = 65, Z = 90
      let code = str.charCodeAt(i) + 13
      let decr = code > 90 ? 65 + (code - 91) : code
      decrypted.push(String.fromCharCode(decr))
    } else {
      decrypted.push(str[i])
    }
  }

  return decrypted.join("")
}

rot13("SERR PBQR PNZC")