const ApiError = require("../error/ApiError")
const {Basket} = require("../models/models")


class BasketController {
    async getBasket(req, res, next) {
        return res.json({message: "Корзина пуста"})
    }

    async removeDevice(req, res, next) {
        const {id} = req.params
        if (!id) {
            return next(ApiError.badRequest("Немає позиції з таким ID!"))
        }
        // await Basket.update()
        return res.json({message: "Ви намагаєтеся видалити позицію номер " + id})
    }
}

module.exports = new BasketController()