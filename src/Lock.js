export default class lock {

    #locked = true; // default status 

    isLocked = () => {
        return this.#locked // shows user the state of the lock
    };

    toggleLock = () => {
        this.#locked = !this.#locked; // changes the lock to the opposite state
    };

};