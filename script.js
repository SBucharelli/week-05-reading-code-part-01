

// here is an array with words that we can use to make a sentence
const finalChallenge = ['What', 'game', 'do', 'these', 'functions', 'belong', 'to?']


// Turn that array into a single string of "What game do these functions belong to?". 
// Find the Array method and usage to make a sentence
// Found on 
// - https://www.w3schools.com/js/js_array_methods.asp
// - https://javascript.info/array-methods
// - https://blog.logrocket.com/understand-array-methods-by-implementing-them/
// - ⬆️ Seriously go visit this last one. What a great read ⬆️ BRILLIANT!
const finalQuestion = finalChallenge.join(' ')

// Expect "What game do these functions belong to?"
console.log({ finalQuestion })