import {test} from 'node:test';
import assert from 'node:assert/strict';
import {addScore, comboMultiplier} from '../src/score.js';

test('addScore adds non-negative integer points', () => {
  assert.equal(addScore(10, 5), 15);
  assert.throws(() => addScore(0, -1), RangeError);
});

test('comboMultiplier tiers', () => {
  assert.equal(comboMultiplier(0), 1);
  assert.equal(comboMultiplier(5), 2);
  assert.equal(comboMultiplier(10), 3);
});
