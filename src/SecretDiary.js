export default class secretDiary {

    // properties
    #typeOfLock;

    constructor(typeOfLock) {
        this.#typeOfLock = typeOfLock;
    };

    isLocked = () => { return this.#typeOfLock.isLocked() }; 
    

    // // functions
    // addEntry(str) {
    //     return this.diaryEntries.add(str);
    // }

    // getEntries() {
    //     return this.diaryEntries.allEntries();
    // }

};
