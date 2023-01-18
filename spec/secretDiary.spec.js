// initialize tests for secretDiary
import secretDiary from "../src/SecretDiary.js";

describe('when we create a secretDiary', () => {
    // tests for when a diary is created
    
    // setup of common variables
    let testLock, testDiary;

    beforeEach(() => {
        // Arrange
        testLock = { isLocked: () => true }; // dummy lock for testing
        testDiary = new secretDiary(testLock);
    });

    // Clean Up
    afterEach(() => {
        testLock, testDiary = undefined; // reset each variable
    });


    it('should be locked when created', () => {
        // Act
        const result = testDiary.isLocked();

        // Assert
        expect(result).toBeTrue();
    });

    it('should call isLocked from the typeOfLock used', () => {
        // Arrange
        const lockSpy = spyOn(testLock, 'isLocked'); // watching the function isLocked() within the variable testLock
        // Act
        testDiary.isLocked();
        // Assert
        expect(lockSpy).toHaveBeenCalled();
    })
})


//! ignore these test for now

// xdescribe('adding an entry', () => {
//     // test the addEntry when diary is unlocked
//     it('should return the value of the entry', () => {
//         // arrange
//         const myDiary = new secretDiary(new unlock());
//         // act
//         const result = myDiary.addEntry('hello');
//         // assert
//         expect(result).toBe('hello');

//     });

//     // test the addEntry when diary is locked
//     it('should return Cannot add entries when locked', () => {
//         // arrange
//         const myDiary = new secretDiary(new lock());
//         // act
//         const result = myDiary.addEntry('hello');
//         // assert
//         expect(result).toBe(`Cannot add entries when locked`);

//     })
// });

// xdescribe('getting entries from diary', () => {
//     // test the getEntries when diary is unlocked
//     it('should show the entries in the diary', () => {
//         // arrange
//         const myDiary = new secretDiary(new unlock());
//         // act
//         const result = myDiary.getEntries();
//         // assert
//         expect(result).toBe('');
//     });

//     // test the getEntries when diary is locked
//     it('should show This diary is locked', () => {
//         // arrange
//         const myDiary = new secretDiary(new lock());
//         // act
//         const result = myDiary.getEntries();
//         // assert
//         expect(result).toBe('This diary is locked');
//     });
    
// });
