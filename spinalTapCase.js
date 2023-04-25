// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    const spaces = /\s+/g
    const camelCase = /([a-z])(?=[A-Z])/g
    const underScore = /_/g
  
    // CAMELCASE - find camelcase words and separate by 1 space
    if(camelCase.test(str)) {
      str = str.replace(camelCase, "$1 ")
    }
  
    // SPACES - find all spaces and replace with 1 dash
    if(spaces.test(str)) {
      str = str.replace(spaces, '-')
    }
  
    // UNDERSCORE - find all underscores and replace with 1 dash
    if(underScore.test(str)) {
      str = str.replace(underScore, "-")
    }
  
  return str.toLowerCase()
  }
  
  spinalCase('The_Andy_Griffith_Show');
  // returns "the-andy-griffith-show"
  
  
  
  