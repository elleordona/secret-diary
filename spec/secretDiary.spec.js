// initialize tests for secretDiary
import secretDiary from "../src/SecretDiary.js";




//! ignore these test for now

xdescribe('adding an entry', () => {
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

xdescribe('getting entries from diary', () => {
    // test the getEntries when diary is unlocked
    it('should show the entries in the diary', () => {
        // arrange
        const myDiary = new secretDiary(new unlock());
        // act
        const result = myDiary.getEntries();
        // assert
        expect(result).toBe('');
    });

    // test the getEntries when diary is locked
    it('should show This diary is locked', () => {
        // arrange
        const myDiary = new secretDiary(new lock());
        // act
        const result = myDiary.getEntries();
        // assert
        expect(result).toBe('This diary is locked');
    });
    
});
