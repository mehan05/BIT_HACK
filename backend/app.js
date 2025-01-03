const express = require('express')
const route = require("./routes/route");
const cors = require('cors')
const app = express()
const connect = require('./connectdb/connectdb');
const Loginrouter = require('./routes/loginRoute');
const PSrouter = require('./routes/PSroute');
const { checkAdmin } = require('./middleware/adminMiddleware');
app.use(express.json());
app.use(cors());
app.use("/api/v1/login",Loginrouter);
app.use("api/v1/domain-problemStatement",checkAdmin,PSrouter)
connect()
.then((msg)=>{
    console.log(msg)
})
.catch((err)=>{
    console.log(err)
})

module.exports = app

