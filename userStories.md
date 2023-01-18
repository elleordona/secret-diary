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

## User Story 4

```sh
As a user,
I want to be able to see all entries when the diary is unlocked,
So that I can reminisce
```

**Test 8** - when a `secretDiary` is created the length of `diaryEntries` is 0 [done]

**Test 9** - `getEntries` will give the length of the `diaryEntries` array [done]

## User Story 5

```sh
As a user,
I want to be able to add entries to the diary when unlocked,
So that i can journal my life.
```

**Test 10** - when `addEntry` is called with an `entry`, while the `secretDiary` is `Unlocked`, the length of `entries` should increase by 1

**Test 11** - make sure that the `entry` has been added to `entries` after `addEntry` has been called

---