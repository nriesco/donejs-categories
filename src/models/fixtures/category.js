import fixture from 'can-fixture';

const store = fixture.store([{
  "_id": "57f1d1682144b7c56fa00b2c",
  "text": "all (fixture)",
  "parent": ""
}, {
  "_id": "57f1d18c2144b7c56fa00b2d",
  "parent": "57f1d1682144b7c56fa00b2c",
  "text": "Clothes (fixture)"
}, {
  "_id": "57f1d1a12144b7c56fa00b2e",
  "text": "Computers (fixture)",
  "parent": "57f1d1682144b7c56fa00b2c"
}, {
  "_id": "57f1d1c32144b7c56fa00b2f",
  "parent": "57f1d18c2144b7c56fa00b2d",
  "text": "Socks (fixture)"
}, {
  "_id": "57f1d1d62144b7c56fa00b30",
  "text": "Shoes (fixture)",
  "parent": "57f1d18c2144b7c56fa00b2d"
}, {
  "_id": "57f1d2012144b7c56fa00b31",
  "parent": "57f1d1a12144b7c56fa00b2e",
  "text": "Hard Drives (fixture)"
}]);


fixture({
  'GET http://localdev.riescorp.com:3030/categories': store.findAll,
  'GET http://localdev.riescorp.com:3030/categories/{id}': store.findOne,
  'POST http://localdev.riescorp.com:3030/categories': store.create,
  'PUT http://localdev.riescorp.com:3030/categories/{id}': store.update,
  'DELETE http://localdev.riescorp.com:3030/categories/{id}': store.destroy
});

export default store;
