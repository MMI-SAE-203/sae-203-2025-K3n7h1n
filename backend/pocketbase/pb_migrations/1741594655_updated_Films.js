/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3870716890",
    "hidden": false,
    "id": "relation2011499568",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Acteurs",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // remove field
  collection.fields.removeById("relation2011499568")

  return app.save(collection)
})
