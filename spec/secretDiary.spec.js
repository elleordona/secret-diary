// initialize tests
import lock from "../src/Lock.js";
import secretDiary from "../src/SecretDiary.js";
import unlock from "../src/Unlock.js";


describe('adding an entry', () => {
    // test the addEntry when diary is unlocked
    it('should return the value of the entry', () => {
        // arrange
        const myDiary = new secretDiary(new unlock());
        // act
        const result = myDiary.addEntry('hello');
        // assert
        expect(result).toBe('hello');

    });

    // test the addEntry when diary is locked
    it('should return Cannot add entries when locked', () => {
        // arrange
        const myDiary = new secretDiary(new lock());
        // act
        const result = myDiary.addEntry('hello');
        // assert
        expect(result).toBe(`Cannot add entries when locked`);

    })
});

describe('getting entries from diary', () => {
    // test the getEntries when diary is unlocked
    it('should show the entries in the diary', () => {
        // arrange

        // act

        // assert

    });

    // test the getEntries when diary is locked
    it('should show This diary is locked', () => {
        // arrange

        // act

        // assert

    });
    
});
