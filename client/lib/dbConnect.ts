import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "");
        console.log("Connected");
    } catch (err) {
        throw new Error("failed to connect " + JSON.stringify(err));
    }
};

export default dbConnect;
