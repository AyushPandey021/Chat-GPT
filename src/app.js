const express = require("express")
const cookieParser = require('cookie-parser')
const authRoutes = require("./routes/auth.routes")
const chatRoutes = require
const app = express()
// using middleware
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/chat",chatRoutes)
module.exports = app