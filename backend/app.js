import express from 'express';
import cors from 'cors';
import connect from './connectdb/connectdb.js';
import {Loginrouter} from "./routes/loginRoute.js"
import {PSrouter} from './routes/PSroute.js';
import { checkAdmin } from './middleware/adminMiddleware.js';

const app = express();

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

export default app;
