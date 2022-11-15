require('dotenv').config()
const express = require("express")
const sequilize = require("./db")
const models = require("./models/models")
const cors = require("cors")
const router = require("./routes/index")
const errorHandler = require("./middleware/ErrorHandlingMiddleWare")

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api", router)

app.use(errorHandler) // should be called as last middleware

const start = async () => {
    try {
        await sequilize.authenticate()
        await sequilize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.error(e)
    }
}

start()