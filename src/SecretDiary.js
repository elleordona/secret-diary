class secretDiary {

    // // properties
    // #Entries;

    constructor(diaryEntries) {
        this.diaryEntries = diaryEntries;
    }

    // functions
    addEntry(str) {
        return this.diaryEntries.add(str);
    }

    getEntries() {
        return this.diaryEntries.allEntries();
    }

}

module.exports = secretDiary;