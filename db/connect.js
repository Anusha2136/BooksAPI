const mongoose = require("mongoose")


async function connectDB(){
    await mongoose.connect(process.env.MONGO_DB)
    console.log("MongoDB Connection is Successful.........................")
}
module.exports = {
    connectDB
}