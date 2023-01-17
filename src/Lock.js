class lock {

    add() {
        return `Cannot add entries when locked`;
    }

    allEntries() {
        return `This diary is locked`;
    }
}

module.exports = lock;