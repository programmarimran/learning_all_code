// ### Task 4 (Hard)

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// **Input:**


const statement = 'I am a hard working person';

let statementArry = statement.split(' ');

statementArry.reverse();

const result = statementArry.join(' ')
console.log(result)




// **Output:**

// `'person working hard a am I'`