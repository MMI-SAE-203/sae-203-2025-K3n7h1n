/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3870716890")

  // update collection data
  unmarshal({
    "name": "Invite"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3870716890")

  // update collection data
  unmarshal({
    "name": "Acteurs"
  }, collection)

  return app.save(collection)
})
