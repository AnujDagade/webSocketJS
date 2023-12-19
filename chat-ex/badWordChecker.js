const fs = require('fs');

function containsBadWords(text) {
    try {
        const badWords = fs.readFileSync('./badWords.txt', 'utf-8')
        const badWordsArray = badWords.split('\n')
        const textArray = text.toLowerCase().split(' ')
        const contains = textArray.some(ele => badWordsArray.includes(ele))
    
        return contains
    } catch (error) {
        console.log(error);
        console.error("Error reading file");
        return false
    }
 
}


exports.containsBadWords = containsBadWords ;