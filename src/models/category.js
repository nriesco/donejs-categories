import can from 'can';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can/map/define/define';
// import 'donejs-categories/models/fixtures/category';

export const Category = can.Map.extend({
  define: {},
  categoryMethod1: function() {
    console.log('categoryMethod1 clciked!', this);
  },
  categoryProperty1: "categoryProperty1",
  categoryProperty2: "categoryProperty2",
  parent: 'parentAttr (category)'
});

Category.List = can.List.extend({
  Map: Category
}, {});

export const categoryConnection = superMap({
  // url: '/category',
  url: 'http://localdev.riescorp.com:3030/categories',
  idProp: '_id',
  Map: Category,
  List: Category.List,
  name: 'category'
});

tag('category-model', categoryConnection);

export default Category;
