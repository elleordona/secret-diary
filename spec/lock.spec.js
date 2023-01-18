// initialise tests for lock

import lock from "../src/Lock.js"

describe('when creating a lock', () => {
    it('should be locked when it is made', () => {
        // Arrange
        const testLock = new lock();
        // Act
        const result = testLock.isLocked();
        // Assert
        expect(result).toBeTrue();
    });
});

describe('unlocking the lock tests', () => {
    it('should unlock the lock when unlock is called', () => {
        // Arrange
        const testLock = new lock();
        // Act
        testLock.unlock();
        const result = testLock.isLocked();
        // Assert
        expect(result).toBeFalse();
    });
});