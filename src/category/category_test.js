import QUnit from 'steal-qunit';
import { ViewModel } from './category';

// ViewModel unit tests
QUnit.module('donejs-categories/category');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the category-menu component');
});
