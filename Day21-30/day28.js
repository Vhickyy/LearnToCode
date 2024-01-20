// split and join

const sentence = "How are you doing?"
const splitSentence = sentence.split(" ");
console.log(splitSentence);
// ['How', 'are', 'you', 'doing?']

const joinByComma = splitSentence.join(",");
console.log(joinByComma);
// How,are,you,doing?

const joinBySpace = splitSentence.join(" ");
console.log(joinBySpace);
// How are you doing?