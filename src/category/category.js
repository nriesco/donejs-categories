import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './category.less!';
import Category from 'donejs-categories/models/category';
import template from './category.stache!';


export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the category-menu component'
    },
    categoriesPromise: {
      get: function() {
        console.log('just before retrieving Category.getList with parent:', this.attr('parent'), this.parent);
        return Category.getList({ parent: this.attr('parent') });
      },
    },
    // // promise-less version:
    // categoriesList: {
    //   get: function(lastSetValue, resolve) {
    //     this.categoriesPromise.then(resolve);
    //   }
    // },
  },
  parent: "57f1d1682144b7c56fa00b2c",
  previousParent: null,
  categoryVMProperty1: "categoryVMProperty1",
  categoryVMMethod1: function(param1) {
    console.log('categoryVMMethod1 was called!', this);
    console.log('params:', typeof param1, param1);
    this.attr('previousParent', this.parent);
    this.attr('parent', param1._id);
  },
  categoryVMMethod2: function(param1) {
    console.log('categoryVMMethod2 was called!', this);
    console.log('params:', typeof param1, param1, this.title);
  },
  goBack: function(param1) {
    console.log('goBack was called!', this);
    console.log('params:', typeof param1, param1);
    this.attr('parent', this.previousParent);
  },
  goHome: function() {
    console.log('goHome was called!', this);
    this.attr('parent', '57f1d1682144b7c56fa00b2c');
  }
});

export default Component.extend({
  tag: 'category-menu',
  viewModel: ViewModel,
  template,
  helpers: {
    helper1: function(param1) {
      return JSON.stringify(param1().__observeData.reason.statusText);
    }
  }
});

/*
sample:
{
  "_handler": {
    "handler": { "id": 305, "value": { "readyState": 0, "status": 0, "statusText": "Error: connect ECONNREFUSED 127.0.0.1:3030" }, "handled": true, "reported": false },
    "resolved": true
  },
  "__observeData": {
    "isPending": false,
    "state": "rejected",
    "isResolved": false,
    "isRejected": true,
    "reason": { "readyState": 0, "status": 0, "statusText": "Error: connect ECONNREFUSED 127.0.0.1:3030" },
    "_cid": "16376",
    "__bindEvents": { "state": [{ "name": "state" }, { "name": "state" }, { "name": "state" }, { "name": "state" }] }
  }
}
*/
