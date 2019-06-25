const router = require("express").Router()
const userController = require("../../controller/userController")

//api/found
  router.route("/") 
    .post(userController.create)

//api/found/:id
router.route("/:id")
  .put(userController.update)
  .delete(userController.delete)

module.exports = router