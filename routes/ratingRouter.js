const Router = require("express")
const router = new Router()
const ratingController = require("../controllers/ratingController")

router.get("/:deviceID", ratingController.getRating)
router.post("/add", ratingController.addRating)

module.exports = router