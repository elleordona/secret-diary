export default class secretDiary {

    // properties
    #typeOfLock;

    constructor(typeOfLock) {
        this.#typeOfLock = typeOfLock;
    };

    isLocked = () => {
        return this.#typeOfLock.isLocked()
    }; 

    getEntries = () => {
        if (this.isLocked() === true) {
            return `Error: Diary is Locked`;
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
