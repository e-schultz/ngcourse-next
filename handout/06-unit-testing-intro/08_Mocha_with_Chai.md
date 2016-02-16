## Mocha with Chai

Chai is an assertion library. It makes it easy to throw errors when things are
not as we expect them to be. Chai has two styles: "[TDD](http://en.wikipedia.org/wiki/Test-driven_development)" and "[BDD](http://en.wikipedia.org/wiki/Behavior-driven_development)". We'll be using the "[BDD](http://en.wikipedia.org/wiki/Behavior-driven_development)" style.

We have already installed Chai when we ran `npm install` and it has also been configured in the karma config file. So, now we can go straight to using it.

```javascript
  describe('Simple Test', () => {
    it('2*2 should equal 4', () => {
      let x = 2 * 2;
      let y = 4;
      // Assert that x is defined.
      chai.expect(x).to.not.be.undefined;
      // Assert that x equals to specific value.
      chai.expect(x).to.equal(4);
      // Assert that x equals to y.
      chai.expect(x).to.equal(y);
      // See http://chaijs.com/api/bdd/ for more assertion options.
    });
  });
```
