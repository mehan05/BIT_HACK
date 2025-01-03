const mongoose = require("mongoose")
require('dotenv').config();
const connectionString = process.env.CONNECTION_STRING;
const connect = async()=>{
    try {
        mongoose.connect(connectionString);
       return Promise.resolve("DB Connected");
    } catch (error) {
       return Promise.reject(new Error("Error in Connection"+error.message));
    }
}
connect()

module.exports = connect;