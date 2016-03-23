import { test } from 'qunit';
import moduleForAcceptance from 'arrayproxy-dead/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todos');

test('visiting /todos', function(assert) {
    visit('/');
    andThen(function() {
        assert.equal(find('p').length, 0);
    });
    click('button');
    andThen(function() {
        assert.equal(find('p').length, 1);
        assert.equal(find('p:eq(0)').text(), 'added');
    });
    click('button');
    andThen(function() {
        assert.equal(find('p').length, 2);
        assert.equal(find('p:eq(0)').text(), 'added');
        assert.equal(find('p:eq(1)').text(), 'added');
    });
});
