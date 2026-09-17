const express = require("express")
const booksRoute = require("./routes/booksRoute")
const userRoute = require("./routes/userRoute")
const dotenv = require("dotenv")
const dns = require("dns")
const { connectDB } = require("./db/connect")
const app = express()

dns.setServers(["1.1.1.1","8.8.8.8"])
dotenv.config()

app.use(express.json())
app.use(booksRoute)
app.use(userRoute)
connectDB()


app.listen(3000,()=>{
    console.log("Listening to Server..............")
}) 