import { isCorrect } from '../functions.js';
const test = QUnit.test;

test('returns true', function(assert) {
    const userAnswer = 'yes';
    const expected = true;
    const result = isCorrect(userAnswer);
    assert.equal(result, expected);
    
});

test ('returns false', function(assert) {
    const userAnswer = 'no';
    const expected = false;
    const result = isCorrect(userAnswer);
    assert.equal(result, expected);

});    