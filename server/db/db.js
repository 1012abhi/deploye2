import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`)
        .then(() => {
            console.log("MongoDB connected")
        })
        .catch((err) => {   
            console.log(err, "MongoDB connection failed");
        })
    } catch (error) {
        console.log(error, "MongoDB connection error in catch block");
        
    }
}

export default connectDB;