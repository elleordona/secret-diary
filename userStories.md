## User Story 1

```sh
As a user,
I want to find that a new secret diary is locked,
So that I have to unlock it to use it.
```
**Test 1** - when `Lock` is created, its `locked` is `true`

**Test 2** - when a `secretDiary` is created, its `locked` property is `true`

**Test 3** - test that the diary uses `isLocked` from `Lock`/`typeOfLock`