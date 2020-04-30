const { toMatchInlineSnapshot } = require('jest-snapshot');
const toJson = require('enzyme-to-json').default;

expect.extend({
  // More info:
  // https://jestjs.io/docs/en/expect#expectextendmatchers
  // https://github.com/facebook/jest/blob/d425a49bd575e7167bc786f3c4f2833589091fa1/packages/jest-snapshot/src/index.ts#L215
  toMatchEnzymeSnapshot(wrapper) {
    return toMatchInlineSnapshot.call(this, toJson(wrapper));
  },
});
