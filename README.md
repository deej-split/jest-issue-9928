### jest-issue-9928

This probably demonstrates Jest issue #9928: https://github.com/facebook/jest/issues/9928

See the discussion below, especially "A USEFUL DETAIL"

### To run this

* `npm test`

### Discussion
When I've done what I think is an equivalent run on a travis build (in a different, much more complex repo), I've gotten this error on for the custom matcher `.toMatchEnzymeSnapshot()`

```
    expect(received).toMatchInlineSnapshot()
    Snapshot name: `MyEpicComponent should render all "happy path" details" 1`
    New snapshot was not written. The update flag must be explicitly passed to write a new snapshot.
    This is likely because this test is run in a continuous integration (CI) environment in which snapshots are not written by default.
```

This is equivalent to the second test in "./src/__tests__/App.test.js" called "SADNESS".

In contract, the use of `.toMatchInlineSnapshot()` works fine.

#### A USEFUL DETAIL

I noticed that while running this locally, I get a message on each run that "1 snapshot written" (see below).  This, presuambly, is the same behavior I'm seeing on the CI system.  My custom matcher is causing a snapshot to be written every test run, while the built in one does not.  This doesn't seem right, and seems like it would make the snapshot testing relatively useless. :-()

```
% npm test

> jest-issue-9928@1.0.0 test /Users/davidburrowes/Desktop/jest-issue-9928
> jest

 PASS  src/__tests__/App.test.js
  <App />
    ✓ example happiness (11ms)
    ✓ SADNESS (14ms)

 › 1 snapshot written.
Snapshot Summary
 › 1 snapshot written from 1 test suite.

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   1 written, 1 passed, 2 total
Time:        1.473s, estimated 2s
Ran all test suites.

```



Thanks for any help!!
