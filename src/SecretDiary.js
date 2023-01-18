export default class secretDiary {

    // properties
    #typeOfLock;
    #diaryEntries = [];

    constructor(typeOfLock) {
        this.#typeOfLock = typeOfLock;
    };

    isLocked = () => {
        return this.#typeOfLock.isLocked()
    }; 

    getEntries = () => {
        if (this.isLocked() === true) {
            return `Error: Diary is Locked`;
        } else if (this.isLocked() === false) {
            return this.#diaryEntries.length;
        };
    };
    
    addEntry = () => {
        if (this.isLocked() === true) {
            return `Error: Diary is Locked`;
        };
    };

    unlock = () => {
        return this.#typeOfLock.unlock();
    }

    // // functions
    // addEntry(str) {
    //     return this.diaryEntries.add(str);
    // }

    // getEntries() {
    //     return this.diaryEntries.allEntries();
    // }

};
