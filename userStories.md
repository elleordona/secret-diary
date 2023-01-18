## User Story 1

```sh
As a user,
I want to find that a new secret diary is locked,
So that I have to unlock it to use it.
```
**Test 1** - when `Lock` is created, its `locked` is `true` [done]

**Test 2** - when a `secretDiary` is created, its `locked` property is `true` [done]

**Test 3** - test that the diary uses `isLocked` from `Lock`/`typeOfLock` [done]

---
## User Story 2

```sh
As a user,
I want to see an error when trying to use a locked diary,
So that access to it is restricted when locked.
```

**Test 4** - `getEntries` returns error when diary is locked [done]

**Test 5** - `addEntry` returns error when diary is locked [done]

---
## User Story 3

```sh
As a user,
I want to unlock the diary,
So that i can use it.
```

**Test 6** - `unlock` changes the state of `locked` to false in the instance of `lock` [done]

**Test 7** - `unlock` changes the state of `locked` to false in the instance of `secretDiary` [done]

---