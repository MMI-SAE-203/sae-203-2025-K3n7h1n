/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4164619532")

  // remove field
  collection.fields.removeById("relation2727696783")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4164619532")

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2551968883",
    "hidden": false,
    "id": "relation2727696783",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Animateur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
