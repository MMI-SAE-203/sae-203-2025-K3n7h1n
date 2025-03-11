/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select753727511",
    "maxSelect": 1,
    "name": "Type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Shonen",
      "Seinen",
      "Shojo",
      "Kodomo"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // remove field
  collection.fields.removeById("select753727511")

  return app.save(collection)
})
