// Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
// fearNotLetter("abce") should return the string d.

// find index of where str starts ("c" starts on index 2)
// loop through str and verify letters aren't missing
// if letter is missing from str, return that letter
// if no letters are missing, return undefined


function fearNotLetter(str) {
    const alph = "abcdefghijklmnopqrstuvwxyz"

    //find where the index starts
    let index = alph.indexOf(str[0])

    // loop through str and find missing letters
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== alph[i + index]) {

        return alph[i + index]
        }
    }
    return undefined
}

// fearNotLetter("jklnop") returns "m"
// fearNotLetter("stuvw") returns undefined