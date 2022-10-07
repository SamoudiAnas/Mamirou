import mongoose from "mongoose";

const dbConnect = async () => {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("Connected");
};

export default dbConnect;
