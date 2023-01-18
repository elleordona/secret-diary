import secretDiary from "./src/SecretDiary.js";
import Lock from "./src/Lock.js";

// create diaries
const d1 = new secretDiary(new Lock());
const d2 = new secretDiary(new Lock());

console.log(d1.addEntry('yo'));
d2.unlock();
d2.addEntry('hello');

console.log(d2.getEntries());
