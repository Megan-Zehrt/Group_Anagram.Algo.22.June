// 49. Group Anagrams



// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.







/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let table = {}
    let results = []

    strs.forEach(word => {

        const sortedWord = word.split('').sort().join('')

        if(!table[sortedWord]){
            table[sortedWord] = []
        }

        table[sortedWord].push(word)
    })

    for(let key in table){
        if(table.hasOwnProperty(key)){
            results.push(table[key])
        }
    }

    return results
};