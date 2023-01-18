// initialise tests for lock

import Lock from "../src/Lock.js"

describe('when creating a lock', () => {
    it('should be locked when it is made', () => {
        // Arrange
        const testLock = new Lock();
        // Act
        const result = testLock.isLocked();
        // Assert
        expect(result).toBeTrue();
    });
});

describe('unlocking the lock tests', () => {
    it('should unlock the lock when unlock is called', () => {
        // Arrange
        const testLock = new Lock();
        // Act
        testLock.unlock();
        const result = testLock.isLocked();
        // Assert
        expect(result).toBeFalse();
    });
});

describe('locking the lock tests', () => {
    it('should lock the lock when lock is called', () => {
        // Arrange
        const testLock = new Lock();
        // Act
        testLock.lock();
        const result = testLock.isLocked();
        // Assert
        expect(result).toBeTrue();
    });
});