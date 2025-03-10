/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4164619532")

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3870716890",
    "hidden": false,
    "id": "relation704038707",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "animateurs",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4164619532")

  // remove field
  collection.fields.removeById("relation704038707")

  return app.save(collection)
})
