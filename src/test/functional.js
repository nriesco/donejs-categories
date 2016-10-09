import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('donejs-categories functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('donejs-categories main page shows up', function() {
  F('title').text('donejs-categories', 'Title is set');
});
