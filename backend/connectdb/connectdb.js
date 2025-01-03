import { connect as _connect } from "mongoose";
import 'dotenv/config';
const connectionString = process.env.CONNECTION_STRING;
const connect = async()=>{
    try {
        _connect(connectionString);
       return Promise.resolve("DB Connected");
    } catch (error) {
       return Promise.reject(new Error("Error in Connection"+error.message));
    }
}
connect()

export default connect;