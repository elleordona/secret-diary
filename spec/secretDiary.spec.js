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
    });
});

describe('getEntries tests', () => {
    
    it('should give an error when diary is locked', () => {
        // Arrange
        const testLock = { isLocked: () => true };
        const testDiary = new secretDiary(testLock);
        // Act
        const result = testDiary.getEntries();
        // Assert
        expect(result).toMatch(`Error: Diary is Locked`);
    });

    it('should show that there are no entries when a new unlocked diary is created', () => {
        // Arrange
        const testLock = { isLocked: () => false };
        const testDiary = new secretDiary(testLock);
        // Act
        const result = testDiary.getEntries();
        // Assert
        expect(result).toBe(0);
    });
    
});

describe('addEntry tests', () => {
    
    it('should give an error when diary is locked', () => {
        // Arrange
        const testLock = { isLocked: () => true };
        const testDiary = new secretDiary(testLock);
        // Act
        const result = testDiary.addEntry();
        // Assert
        expect(result).toMatch(`Error: Diary is Locked`);
    });

    it('should increase the length of diaryEntries by 1 when diary is unlocked', () => {
        // Arrange
        const testLock = { isLocked: () => false };
        const testDiary = new secretDiary(testLock);
        // Act
        testDiary.addEntry('hello');
        const result = testDiary.getEntries();
        // Assert
        expect(result).toBe(1);
    });
    
});

describe('unlocking the diary tests', () => {
    it('should call unlock on the lock when the diary calls unlock', () => {
        // Arrange
        const testLock = { unlock: () => { } };
        const lockSpy = spyOn(testLock, 'unlock');
        const testDiary = new secretDiary(testLock);
        // Act
        testDiary.unlock();
        // Assert
        expect(lockSpy).toHaveBeenCalled();
    });
});

describe('locking the diary tests', () => {
    it('should call lock on the lock when the diary calls lock', () => {
        // Arrange
        const testLock = { lock: () => { } };
        const lockSpy = spyOn(testLock, 'lock');
        const testDiary = new secretDiary(testLock);
        // Act
        testDiary.lock();
        // Assert
        expect(lockSpy).toHaveBeenCalled();
    });
});