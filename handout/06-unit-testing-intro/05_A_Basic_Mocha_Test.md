## A Basic Mocha Test

First, let's write a simple test and run it. Put this code into `app/src/simple.test.js`.

```javascript
  describe('Simple Test', () => {
    it('2*2 should equal 4', () => {
      let x;
      // Do something.
      x = 2 * 2;
      // Check that the results are what we expect and throw an error if something is off.
      if (x!==4) {
        throw new Error('Failure of basic arithmetics.');
      }
    });
  });

```
