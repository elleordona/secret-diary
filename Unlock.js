class unlock {

    #entry

    constructor(entry = '') {
        this.#entry = entry;
    }

    add(str) {
        return this.#entry += str;
    }

    allEntries() {
        return this.#entry;
    }
}

module.exports = unlock;