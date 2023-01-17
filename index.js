const secretDiary = require("./src/SecretDiary");
const unlock = require("./src/Unlock");
const lock = require("./src/Lock");

let entry1 = new secretDiary(new unlock()); // create new entry
console.log(entry1.addEntry('hello')); // add string to entry
console.log(entry1.addEntry(' how are you'));
console.log(entry1.getEntries()); // log entries

let entry2 = new secretDiary(new lock()); 
console.log(entry2.addEntry('something'));
console.log(entry2.getEntries());