const ApiError = require("../error/ApiError")
const {Rating} = require("../models/models")


class RatingController {
    async addRating(req, res, next) {
        const {deviceID, userID, rate} = req.body
        if (!deviceID) {
            return next(ApiError.badRequest("Неправильний ID товару!"))
        }
        if (!userID) {
            return next(ApiError.badRequest("Не передано ID користувача!"))
        }
        if (!rate) {
            return next(ApiError.badRequest("Не вказано оцінку!"))
        }
        return res.json({message: `Користувач з ${userID} додав оцінку ${rate} для товара з ID ${deviceID}`})
    }

    async getRating(req, res, next) {
        const {deviceID} = req.params
        if (!deviceID) {
            return next(ApiError.badRequest("Неправильний ID товару!"))
        }
        return res.json({message: `Рейтинг товару з ID ${deviceID} - 5`})
    }
}

module.exports = new RatingController()