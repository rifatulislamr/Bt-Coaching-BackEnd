import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const conectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${conectionInstance.connect.host}`);
    } catch (error) {
        console.log("MongoDB connection Failed!!!! please solve this problem ", error);
        process.exit(1)
    }
}

export default connectDB