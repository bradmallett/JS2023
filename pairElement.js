// DNA Pairing
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
    // create pairs object
    // create empty arr
    // loop through letters
    // identify letter to add
    // create array, add items
    let finalPairs = []
    const pairs = {
        "G" : "C",
        "C" : "G",
        "T" : "A",
        "A" : "T"
    }

    for(const char of str) {
      finalPairs.push([char, pairs[char]])
    }
    
    console.log(finalPairs)

    return finalPairs
    }
    
    pairElement("TTGAG")
    //returns [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].