const Router = require("express")
const router = new Router()
const basketController = require("../controllers/basketController")

router.get("/", basketController.getBasket)
router.delete("/:id", basketController.removeDevice)

module.exports = router