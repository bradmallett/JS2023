
// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

const lengthOfLongestSubstring = (str) => {
    const myLetters = str.split('')
    let biggestStr = []
    let biggestStrLength = 0
    let currentStr = []

    for(let i = 0; i < myLetters.length; i++) {

        // If letter doesn't exist ==================================
        if(!currentStr.includes(myLetters[i])) {
            currentStr.push(myLetters[i])

            // set biggest string
            if(currentStr.length > biggestStrLength) {
                biggestStr = [...currentStr]
                biggestStrLength = currentStr.length
            }
        }


        // If letter does exist ==================================
        else {
            currentStr = []
            currentStr.push(myLetters[i])
        }
    }

    return biggestStr.length
}

lengthOfLongestSubstring("abcabcbb")
// returns 3
// answer is "abc", with the length of 3