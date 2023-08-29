function palindrome(str) {
  let processed = str.replace(/[\W_]/g, "").toLowerCase()
  let len = processed.length;
  
  for(let i = 0; i < parseInt(processed.length/2); i++) {
    if(processed[i] !== processed[len - 1]) return false
    len--
  }

  return true
}

palindrome("race CAR");